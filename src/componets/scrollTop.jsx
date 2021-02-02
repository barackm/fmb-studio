import { Component } from "react";
import { withRouter } from "react-router-dom";
class ScrollToTop extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
