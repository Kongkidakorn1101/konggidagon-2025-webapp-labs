import React from "react";
import { GitHubInfo } from "./GitHubInfo";
import { users } from "./users";
import "./App.css";

function App() {
  return (
    <div className="App">
      {users.map((user, index) => (
        <GitHubInfo key={index} userInfo={user} />
      ))}
    </div>
  );
}

export default App;
