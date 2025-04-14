import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Button = ({ name }) => {
  const [searchParams] = useSearchParams();
  const filterSearchParams = searchParams.get("filter");

  return (
    <div>
      <Link to={"/?filter=" + name}>
        <button
          className={
            filterSearchParams === name
              ? "px-3 py-1 bg-gray-400 rounded-lg"
              : "px-3 py-1 bg-gray-200 rounded-lg"
          }
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
