import React from "react";
import Button from "./Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const categories = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "History",
    "T-Series",
    "Motivation",
    "Music",
    "Love Songs",
    "Album",
    "Theater",
    "Drama",
  ];

  return (
    <div
      className={`fixed top-[3.5rem] pb-2 pt-4 left-3 bg-white z-40 transition-all duration-300 ${
        isMenuOpen ? "w-[calc(100%-15rem)] ml-[15rem]" : "w-full ml-1 "
      }`}>
      <Splide
        options={{
          type: "slide",
          perPage: 8, // Number of visible buttons
          perMove: 3, // Move this many buttons at a time
          gap: "1px", // Space between buttons
          pagination: false, // Hide pagination dots
          arrows: true, // Show navigation arrows
          drag: "free", // Allow free dragging
          focus: "start", // Keeps the first button after arrows
          breakpoints: {
            1280: { perPage: 7 },
            1024: { perPage: 6 },
            768: { perPage: 5 },
            640: { perPage: 4 },
            480: { perPage: 3 },
          },
        }}
        className=" px-5 -ml-4 mr-4 ">
        {categories.map((category, index) => (
          <SplideSlide key={index} className="flex justify-center pr-6">
            <Button name={category} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ButtonList;
