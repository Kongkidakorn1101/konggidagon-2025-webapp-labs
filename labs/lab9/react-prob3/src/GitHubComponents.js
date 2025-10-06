import React from "react";

export const GitHubRepoURL = ({ url }) => {
    return (
        <p>
            <a href={url} target="_blank" rel="noreferrer">
                GitHub repository
            </a>
        </p>
    );
};

export const GitHubAvatar = ({ imgURL, alt, size = 50 }) => {
    return (
        <img
            src={imgURL}
            alt={alt}
            width={size}
            height={size}
        />
    );
};
