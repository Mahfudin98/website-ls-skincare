import {
  ChatBubbleLeftRightIcon,
  DocumentIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PhotoIcon,
  UserIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import NewPusher from "pusher";
import axios from "axios";
import Button from "../Button/button";
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from "next/types";

export default function ChatForm() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  let allMessages: string[] = [];
  useEffect(() => {
    // Pusher.logToConsole = true;
    const pusher = new Pusher("141b4b997017d20aaed4", {
      cluster: "ap1"
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data: any) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  });

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("message", message);
    let result = await axios.get(
      `http://localhost:8000/api/message?username=${username}&message=${message}`,
      // formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        }
      }
    );
    let response = result.data.status;
    if (response === "Success") {
      setMessage("");
    } else {
      setMessage(message);
    }
  };

  const [formUsername, setFormUsername] = useState(true);
  const toggleUsername = () => {
    setFormUsername(!formUsername);
    setUsername(username);
  };
  return (
    <>
      <div className="relative">
        <div className="relative">
          {/* content */}
          <div className="p-4 bg-pic-50 lg:h-[380px] 2xl:h-[450px] overflow-auto">
            {messages.map((message: any) => {
              return (
                <>
                  <div
                    className={`chat chat-start ${
                      message.username != username ? "" : "hidden"
                    }`}
                    key={message.username}
                  >
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <Image
                          width={1080}
                          height={1080}
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="chat-header inline-flex gap-2 items-center">
                      <p className="text-sm text-brown-900">
                        {message.username != username ? message.username : ""}
                      </p>
                      <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">
                      {message.username != username ? message.message : ""}
                    </div>
                    <div className="chat-footer opacity-50">Delivered</div>
                  </div>
                  <div
                    className={`chat chat-end ${
                      message.username == username ? "" : "hidden"
                    }`}
                  >
                    <div className="chat-header">
                      <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble">
                      {message.username == username ? message.message : ""}
                    </div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                  </div>
                </>
              );
            })}
          </div>
          {/* footer */}
          <div className="px-4 py-2.5 border-t border-b bg-pic-100 flex justify-between gap-2">
            {/* <div className="gap-1 inline-flex">
                  <Button
                    onClick={console.log("success")}
                    disabled={false}
                    color="bg-white"
                    customStyle="px-2"
                  >
                    <DocumentIcon className="h-5 w-5 text-white" />
                  </Button>
                  <Button
                    onClick={console.log("success")}
                    disabled={false}
                    color="bg-white"
                    customStyle="px-2"
                  >
                    <PhotoIcon className="h-5 w-5 text-white" />
                  </Button>
                </div> */}
            <textarea
              placeholder="Kirimkan pesan..."
              className="textarea textarea-info textarea-bordered textarea-xs w-full max-w-xs bg-pic-50 text-brown-900"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div>
              <Button
                onClick={submit}
                disabled={false}
                color="pic-900"
                customStyle="px-2"
              >
                <PaperAirplaneIcon className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full top-0 bottom-0 left-0 h-full right-0 ${
            formUsername ? "" : "hidden"
          }`}
        >
          <div className="p-4 bg-pic-50 lg:h-[380px] 2xl:h-[510px] overflow-auto flex justify-center">
            <div className="self-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-brown-900">Your Name</span>
                </label>
                <label className="input-group">
                  <span className="bg-pic-900">
                    <UserIcon className="h-6 w-6 text-white" />
                  </span>
                  <input
                    type="text"
                    placeholder="Masukan nama kamu..."
                    value={username}
                    className="input input-bordered bg-pic-600 text-brown-900"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-brown-900">Your Phone</span>
                </label>
                <label className="input-group">
                  <span className="bg-pic-900">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </span>
                  <input
                    type="text"
                    placeholder="081234567..."
                    className="input input-bordered bg-pic-600 text-brown-900"
                  />
                </label>
              </div>
              <button
                onClick={toggleUsername}
                className="btn bg-brown-900 mt-5 text-white w-full"
              >
                <PaperAirplaneIcon className="h-6 w-6 mr-2" />
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-b-lg flex justify-center items-center p-1 bg-pic-900">
        <a href="#" className="text-xs text-brown-50">
          Powered by Mahfudin-Nawawi
        </a>
      </div>
    </>
  );
}
