import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-1">
      {" "}
      <img
        className="h-8"
        alt="usericon"
        src="https://openclipart.org/image/2000px/247319"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
