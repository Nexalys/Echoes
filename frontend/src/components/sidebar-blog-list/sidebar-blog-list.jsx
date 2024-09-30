import { AuthorDetails } from "../author-details/author-details";

import "./sidebar-blog-list.css";

export function BlogList({ title = "Another Blog Title", username = "Username", date = "12th Jun 2024", url = "https://i.pinimg.com/564x/74/5c/e7/745ce700e51c7112bce1213c2a61ddfa.jpg" }) {
  return (

    <div className="sidebar-blog">
      <div className="user">
        {/* <div className="profile-pic">
                <img src={url}/>
            </div>
            <div className="author">
                <p>{username} ▪️</p>
            </div>
            <div className="publishing-date">{date}</div> */}
        <AuthorDetails username = {username} />
        <h4>{title}</h4>
      </div>
    </div>


  );
};
