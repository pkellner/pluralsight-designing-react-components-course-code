import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";

function Speakers() {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <SpeakersToolbar theme={theme} setTheme={setTheme} />
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;
