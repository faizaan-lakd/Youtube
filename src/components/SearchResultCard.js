import React from "react";

const SearchResultCard = ({ data }) => {
  const { thumbnails, title, channelTitle, description } = data?.snippet;
  return (
    <div className="w-full h-44 my-4 flex gap-4 rounded-lg shadow-xl">
      <img
        alt="video-thumbnail"
        src={thumbnails.medium.url}
        className="rounded-lg md:w-fit w-48"
      />
      <div className="pl-3 pr-7 md:w-96 w-48 self-center flex-grow overflow-hidden">
        <p className="font-bold md:text-lg mb-3 truncate">{title}</p>
        <p className="mb-2 text-sm text-gray-700 font-semibold">
          {channelTitle}
        </p>
        <p className="mb-2 text-xs text-gray-500 truncate">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
