import { useContext } from "react";
import { SpeakerContext } from "../contexts/SpeakerContext";

function speakerDelete() {
  const { speaker, deleteRecord } = useContext(SpeakerContext);

  return (
    <span className="session w-100">
      <a href="#" className="remSes">
        <i
          onClick={(e) => {
            e.preventDefault();
            if (
              window.confirm("Are you sure you want to delete this speaker?")
            ) {
              deleteRecord(speaker);
            }
          }}
        >
          -
        </i>
      </a>
      <span className="padL2">Delete Speaker</span>
    </span>
  );
}

export default speakerDelete;
