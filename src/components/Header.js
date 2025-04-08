import React, { useEffect, useState } from "react";
import menuIcon from "../assets/hamburger-menu.png";
import userIcon from "../assets/user-icon.svg";
import youtubeIcon from "../assets/youtube-logo.png";
import searchIcon from "../assets/search-icon.svg";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json.data[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json.data[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-4 my-2 shadow-lg items-center justify-between">
      <div className="flex col-span-3">
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

      <div className="col-span-6 relative">
        <div className="flex">
          <input
            className="w-full border border-gray-400 p-1 px-4 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100">
            <img className="h-6" alt="search-icon" src={searchIcon} />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute py-2 px-3 bg-white w-full shadow-lg rounded-xl border border-gray-400">
            <ul>
              {suggestions.map((suggest) => (
                <li
                  key={suggest}
                  className="flex py-1 shadow-sm hover:bg-gray-100 rounded-xl px-1"
                >
                  <img
                    className="w-[12px] mr-5"
                    alt="search-icon"
                    src={searchIcon}
                  />
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-3 flex justify-end">
        <img className="h-7" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Header;
