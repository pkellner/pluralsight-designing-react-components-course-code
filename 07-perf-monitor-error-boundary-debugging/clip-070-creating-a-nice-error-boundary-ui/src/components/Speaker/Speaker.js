import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SpeakerImage from '../SpeakerImage/SpeakerImage';
import SpeakerFavoriteButton from '../SpeakerFavoriteButton/SpeakerFavoriteButton';

const SpeakerComponent = ({
  id,
  bio,
  firstName,
  lastName,
  isFavorite,
  put,
  showErrorCard,
}) => {

  if (showErrorCard) {
    return (
      <div className="rounded overflow-hidden shadow-lg p-6 bg-white">
        <div className="grid grid-cols-4 mb-6">
          <div className="font-bold text-lg col-span-3">
            Error Showing Speaker
          </div>
        </div>
        <div className="mb-6">
          <img src="/speakerimages/dummy-speaker-image.jpg" />
        </div>
        <div>Contact site owner for resolution.</div>
      </div>
    );
  }


  return (
    <div className="rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
        <div className="flex justify-end">
          <SpeakerFavoriteButton
            isFavorite={isFavorite}
            onFavoriteToggle={() => {
              put({
                id,
                firstName,
                lastName,
                bio,
                isFavorite: !isFavorite,
              });
            }}
          />
        </div>
      </div>
      <div className="mb-6">
        <SpeakerImage id={id} />
      </div>
      <div>{bio.substr(0, 70) + '...'}</div>
    </div>
  );
};

const Speaker = React.memo((props) => {
  return (
    <ErrorBoundary
      errorUI={<SpeakerComponent showErrorCard={true}></SpeakerComponent>}
    >
      <SpeakerComponent {...props} />
    </ErrorBoundary>
  );
});

export default Speaker;
