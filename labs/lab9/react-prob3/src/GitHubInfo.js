import React from "react";
import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css"; // For styling

export let GitHubInfo = ({ userInfo }) => {
    let { url, imgURL, alt } = userInfo;

    return (
        <div className="github-info">
            <h1>{alt}</h1>
            <GitHubAvatar imgURL={imgURL} alt={alt} />
            <GitHubRepoURL url={url} />
        </div>
    );
};
