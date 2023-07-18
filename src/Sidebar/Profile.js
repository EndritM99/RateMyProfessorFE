import React, { useState } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Perform save operation with the updated profile settings
    console.log("Profile settings saved!");
  };

  return (
    <div className="profile-settings-container">
      
      <div className="profile-picture">
        <img src={picture} alt="Profile" />
        <input type="file" onChange={handlePictureChange} />
      </div>
      <div className="input-fields">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Student ID</label>
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
