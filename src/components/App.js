import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { authenticateUser } from "../actions/auth";
import { Home, Navbar, Login, Signup, Page404 } from "./";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = jwtDecode(token);
      console.log("user", user);

      // Dispatch an action to authenticate the user and put the user's details in the store
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          uuid: user.uuid,
          firstName: user.first_name,
          lastName: user.last_name,
        })
      );
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

// Required data for the App as props from the store
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
