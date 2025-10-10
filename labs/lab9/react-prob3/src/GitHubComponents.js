import React from "react";

export let GitHubRepoURL = ({ url }) => {
    return (
        <p>
            <a href={url} target="_blank" rel="noreferrer">
                GitHub repository
            </a>
        </p>
    );
};

export let GitHubAvatar = ({ imgURL, alt, size = 50 }) => {
    return (
        <img
            src={imgURL}
            alt={alt}
            width={size}
            height={size}
        />
    );
};
