import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" px-5 py-2 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200 shadow-sm whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
