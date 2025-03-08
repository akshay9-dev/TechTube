import React from "react";
import Button from "./Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ButtonList = () => {
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
    "Kapil Sharma",
    "Bollywood Music",
    "Love Songs",
    "Album",
    "Theater",
    "Drama",
    
  ];

  return (
    <Splide
      options={{
        type: "slide",
        perPage: 10, // Number of visible buttons
        perMove: 2, // Move this many buttons at a time
        gap: "2px", // Space between buttons
        pagination: false, // Hide pagination dots
        arrows: true, // Show navigation arrows
        drag: "free", // Allow free dragging
        breakpoints: {
            1280: { perPage: 8 },
            1024: { perPage: 6 },
            768: { perPage: 5 },
            640: { perPage: 4 },
            480: { perPage: 3 },
        },
      }}
      className="w-13/16 px-2">
      {categories.map((category, index) => (
        <SplideSlide key={index}>
          <Button name={category} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ButtonList;
