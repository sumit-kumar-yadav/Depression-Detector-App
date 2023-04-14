import React, { Component } from "react";
import { connect } from "react-redux";
import { signup, clearAuthState } from "../../store/actions/auth";
import { UserDetails } from "../index";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      gender: "",
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const formDataObj = this.state;
    for (const [, value] of Object.entries(formDataObj)) if (!value) return;
    this.props.dispatch(signup(formDataObj));
  };

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;

    if (isLoggedin) {
      return <UserDetails />;
    }

    return (
      <form className="login-form">
        <span className="login-signup-header"> Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="First Name"
            type="text"
            required
            onChange={(e) =>
              this.handleInputChange("firstName", e.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            placeholder="Last Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange("lastName", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => this.handleInputChange("password", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange("confirmPassword", e.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            placeholder="Gender"
            type="text"
            required
            onChange={(e) => this.handleInputChange("gender", e.target.value)}
          />
        </div>
        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Signup
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
