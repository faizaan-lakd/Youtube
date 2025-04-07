import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 w-72 shadow-lg rounded-xl">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="px-2 py-1">
        <li className="font-bold py-1 pt-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
