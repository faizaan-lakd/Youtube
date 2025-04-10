import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(12),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="w-full mt-6 mb-2 py-1 px-3 border border-black h-[22rem] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        className="flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "User",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 py-1 w-4/5 border border-black rounded-lg"
          type="text"
          placeholder="Send a message to Live Chat!"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="font-semibold px-2 py-1 mx-2 w-1/5 bg-blue-200 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
