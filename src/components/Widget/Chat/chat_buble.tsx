import {
  ChatBubbleLeftRightIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import Button from "../Button/button";
import ChatForm from "./chat_form";
import { useMessage } from "@/store/chat/message";

export default function ChatBubble() {
  const { toogleChat, showChat } = useMessage();
  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div
        className={`relative flex justify-end lg:w-[400px] !showChat ? "scale-0" : "scale-100"`}
      >
        <div
          className={`mb-20 relative border border-pic-800 -mr-16 shadow-md rounded-lg w-full transform transition-transform ease-in-out duration-300 delay-100 origin-bottom-right ${
            !showChat ? "scale-0" : "scale-100"
          }`}
        >
          <button
            onClick={() => toogleChat()}
            className="absolute z-50 top-2 right-2"
          >
            <XCircleIcon className="self-center w-8 h-8 text-white" />
          </button>
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
