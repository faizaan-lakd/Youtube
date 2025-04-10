import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_BY_ID_API } from "../utils/constants";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  searchParams = searchParams.get("v");

  const [videoDetails, setVidoeDetails] = useState({});

  const dispatch = useDispatch();

  const getVideoDetails = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_BY_ID_API + searchParams + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    setVidoeDetails(json.items[0]);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  return (
    <div className="flex w-full">
      <div className="py-6 px-9">
        <div>
          <iframe
            width="800"
            height="384"
            src={"https://www.youtube.com/embed/" + searchParams}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h2 className="font-bold text-xl mt-3">
            {videoDetails?.snippet?.title}
          </h2>
          <p className="text-sm text-gray-500 truncate">
            {videoDetails?.snippet?.channelTitle}
          </p>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div className="w-full mr-9">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
