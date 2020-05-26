const SpeakersRenderProps = ({ children, maxCnt }) => {
  const speakers = [
    { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford' },
    { imageSrc: 'speaker-component-1530', name: 'Tamara Baker' },
    { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov' },
  ].slice(0, maxCnt);

  return children({
    speakers,
  });
};

export default SpeakersRenderProps;
