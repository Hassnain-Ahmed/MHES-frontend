import React from "react";
import ChatbotIcon from "/ChatbotIcon.svg";

export function ChatWithBloom() {
  return (
    <div className="flex right-1 bottom-1 fixed rounded-lg md:bg-gradient-to-r md:from-[#6355BC] md:to-[#2D2756]">
      <button className="justify-center flex gap-2 items-center w-full h-full p-2 font-bold text-lg text-white">
        <div>
          <img src={ChatbotIcon} className="sm:w-[60px] md:w-[45px]" alt="" />
        </div>
        <p className="hidden md:block">Chat With Bloom</p>
      </button>
    </div>
  );
}
