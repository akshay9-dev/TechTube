import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" h-[560px] mx-4 p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            //Disclaimer: Dont use index as key
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="max-w-full p-2 mx-4 border flex rounded border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("sumbit", liveMessage);
          dispatch(
            addMessage({
              name: "Akshay Shahane",
              message: liveMessage,
            })
          );
          setLiveMessage(" ");
        }}>
        <input
          className="w-80 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 ml-4 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
