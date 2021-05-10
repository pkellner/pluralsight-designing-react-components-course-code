import Speaker from "./Speaker";

function SpeakersList({ data, showSessions }) {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
