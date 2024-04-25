import $axiosChat from "@/lib/api_chat";
import useLocalstorage from "@/lib/use_localstorage";
import { Customer } from "customer";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useMessage } from "./message";

export const useCustomer = () => {
  const csrf = () => $axiosChat.get("/sanctum/csrf-cookie");
  const { historyChat, setShowHistory } = useMessage();
  const [customer, setCustomer] = useState({} as Customer);

  const submitCustomer = async ({ ...props }) => {
    await csrf();

    $axiosChat.post("/api/chat/customer-store", props).then((res: any) => {
      setCustomer(res.data.data);
      historyChat();
      setShowHistory(true);
    });
  };

  useEffect(() => {
    customer;
  }, [customer]);

  return { customer, submitCustomer };
};
