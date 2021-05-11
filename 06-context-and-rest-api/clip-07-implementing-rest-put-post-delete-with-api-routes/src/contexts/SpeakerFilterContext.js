import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({
  children,
  startingShowSessions = false,
  startingEventYear = "2019",
}) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  } = useSpeakerFilter(startingShowSessions, startingEventYear);

  return (
    <SpeakerFilterContext.Provider
      value={{
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterContext, SpeakerFilterProvider };
