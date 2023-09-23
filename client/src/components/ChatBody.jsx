import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {
  const ref = useRef(null);
  const bottomref = useRef(null);

  useEffect(() => {
    bottomref.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    ref.current && autoAnimate(ref.current);
  }, [ref]);

  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";
  return (
    <div className="flex flex-col gap-4" ref={ref}>
      {chat.map((message, index) => {
        return (
          <div
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 max-w[80%] py-3 ${
              message.sender === "ai" && aiStyle
            }`}
            key={index}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomref} className="h-3"></div>
    </div>
  );
};

export default ChatBody;
