import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
const Input = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") {
      return;
    }
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            className="border-0 bg-transparent outline-none w-11/12 "
            rows="1"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <AiOutlineSend
            className=" absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
            width={20}
            onClick={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default Input;
