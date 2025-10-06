import React from "react";
import "./App.css";

function GitHubAvatar({ imgURL, alt }) {
  return (
    <img
      src={imgURL}
      alt={alt}
      style={{
        width: "150px",
        height: "150px",
        marginBottom: "20px",
      }}
    />
  );
}

function GitHubRepoURL({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      My GitHub Repository
    </a>
  );
}

function GitHubInfo() {
  const userInfo = {
    url: "https://github.com/Kongkidakorn1101",
    imgURL: "https://avatars.githubusercontent.com/u/151110747?v=4",
    alt: "Kongkidakorn1101",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

      }}
    >
      <h1>
        My GitHub Information
      </h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}

export default GitHubInfo;
