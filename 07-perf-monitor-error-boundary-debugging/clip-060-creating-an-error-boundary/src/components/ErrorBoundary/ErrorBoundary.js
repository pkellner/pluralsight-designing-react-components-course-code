import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {} // You can also log the error 

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
