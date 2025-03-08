import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return <div className="text-red-500">Loading data...</div>;
  }
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = Number(statistics?.viewCount).toLocaleString();
  return (
    <div className={`p-2 m-2  ${isMenuOpen ? "w-71.5" : "w-66 ml-3.5"}`}>
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
