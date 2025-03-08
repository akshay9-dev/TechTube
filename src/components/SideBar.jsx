import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  //   if (!isMenuOpen) return null; //This is same as below

  return !isMenuOpen ? null : (
    <div className=" fixed top-[4rem] left-0 h-[calc(100vh-3rem)] px-5 py-2 w-61  overflow-y-hidden hover:overflow-y-auto bg-white ">
      <div>
        <h1 className="py-2 hover:bg-gray-200 rounded-lg">
          <span className="px-2 text-sm">🏠</span>
          <Link to="/" className="">
            Home
          </Link>
        </h1>
        <h1 className=" py-2 hover:bg-gray-200 rounded-lg">
          <span className="px-2 text-sm">🎞️ </span> Shorts
        </h1>
        <h1 className="  py-2 pb-4 hover:bg-gray-200 rounded-lg">
          <span className="px-2 text-sm">📢</span>Subscriptions
        </h1>
      </div>
      <div className="border-t-1 border-gray-200 py-4">
        <h1 className="  px-2 text-lg">You ›</h1>
        <ul>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">⏱</span>History
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎬</span>Play Lists
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">📹</span>Your Videos
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🕓</span>Watch Later
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">👍🏻</span>Liked Videos
          </li>
        </ul>
      </div>
      <div className="border-t-1 border-gray-200 py-6">
        <h1 className=" px-2 text-lg font-bold pb-2">Explore</h1>
        <ul>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🔥</span>Trending
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🛍️</span>Shopping
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎵</span>Music
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎬</span>Movies
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">📺</span>Live
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎮</span>Gaming
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">📰</span>News
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">⚽</span>Sport
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">📚</span>Courses
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">💄</span>Fashion & Beauty
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎙️</span>Podcasts
          </li>
        </ul>
      </div>
      <div className="border-t-1 border-gray-200 py-6">
        <h1 className=" px-2 text-lg font-bold pb-2">More from You Tube</h1>
        <ul>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">⭐</span>YouTube Premium
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎥</span>YouTube Studio
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">🎶</span>YouTube Music
          </li>
          <li className=" py-2 hover:bg-gray-200 rounded-lg">
            <span className="px-2 text-sm">👶</span>YouTube Kids
          </li>
        </ul>
      </div>
      <div className="border-t-1 border-gray-200 py-6">
        <h1 className=" py-2 hover:bg-gray-200 rounded-lg">
          <span className="px-2 text-sm">⚙️</span> Settings
        </h1>
        <h1 className=" py-2 hover:bg-gray-200 rounded-lg">
          <span className="px-2 text-sm">🚩</span> Report history
        </h1>
        <h1 className="  py-2 hover:bg-gray-200 rounded-lg ">
          <span className="px-2 text-sm">❓</span>Help
        </h1>
        <h1 className=" py-2 hover:bg-gray-200 rounded-lg">
          <span className="px-2 text-sm">📩</span>Send feedback
        </h1>
      </div>
    </div>
  );
};
export default SideBar;
