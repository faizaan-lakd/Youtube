import React from "react";
import menuIcon from "../assets/hamburger-menu.png";
import userIcon from "../assets/user-icon.svg";
import youtubeIcon from "../assets/youtube-logo.png";
import searchIcon from "../assets/search-icon.svg";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 my-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          alt="menu"
          src={menuIcon}
        />
        <a href="/">
          <img className="h-7 mx-4" alt="youtube-logo" src={youtubeIcon} />
        </a>
      </div>

      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-2/4 border border-gray-400 p-1 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100">
          <img className="h-6" alt="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-7" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Header;
