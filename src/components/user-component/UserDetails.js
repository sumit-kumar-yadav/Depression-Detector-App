import React, { Component } from "react";
import { DoctorDetails, ClientDetails } from "../index";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: null,
      client: null,
    };
  }

  handleClick = (user) => {
    if (user == "doctor") this.setState({ doctor: true, client: null });
    else this.setState({ doctor: null, client: true });
  };

  render() {
    const { doctor, client } = this.state;
    return (
      <div>
        <div>
          <button type="button" onClick={() => this.handleClick("doctor")}>
            I am a Doctor...
          </button>
          <button type="button" onClick={() => this.handleClick("client")}>
            I am a Client...
          </button>
        </div>
        {doctor && <DoctorDetails />}
        {client && <ClientDetails />}
      </div>
    );
  }
}

export default UserDetails;
