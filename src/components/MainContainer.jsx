import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`flex mt-[4rem]`}>
      <div
       className={`w-full ${isMenuOpen ? "ml-[15rem]" : "ml-0"} `}>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
