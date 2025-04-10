import React from "react";
import userIcon from "../assets/user-icon.svg";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 py-1 my-2 rounded-xl">
      <img alt="user-icon" src={userIcon} className="w-7" />
      <div className="px-3">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
