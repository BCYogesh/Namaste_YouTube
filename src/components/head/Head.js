import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slice/appSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { searchCache } from "../redux/slice/searchSlice";
import { USER_ICON } from "../../utils/constants";
import { YOUTUBE_LOGO } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Head = () => {
  // State variables 
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setSuggestResults] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Store hooks 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // selector
  const existSearchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (existSearchCache[searchQuery]) {
        setSuggestResults(existSearchCache[searchQuery]);
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

    // update cache
    dispatch(
      searchCache({
        [searchQuery]: json[1],
      })
    );
    setSuggestResults(json[1]);
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchVideos = async (event) => {
    setSearchQuery(event);
    navigate('/results?search_query=' + encodeURI(searchQuery));
  };
  return (
    <div className="grid grid-flow-col bg-white shadow-lg sticky top-0">
      <div className="flex items-center col-span-1">
        <img
          className="h-7 cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <img className="h-16" src={YOUTUBE_LOGO} alt="youtube-logo" />
      </div>
      <div className="mt-2 col-span-10 px-10">
        <div className="flex items-center">
          <input
            className="rounded-l-full border border-gray-300 w-1/2 p-2"
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-gray-300 py-2 px-5 bg-gray-100 rounded-r-full" onClick={() => getSearchVideos(searchQuery)}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
            </svg>
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed shadow-lg rounded-lg bg-white py-[6px] px-2 w-[30rem]">
            {searchQuery && (
              <ul>
                {results.map((result, index) => (
                  <li
                    key={index}
                    className="py-2 pl-2 shadow-sm hover:bg-gray-200 flex"
                    onMouseDown={(e) => getSearchVideos(e?.target?.innerText)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                      <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 col-span-1">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
