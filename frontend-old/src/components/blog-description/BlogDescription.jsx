import React from "react";
import { ProfilePicture } from "../profile-picture/profile-picture";
import "./BlogDescription.css"
export function BlogDescription({ username = "Username", date = "13th june, 2024" }) {
    return (
        <div className="blogdescription-container">
            <ProfilePicture size='really-small' />
            <p>
                &nbsp;{username} • {date}
            </p>
        </div>
    )
}