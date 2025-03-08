import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200 whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
