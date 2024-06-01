import React from "react";
import "./ProfileDetails.css";
export function ProfileDetails ({username = "Username", date = "12th Jun 2024", url="https://i.pinimg.com/564x/74/5c/e7/745ce700e51c7112bce1213c2a61ddfa.jpg"}) {
  return (
    <div className="profile-details-container">
      <div className="profile-details-image" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="profile-details-text-container">
        <h2>{username}</h2>
        <p>
        Published {date} <span className="profile-details-bullet">•</span><span className="profile-details-text-follow">Follow</span>
        </p>
      </div>
    </div>
  );
};

