import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { addVideos } from "../../utils/videoSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);

    dispatch(addVideos(json.items));
  };

  return (
    <div className="flex flex-wrap overflow-hidden pt-12 ">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
