import React from "react";
import "./App.css";
import { GitHubInfo } from "./GitHubInfo.js";
import { users } from "./users.js";

export default function App() {
  return (
    <>
      <h1>Sample GitHub Repositories</h1>
      <ol>
        {users.map((user) => (
          <GitHubInfo key={user.url} userInfo={user} />
        ))}
      </ol>
    </>
  );
}
