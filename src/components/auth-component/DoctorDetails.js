import React, { Component } from "react";

class DoctorDetails extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="file" name="avatar" />
          <input type="text" name="street" placeholder="Street name" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="pincode" placeholder="Pincode" />
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="country" placeholder="Country" />
          <input type="date" name="dob" placeholder="DOB" />
          <select name="degree" multiple>
            <option>MBBS</option>
            <option>MD</option>
            <option>Graduation</option>
            <option>Others</option>
          </select>
          <input
            type="text"
            name="highest_qualification"
            placeholder="Highest Qualification"
          />
          <input type="text" name="specialist" placeholder="Specialist" />
          <input
            type="number"
            name="experience_in_yrs"
            placeholder="Experience (in years)"
          />
          <input
            type="text"
            name="per_session_fee"
            placeholder="Per Session Fee"
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount % (if any)"
          />
          <input type="text" name="website" placeholder="Website" />
          <input type="text" name="off_days" placeholder="Off Days" />
          <select name="off_days" multiple>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </form>
      </div>
    );
  }
}

export default DoctorDetails;
