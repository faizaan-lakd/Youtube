import React from "react";
import Button from "./Button";

const buttonNameList = [
  "All",
  "Mixes",
  "Comedy",
  "News",
  "Gadgets",
  "Fitness",
  "Latest Songs",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap p-2 gap-4 justify-center">
      {buttonNameList.map((buttonName, index) => {
        return <Button key={index} name={buttonName} />;
      })}
    </div>
  );
};

export default ButtonList;
