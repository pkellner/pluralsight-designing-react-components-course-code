import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";

function Speakers() {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}

export default Speakers;
