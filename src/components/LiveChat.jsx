import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveReply, setLiveReply] = useState("");
  const dispatch = useDispatch();
  const submitReply = (message) => {
    dispatch(
      addMessage({
        name: "Siddharth Raj",
        message: liveReply,
      })
    );
    setLiveReply("");
  };
  const chatMessages = useSelector((store) => store.chat?.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);
    // API Polling
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="lg: p-2 border lg:h-[600px] h-[300px] sm:h-[400px] border-black  bg-slate-100 rounded-lg overflow-y-scroll ">
        <div className="py-2 font-semibold border-b-slate-400 border-b-2 ">
          <span>Top Chat</span>
        </div>
        {/* dont use index for now  i dont have api data with unique key */}
        <div className=" flex flex-col-reverse">
          {chatMessages.map((messag, index) => {
            return (
              <ChatMessage
                key={index}
                name={messag.name}
                message={messag.message}
              />
            );
          })}
        </div>
      </div>
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="p-1 my-2 border w-full rounded-lg border-black"
          type="text"
          name=""
          id=""
          placeholder="Reply to this message"
          value={liveReply}
          onChange={(e) => setLiveReply(e.target.value)}
        />
        <button
          className="px-2 m-2 border border-black rounded-lg"
          onClick={submitReply}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
