function SpecialMessageRenderProps({ children }) {
  return children({
    // could get this from something like a push notification.
    specialMessage: 'Angular Class at 2:45PM Cancelled',
  });
}

export default SpecialMessageRenderProps;
