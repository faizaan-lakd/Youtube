import React from "react";

const SideBarButton = ({ icon, btnName }) => {
  return (
    <div>
      <button className="flex items-center text-lg py-3 px-2 font-semibold">
        <span className="mr-2">{icon}</span>
        {btnName}
      </button>
    </div>
  );
};

export default SideBarButton;
