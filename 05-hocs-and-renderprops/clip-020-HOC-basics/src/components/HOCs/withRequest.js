const withRequest = () => (Component) => () => {
  return <Component></Component>;
};

export default withRequest;
