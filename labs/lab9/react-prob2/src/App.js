import React from "react";
import { GitHubRepoURL, GitHubAvatar } from "./GitHubComponents";
import "./App.css";

function App() {
  const userInfo = {
    url: "https://github.com/Kongkidakorn1101",
    imgURL: "https://avatars.githubusercontent.com/u/151110747?v=4",
    alt: "Kongkidakorn1101",
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar
        imgURL={userInfo.imgURL}
        alt={userInfo.alt}
        size={200}
      />
      <br />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}

export default App;
