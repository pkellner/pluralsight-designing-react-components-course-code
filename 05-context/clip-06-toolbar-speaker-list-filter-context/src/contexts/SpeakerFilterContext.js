import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ children, startingShowSessions = false }) {
  const { showSessions, setShowSessions } = useSpeakerFilter(
    startingShowSessions
  );

  return (
    <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }}>
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterContext, SpeakerFilterProvider };
