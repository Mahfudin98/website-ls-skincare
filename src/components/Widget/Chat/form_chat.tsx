import $axios from "@/lib/api";
import Image from "next/image";
import { useMessageData } from "@/store/message";
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMessage } from "@/store/chat/message";
import Cookies from "js-cookie";

export default function FormChat() {
  const {
    message,
    history,
    show,
    showChat,
    historyChat,
    listMessage,
    submitChat,
    toogleChat
  } = useMessage();
  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
  };
  const submitForm = async (formData: string) => {
    const cookieValue = getCookie("token");
    submitChat({
      token: cookieValue,
      message: formData
    });
  };
  useEffect(() => {
    if (message?.length == 0) {
      listMessage();
    }
    if (history?.length == 0 && history) {
      historyChat();
    }
  });
  return (
    <div className="relative max-w-[350px] lg:max-w-[400px]">
      {/* content */}
      <div className="p-4 bg-pic-50 h-[350px] lg:h-[380px] 2xl:h-[450px] overflow-auto flex flex-col-reverse">
        {history.map((chat: any, index) => {
          return (
            <>
              {index != 0 && (
                <div className="chat chat-start">
                  <div className="text-base font-medium leading-tight chat-bubble bg-pic-800 text-base-100 font-lato">
                    {chat.jawaban}
                  </div>
                </div>
              )}
              {show && index == 0 && (
                <div className="chat chat-start">
                  <div className="text-base font-medium leading-tight chat-bubble bg-pic-800 text-base-100 font-lato">
                    {chat.jawaban}
                  </div>
                </div>
              )}
              {!show && index == 0 && (
                <div className="chat chat-start">
                  <div className="text-base font-medium leading-tight chat-bubble bg-pic-800 text-base-100 font-lato">
                  <span className="loading loading-dots"></span>
                  </div>
                </div>
              )}
              <div className="chat chat-end">
                <div className="text-base font-medium leading-tight chat-bubble bg-pic-800 text-base-100 font-lato">
                  {chat.pertanyaan}
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* footer */}
      <div className="px-4 py-2.5 border-t border-b bg-pic-100 flex justify-between gap-2 overflow-x-auto max-w-[350px] lg:max-w-[400px]">
        {message.map((msg: any, index) => {
          return (
            <>
              <button
                key={index}
                className="normal-case border-none shadow-xl btn btn-xs bg-pic-500 hover:bg-pic-600 text-base-100 rounded-box"
                onClick={() => submitForm(msg.pertanyaan)}
              >
                {msg.pertanyaan}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}
