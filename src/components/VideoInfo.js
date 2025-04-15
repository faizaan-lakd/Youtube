import moment from "moment";
import React, { useState } from "react";
import { numFormatter } from "../utils/constants";

const VideoInfo = ({ videoDetails }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const videoDescription = videoDetails?.snippet?.description;
  const truncatedDescription = videoDescription?.substring(0, 200) + "...";

  const { title, channelTitle, publishedAt } = videoDetails?.snippet || {};
  const { viewCount } = videoDetails?.statistics || {};

  const description = showFullDescription
    ? videoDescription
    : truncatedDescription;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionButton = showFullDescription ? "less" : "more";

  return (
    <div>
      <h2 className="font-bold text-xl mt-3">{title}</h2>
      <p className="text-sm text-gray-500 truncate">{channelTitle}</p>
      <div className="bg-gray-100 rounded-lg p-2 mt-3">
        <div className="font-semibold flex">
          <p>{numFormatter(viewCount) + " views |"}</p>
          <p>&nbsp;{moment(publishedAt).fromNow()}</p>
        </div>
        <p>{description}</p>
        <button className="font-semibold" onClick={() => toggleDescription()}>
          Show {descriptionButton}
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
