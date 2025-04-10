import React from "react";
import userIcon from "../assets/user-icon.svg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-6" alt="user-icon" src={userIcon} />
      <span className="font-semibold text-sm px-2">
        <p>{name}</p>
      </span>
      <span className="text-sm">
        <p>{message}</p>
      </span>
    </div>
  );
};

export default ChatMessage;
