import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SpeakerSearchBar from '../SpeakerSearchBar/SpeakerSearchBar';
import Speaker from '../Speaker/Speaker';

const Speakers = () => {
  function toggleSpeakerFavorite(speakerRec) {
    return {
      ...speakerRec,
      isFavorite: !speakerRec.isFavorite,
    };
  }

  async function onFavoriteToggleHandler(speakerRec) {
    const toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);
    const speakerIndex = speakers
      .map((speaker) => speaker.id)
      .indexOf(speakerRec.id);

    try {
      await axios.put(
        `http://localhost:4000/speakers/${speakerRec.id}`,
        toggledSpeakerRec,
      );
      setSpeakers([
        ...speakers.slice(0, speakerIndex),
        toggledSpeakerRec,
        ...speakers.slice(speakerIndex + 1),
      ]);
    } catch (e) {
      setStatus(REQUEST_STATUS.ERROR);
      setError(e);
    }
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [speakers, setSpeakers] = useState([]);

  const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  };

  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/speakers/');
        setSpeakers(response.data);
        setStatus(REQUEST_STATUS.SUCCESS);
      } catch (e) {
        console.log('Loading data error', e);
        setStatus(REQUEST_STATUS.ERROR);
        setError(e);
      }
    };
    fetchData();
  }, []);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

  return (
    <div>
      <SpeakerSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {isLoading && <div>Loading...</div>}
      {hasErrored && (
        <div>
          Loading error... Is the json-server running? (try "npm run
          json-server" at terminal prompt)
          <br />
          <b>ERROR: {error.message}</b>
        </div>
      )}
      {success && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
          {speakers
            .filter((rec) => {
              const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
              return searchQuery.length === 0
                ? true
                : targetString.includes(searchQuery.toLowerCase());
            })
            .map((speaker) => (
              <Speaker
                key={speaker.id}
                {...speaker}
                onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}
              />
            ))}
        </div>
      )}
    </div>
  );
};
export default Speakers;
