import React from 'react';
import withData from '../src/components/HOCs/withData';
const maxCnt = 2;

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return (
          <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>
        );
      })}
    </div>
  );
};
export default withData(maxCnt)(Speakers);
