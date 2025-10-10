export function GitHubInfo({ userInfo }) {
    let { imgURL, alt, url, followers } = userInfo;
    let showFollowers = followers > 10000;

    return (
        <li>
            <img
                src={imgURL}
                alt={alt}
                width="100"
                height="100"
                style={{ verticalAlign: "bottom", marginRight: "10px" }}
            />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {alt}
                {showFollowers && ` (${followers} followers)`}
            </a>
        </li>
    );
}
