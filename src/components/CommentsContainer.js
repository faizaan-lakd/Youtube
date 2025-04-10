import React from "react";
import { commentsData } from "../utils/constants";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="my-5 pr-2">
      <h1 className="font-bold text-lg">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
