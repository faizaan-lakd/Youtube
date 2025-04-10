import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  searchParams = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full">
      <div className="py-6 px-9">
        <div>
          <iframe
            width="800"
            height="384"
            src={"https://www.youtube.com/embed/" + searchParams}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div className="w-full mr-9">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
