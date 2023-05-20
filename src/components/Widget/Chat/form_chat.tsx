import $axios from "@/lib/api";
import Image from "next/image";
import { useMessageData } from "@/store/message";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";

export default function FormChat() {
  const { listMessage, formChat, chatId, customerId } = useMessageData();

  const [userForm, setUserForm] = useState(true);
  const [chat, setChat] = useState("");
  const [listChats, setListChats] = useState<string[]>([]);
  function getMessage(id: any) {
    $axios.get(`/api/list-message/${id}`).then((res) => {
      setListChats(res.data.data);
    });
  }
  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    formChat({
      message: chat,
      chat_id: chatId,
      customer_id: customerId
    });

    setChat("");
  };

  useEffect(() => {
    if (localStorage.getItem("chat_id") != null) {
      setUserForm(false);
    }
    const pusher = new Pusher("141b4b997017d20aaed4", {
      cluster: "ap1"
    });
    const channel = pusher.subscribe("chat");
    channel.bind(chatId, function (data: any) {
      if (data) {
        getMessage(chatId);
      }
    });
  }, [chatId, setUserForm, userForm, listMessage]);
  return (
    <div className="relative">
      {/* content */}
      <div className="p-4 bg-pic-50 lg:h-[380px] 2xl:h-[450px] overflow-auto flex flex-col-reverse">
        {listChats.map((message: any) => {
          return (
            <>
              <div
                className={`chat chat-start ${
                  message.user_name != null ? "" : "hidden"
                }`}
                key={message.user_name}
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
                <div className="inline-flex items-center gap-2 chat-header">
                  <p className="text-sm text-brown-900">
                    {message.user_id != null ? message.user_name : ""}
                  </p>
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">
                  {message.user_id != null ? message.chat : ""}
                </div>
                <div className="opacity-50 chat-footer">Delivered</div>
              </div>
              <div
                className={`chat chat-end ${
                  message.customer_id != null ? "" : "hidden"
                }`}
              >
                <div className="chat-header">
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">
                  {message.customer_id != null ? message.chat : ""}
                </div>
                <div className="opacity-50 chat-footer">Seen at 12:46</div>
              </div>
            </>
          );
        })}
      </div>
      {/* footer */}
      <form
        onSubmit={submitForm}
        className="px-4 py-2.5 border-t border-b bg-pic-100 flex justify-between gap-2"
      >
        {/* <div className="inline-flex gap-1">
                  <Button
                    onClick={console.log("success")}
                    disabled={false}
                    color="bg-white"
                    customStyle="px-2"
                  >
                    <DocumentIcon className="w-5 h-5 text-white" />
                  </Button>
                  <Button
                    onClick={console.log("success")}
                    disabled={false}
                    color="bg-white"
                    customStyle="px-2"
                  >
                    <PhotoIcon className="w-5 h-5 text-white" />
                  </Button>
                </div> */}
        <input
          type="text"
          placeholder="Kirimkan pesan..."
          className="w-full max-w-xs textarea textarea-info textarea-bordered textarea-xs bg-pic-50 text-brown-900"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <div>
          <button type="submit" className="btn bg-pic-900 px-2">
            <PaperAirplaneIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}
