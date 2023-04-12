import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Home, Navbar, Login, Signup, Page404 } from "./";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = jwtDecode(token);
      console.log("user", user);
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

export default App;
