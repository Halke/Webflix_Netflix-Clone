import React from "react";
import { Link } from "react-router-dom";
import "../styles/profileIcon.css";

function ProfileIcon({ imageSource, alternative }) {
  return (
    <Link className="profile-link" to="/my-profile">
      <img className="profile-icon" src={imageSource} alt={alternative} />
    </Link>
  );
}

export default ProfileIcon;
