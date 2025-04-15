import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { RiVideoFill } from "react-icons/ri";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import SideBarButton from "./SideBarButton";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const sideBarBtns = [
    { icon: <AiFillHome />, name: "Home", to: "/" },
    { icon: <MdSubscriptions />, name: "Subscriptions", to: "/" },
    { icon: <MdVideoLibrary />, name: "Library", to: "/" },
    { icon: <MdHistory />, name: "History", to: "/" },
    { icon: <RiVideoFill />, name: "Your Videos", to: "/" },
    { icon: <MdOutlineWatchLater />, name: "Watch Later", to: "/" },
    { icon: <AiFillLike />, name: "Liked Videos", to: "/" },
  ];

  return (
    <div className="p-5 w-48">
      {sideBarBtns.map((sideBarBtn, index) => {
        return (
          <Link key={index} to={sideBarBtn.to}>
            <SideBarButton icon={sideBarBtn.icon} btnName={sideBarBtn.name} />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
