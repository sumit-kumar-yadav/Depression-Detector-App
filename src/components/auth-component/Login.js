import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "./auth.css";
import { login, clearAuthState } from "../../store/actions/auth";

// This HOC returns a functional component which can use the useLocation() to get the history
// We can't use useLocation() in call component, hence this we wrapped our Login component with it.
const withRouter = (WrappedComponent) => (props) => {
  let location = useLocation();
  return <WrappedComponent location={location} {...props} />;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;

    const { location } = this.props; // Received from the WrappedComponent.
    const path = location.state?.from?.pathname || "/"; // Get the path where user was visiting before login

    if (isLoggedin) return <Navigate to={path} />;

    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
