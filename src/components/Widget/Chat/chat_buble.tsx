import {
  ChatBubbleLeftRightIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import Button from "../Button/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChatForm from "./chat_form";
import { useMessage } from "@/store/chat/message";

export default function ChatBubble() {
  const { toogleChat, showChat, history, showHistory, historyChat } =
    useMessage();
  useEffect(() => {
    if (history?.length == 0 && history) {
      historyChat();
    }
  });
  return (
    <div className="fixed bottom-5 right-5 z-[991]">
      <div
        className={`relative flex justify-end lg:w-[400px] !showChat ? "scale-0" : "scale-100"`}
      >
        <div
          className={`mb-20 -mr-16 shadow-md rounded-lg w-full transform transition-transform ease-in-out duration-300 delay-100 origin-bottom-right ${
            !showChat ? "scale-0" : "scale-100"
          }`}
        >
          {showHistory && (
            <div className="bg-pic-800 flex px-3 py-2.5 rounded-t-lg justify-between">
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
                  <h2 className="text-lg font-medium text-white font-poppins">
                    Customer Sevice
                  </h2>
                  <p className="text-base font-normal text-pic-200 font-poppins">
                    LS Skincare
                  </p>
                </div>
              </div>
              <button type="button" onClick={toogleChat} className="">
                <XCircleIcon className="self-center w-8 h-8 text-white" />
              </button>
            </div>
          )}
          {!showHistory && (
            <div className="bg-pic-900 relative flex px-3 py-2.5 rounded-t-lg justify-between">
              <div className="p-4">
                <h1 className="mb-0 capitalize card-title text-base-100">
                  Selamat datang di chat boot
                </h1>
                <h2 className="mb-3 text-xl font-bold uppercase font-lato text-base-300">
                  LS Skincare
                </h2>
                <p className="text-base text-base-100">
                  Mohon isi Nama dan No HP dulu ya
                </p>
              </div>
              <button
                onClick={() => toogleChat()}
                className="absolute top-2 right-2"
              >
                <XCircleIcon className="self-center w-8 h-8 text-white" />
              </button>
            </div>
          )}
          {/* chat page */}
          <ChatForm />
        </div>
        <Button
          onClick={toogleChat}
          customStyle="h-16 w-16 self-end bg-pic-900 rounded-full border border-white flex justify-center"
        >
          <span className="self-center">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
          </span>
        </Button>
      </div>
    </div>
  );
}
