import React from "react";
import users from "./users";

let PopularGitHubUsers = () => {

  let popularUsers = users.filter(user => user.followers > 10000);

  return (
    <div>
      <h2>Popular GitHub Repositories</h2>
      <ol>
        {popularUsers.map(user => (
          <li key={user.url} style={{ marginBottom: "20px", marginLeft: "0" }}>
            <img
              src={user.imgURL}
              alt={user.alt}
              width="100"
              height="100"
              style={{ marginRight: "10px", objectFit: "cover" }}
            />
            <span>
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                {user.alt}
              </a>{" "}
              ({user.followers.toLocaleString()} followers)
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PopularGitHubUsers;
