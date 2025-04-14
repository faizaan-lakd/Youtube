import React, { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_VIDEO_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  let [searchParams] = useSearchParams();
  searchParams = searchParams.get("filter");

  useEffect(() => {
    getYoutubeVideos(searchParams);
  }, [searchParams]);

  const getYoutubeVideos = async (searchParams) => {
    let data = null;
    if (searchParams === null || searchParams.trim().toLowerCase() === "all") {
      data = await fetch(YOUTUBE_VIDEO_API);
    } else {
      data = await fetch(
        YOUTUBE_SEARCH_RESULTS_API + searchParams + "&key=" + GOOGLE_API_KEY
      );
    }
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => {
        const videoId = searchParams ? video.id.videoId : video.id;
        return (
          <Link key={videoId} to={"/watch?v=" + videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
