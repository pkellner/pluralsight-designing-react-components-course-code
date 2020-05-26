import React from 'react';
import SpeakersRenderProps from '../src/components/RPs/SpeakersRenderProps';
const maxCnt = 2;

const Speakers = () => {
  return (
    <SpeakersRenderProps maxCnt={maxCnt}>
      {({ speakers }) => {
        return speakers.map(({ imageSrc, name }) => {
          return (
            <img
              src={`/images/${imageSrc}.png`}
              alt={name}
              key={imageSrc}
            ></img>
          );
        });
      }}
    </SpeakersRenderProps>
  );
};
export default Speakers;
