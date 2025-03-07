import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 shadow-lg sticky top-0 bg-white z-10">
      <div className="flex col-span-3 ">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/">
          <img className="h-8 mx-5 " alt="youtube logo" src="./img/logo.png" />
        </a>
      </div>

      <div className="col-span-9 ">
        <input
          className="w-1/2 border border-gray-400 px-5 py-1 rounded-l-full"
          type="text"
          placeholder="search"
        />
        <button className="border border-gray-400 p-1 px-6 bg-gray-100 rounded-r-full">
          🔍
        </button>
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
