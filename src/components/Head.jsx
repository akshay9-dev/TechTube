import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheResults } from "../../utils/searchSlice";

const Head = () => {
  // it will give us suggestions as we type in search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    // if (!searchQuery) {
    //   setShowSuggestions(false);
    // }
    // API call
    // console.log(searchQuery);

    //API call after each key press
    //But if the difference between two api calls is less than 200ms then decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // This will dis
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Debouncing
  /**
   *
   * When key "i" is presses
   *  - It render the component
   *  - useEffect() will be called
   *  - Starts the timer => API call after 200 ms
   *
   * When we press suppose "ip" befrore 200 ms
   *  - distroys the comoponent (useEffect return method)
   *  - re-renders the component
   *  - useEffect()
   *  - start timer => make API call after 200 ms
   */

  const getSearchSuggestions = async () => {
    console.log("API CALL -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));

    // setSearchHistory((prev) =>
    //   prev.includes(searchQuery) ? prev : [searchQuery, ...prev]
    // );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col w-full p-3  fixed  top-0 bg-white z-80">
      <div className="flex col-span-3 ">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/">
          <img className="h-8 mx-5 " alt="Techtube logo" src="./img/logo.png" />
        </a>
      </div>

      <div className="col-span-9 ">
        <div>
          <input
            value={searchQuery}
            className="w-1/2 border border-gray-400 px-5 py-1 rounded-l-full relative"
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(e.target.value.trim() !== "");
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 10)}
          />
          <button className="border border-gray-400 p-1 px-6 bg-gray-100 rounded-r-full hover:bg-gray-300">
            🔍
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className=" bg-white py-2  w-[29.8rem] rounded-lg shadow-lg border border-gray-200 absolute">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className=" px-5 py-2 hover:bg-gray-200"
                  onMouseDown={() => setSearchQuery(s)}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8 absolute right-6"
          alt="usericon"
          src="https://openclipart.org/image/2000px/247319"
        />
      </div>
    </div>
  );
};

export default Head;
