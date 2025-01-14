import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetchVideosData();
    }, []);
    const fetchVideosData = async () => {
        const getVideos = await fetch(YOUTUBE_VIDEOS_API);
        const json = await getVideos.json();
        setVideos(json.items);
    };

    if (!videos) return;
    return (
        <div className="flex flex-wrap mt-5">
            {videos.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id} ><VideoCard key={video.id} info={video} /></Link>
            ))}
        </div>
    );
};

export default VideoContainer;
