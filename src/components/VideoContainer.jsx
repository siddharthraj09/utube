import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API_URL);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap  justify-center ">
      {videos.map((video) => {
        return (
          <Link to={`/watch/${video.id}`} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
