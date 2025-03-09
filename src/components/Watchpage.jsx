import React, { useEffect } from "react";
import { closeMenu } from "../../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // if (!info || !info.snippet || !info.statistics) {
  //   return <div className="text-red-500">Loading data...</div>;
  // }

  // console.log(info);
  // const { snippet } = info;
  // const { title } = snippet;

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

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
          {/* <ul>
            <li className="font-bold py-2">{title}</li>
          </ul> */}
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
