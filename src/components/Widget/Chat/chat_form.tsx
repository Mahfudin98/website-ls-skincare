import FormCustomer from "./form_customer";
import FormChat from "./form_chat";
import { useMessage } from "@/store/chat/message";
import { useEffect, useState } from "react";

export default function ChatForm() {
  const { showHistory, setShowHistory, historyChat, history } = useMessage();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (load) {
      historyChat().then(() => {
        setLoad(false);
      });
    }
  });
  return (
    <>
      <div className="relative">
        {showHistory ? (
          <FormChat />
        ) : (
          <FormCustomer setShowHistory={setShowHistory} />
        )}
      </div>
      <div className="flex items-center justify-center p-1 rounded-b-lg bg-pic-900">
        <span className="text-xs text-brown-50">
          Created by{" "}
          <a
            href="https://www.instagram.com/mahfudin_nawawi/"
            target="_blank"
            rel="Chatboot lsskincare"
            className="link link-hover hover:link-primary"
          >
            Mahfudin-Nawawi
          </a>
        </span>
      </div>
    </>
  );
}
