import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("ErrorBoundary:getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {} // You can also log the error

  render() {
    console.log("ERRORBOUNDARY render");
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      }
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
