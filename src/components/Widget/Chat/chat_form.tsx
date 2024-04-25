import FormCustomer from "./form_customer";
import FormChat from "./form_chat";
import { useEffect, useState } from "react";
import { useMessageData } from "@/store/message";
import Cookies from "js-cookie";
import { useMessage } from "@/store/chat/message";

export default function ChatForm() {
  const { history, showHistory, historyChat } = useMessage();
  const generateRandomString = (length: number) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
    return randomString;
  };
  const setCookieIfNotExists = (): void => {
    const cookieName: string = "token";
    const cookieValue: string = generateRandomString(32);

    // Cek apakah cookie sudah terpasang
    const existingCookie: string | undefined = Cookies.get(cookieName);

    if (!existingCookie) {
      // Jika cookie belum terpasang, set cookie
      Cookies.set(cookieName, cookieValue, { expires: 365 }); // Expires dalam 365 hari
      console.log("Cookie set:", cookieName);
    } else {
      console.log("Cookie already exists:", cookieName);
    }
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    setCookieIfNotExists();
    if (history?.length == 0 && history) {
      historyChat();
    }
    setShow(showHistory);
  }, [ history, showHistory, historyChat]);

  const renderForm = () => {
    if (show) {
      return <FormChat />;
    } else {
      return <FormCustomer />;
    }
  };
  return (
    <>
      <div className="relative">{renderForm()}</div>
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
