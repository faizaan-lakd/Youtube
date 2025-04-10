import React from "react";
import moment from "moment/moment";
import { numFormatter } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="m-2 w-72 shadow-lg rounded-xl">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="px-2 py-1">
        <li className="font-bold py-1 pt-2 truncate">{title}</li>
        <li className="text-sm text-gray-500 truncate">{channelTitle}</li>
        <ul className="text-xs flex gap-3">
          <li>{numFormatter(statistics.viewCount)} views</li>
          <li>{moment(publishedAt).fromNow()}</li>
        </ul>
      </ul>
    </div>
  );
};

export default VideoCard;
