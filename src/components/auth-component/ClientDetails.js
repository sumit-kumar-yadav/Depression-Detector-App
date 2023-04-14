import React, { Component } from "react";

class ClientDetails extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="file" />
          <input type="text" placeholder="Street name" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Pincode" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Country" />
          <input type="date" placeholder="DOB" />
        </form>
      </div>
    );
  }
}

export default ClientDetails;
