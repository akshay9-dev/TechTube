import React, { useEffect } from "react";
import { closeMenu } from "../../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const videos = useSelector((store) => store.videos.videos);
  console.log("videos from store:", videos);

  // if (!info || !info.snippet) {
  //   return <div className="text-red-500">Loading data...</div>;
  // }
  // console.log(info);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const id = searchParams.get("v");
  console.log("video id:", id);
  const video = videos[0].filter((i) => i.id === id);
  console.log(video);
  const { snippet } = video[0];
  const { title, channelTitle } = snippet;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col mt-15 w-full">
      <div className="px-5 py-5 flex w-full">
        <div>
          <iframe
            width="980"
            height="560"
            className="rounded-xl"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <div className="flex justify-between">
            <div className="mt-2">
              <h1 className="text-lg font-bold mb-2">{title}</h1>
              <div className="flex">
                <p className="text-lg py-2">{channelTitle}</p>
                <button className="ml-5 px-4 py-1.5 border-1 bg-black rounded-full text-white">
                  {" "}
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <button className="h-12 px-4 py-2 my-4 bg-gray-200  rounded-full flex items-center hover:bg-gray-300">
                👍🏻 <span className="ml-2">Like</span>
              </button>
              <button className="h-12 px-4 py-2 my-4 bg-gray-200  rounded-full flex items-center hover:bg-gray-300">
                👎🏻 <span className="ml-2">Dislike</span>
              </button>
              <button className="h-12 px-4 py-2 my-4 bg-gray-200  rounded-full flex items-center hover:bg-gray-300">
                🔄 <span className="ml-2">Share</span>
              </button>
              <button className=" h-12 px-4 py-2 my-4 bg-gray-200  rounded-full flex items-center hover:bg-gray-300">
                📥 <span className="ml-2">Save</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
