import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  let [searchParams] = useSearchParams();
  searchParams = searchParams.get("q");

  const [searchData, setSearchData] = useState([]);

  const getSearchResult = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_API + searchParams + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchData(json.items);
  };

  useEffect(() => {
    getSearchResult();
  }, [searchParams]);

  return (
    <div className="w-full flex justify-center">
      <div className="md:w-4/6 w-full flex flex-col items-center my-3 p-2">
        <p className="font-semibold text-2xl">
          Search Results for
          <span className="text-red-600">{" " + searchParams}</span>
        </p>
        {searchData.map((search) => (
          <Link to={"/watch?v=" + search.id.videoId}>
            <SearchResultCard data={search} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
