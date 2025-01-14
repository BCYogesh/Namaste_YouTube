import React from "react";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails, title, channelTitle } = snippet;

    return (
        <div className="p-2 m-1 w-72 shadow-lg">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
            <p className="font-bold">{title}</p>
            <p className="text-gray-800 font-medium">{channelTitle}</p>
            <p>{statistics.viewCount + " Views"}</p>
        </div>
    );
};

export default VideoCard;
