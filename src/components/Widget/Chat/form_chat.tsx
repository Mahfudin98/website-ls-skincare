import $axios from "@/lib/api";
import Image from "next/image";
import { useMessageData } from "@/store/message";
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Pusher from "pusher-js";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useMessage } from "@/store/chat/message";
import Cookies from "js-cookie";
import { useCustomer } from "@/store/chat/customer";

export default function FormChat() {
  const { message, history, show, historyChat, listMessage, submitChat } =
    useMessage();
  const { customer, getCustomer } = useCustomer();
  const [load, setLoad] = useState(true);
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
    if (load) {
      getCustomer().then(() => {
        setLoad(false);
      });
      historyChat();
    }
  });
  return (
    <div className="relative max-w-[350px] lg:max-w-[400px]">
      <div className="bg-pic-800 flex px-3 py-2.5 rounded-t-lg justify-between shadow-xl border-b">
        <div className="flex gap-2">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <Image
                width={1080}
                height={1080}
                src={`https://ui-avatars.com/api/?name=${customer.nama}&background=random&size=350`}
                alt="Avatar"
              />
            </div>
          </div>
          <div className="self-center">
            <h2 className="text-lg font-medium text-white font-poppins">
              Hallo <span className="capitalize font-semibold">{customer.nama}</span>!
            </h2>
            <p className="text-base font-normal text-pic-200 font-poppins">
              {customer.no_hp}
            </p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="p-4 bg-pic-50 h-[350px] lg:h-[380px] 2xl:h-[450px] overflow-auto flex flex-col-reverse">
        {history.map((chat: any, index) => {
          return (
            <Fragment key={index}>
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
            </Fragment>
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
