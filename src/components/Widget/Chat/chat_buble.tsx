import {
  ChatBubbleLeftRightIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import Button from "../Button/button";
import Image from "next/image";
import { useState } from "react";
import ChatForm from "./chat_form";

export default function ChatBubble() {
  const [showChat, setShowChat] = useState(false);
  const toogleChat = () => setShowChat(!showChat);
  return (
    <div className="fixed bottom-5 right-5 z-[99991]">
      <div className="relative flex justify-end w-[400px]">
        <div
          className={`mb-20 -mr-16 shadow-md rounded-lg w-full transform transition-transform ease-in-out duration-300 delay-100 origin-bottom-right ${
            !showChat ? "scale-0" : "scale-100"
          }`}
        >
          <div className="bg-brown-800 flex px-3 py-2.5 rounded-t-lg justify-between">
            <div className="flex gap-2">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <Image
                    width={1080}
                    height={1080}
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="self-center">
                <h2 className="text-white text-lg font-poppins font-medium">
                  Customer Sevice
                </h2>
                <p className="text-pic-200 text-base font-poppins font-normal">
                  LS Skincare
                </p>
              </div>
            </div>
            <button onClick={toogleChat} className="">
              <XCircleIcon className="h-8 w-8 text-white self-center" />
            </button>
          </div>
          {/* chat page */}
          <ChatForm />
        </div>
        <Button
          onClick={toogleChat}
          customStyle="h-16 w-16 self-end bg-pic-900 rounded-full border border-white flex justify-center"
        >
          <span className="self-center">
            <ChatBubbleLeftRightIcon className="h-10 w-10 text-white" />
          </span>
        </Button>
      </div>
    </div>
  );
}
