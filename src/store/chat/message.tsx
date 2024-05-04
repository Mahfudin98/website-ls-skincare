import $axiosChat from "@/lib/api_chat";
import useLocalstorage from "@/lib/use_localstorage";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Cookies from "js-cookie";

export const useMessage = () => {
  const csrf = () => $axiosChat.get("/sanctum/csrf-cookie");
  const [message, setMessage] = useState<string[]>([]);
  const [typeMessage, setTypeMessage] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [show, setShow] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const toogleChat = () => setShowChat(!showChat);

  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
  };

  const listMessage = (type:string) => {
    return new Promise<any>((resolve, reject) => {
      $axiosChat
        .get(`/api/message?type=${type}`)
        .then((res: any) => {
          setMessage(res.data.data);
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response.status !== 409) throw error;
          reject(error.reverse);
        });
    });
  };

  const listTypeMesage = () => {
    return new Promise<any>((resolve, reject) => {
      $axiosChat
        .get(`/api/message/type`)
        .then((res: any) => {
          setTypeMessage(res.data.data);
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err.response);
        });
    });
  };

  const historyChat = () => {
    const cookieValue = getCookie("token");
    return new Promise<any>((resolve, reject) => {
      $axiosChat
        .get(`/api/chat/history?token=${cookieValue}`)
        .then((res: any) => {
          if (res.data.status == "success") {
            setShowHistory(true);
            setHistory(res.data.data);
          }
          if (res.data.status == "failed") {
            setShowHistory(false);
            setHistory(res.data.data);
          }
          resolve(res.data);
        });
    });
  };

  const submitChat = async ({ ...props }) => {
    await csrf();
    return new Promise<any>((resolve, reject) => {
      $axiosChat.post("/api/chat", props).then((res: any) => {
        historyChat();
        setShow(false);
        setTimeout(() => {
          setShow(true);
        }, 3000);
        resolve(res.data);
      });
    });
  };

  useEffect(() => {
    message;
    history;
    show;
    showHistory;
    showChat;
    typeMessage;
  }, [history, message, show, showChat, showHistory, typeMessage]);

  return {
    listMessage,
    historyChat,
    submitChat,
    toogleChat,
    setShowHistory,
    listTypeMesage,
    showChat,
    showHistory,
    history,
    message,
    show,
    typeMessage
  };
};
