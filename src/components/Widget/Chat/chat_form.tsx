import FormCustomer from "./form_customer";
import FormChat from "./form_chat";
import { useEffect, useState } from "react";
import { useMessageData } from "@/store/message";

export default function ChatForm() {
  const { chatId } = useMessageData();
  return (
    <>
      <div className="relative">
        <FormChat />
        <FormCustomer />
      </div>
      <div className="flex items-center justify-center p-1 rounded-b-lg bg-pic-900">
        <a href="#" className="text-xs text-brown-50">
          Powered by Mahfudin-Nawawi
        </a>
      </div>
    </>
  );
}
