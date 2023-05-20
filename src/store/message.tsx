import $axios from "@/lib/api";
import useLocalstorage from "@/lib/use_localstorage";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useMessageData = () => {
  const csrf = () => $axios.get("/sanctum/csrf-cookie");
  const [listChats, setListChats] = useState<string[]>([]);
  const [chatIdValue, setChatIdValue] = useLocalstorage("chat_id", "");
  const [customerIdValue, setCustomerIdValue] = useLocalstorage(
    "customer_id",
    ""
  );
  const [chatId, setChatId] = useState(chatIdValue);
  const [customerId, setCustomerId] = useState(customerIdValue);
  const listMessage = ({ ...props }) => {
    $axios
      .get(`/api/list-message/${props}`)
      .then((res: any) => setListChats(res.data.data))
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      });
  };

  const formCustomer = async ({ ...props }) => {
    await csrf();

    $axios
      .post(`/api/new-message`, props)
      .then((res: any) => {
        setChatIdValue(res.data.chat_id);
        setCustomerIdValue(res.data.customer_id);
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;
      });
  };

  const formChat = async ({ ...props }) => {
    await csrf();
    $axios
      .post(`/api/message`, props)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 422) throw error;
      });
  };

  useEffect(() => {
    chatId;
    customerId;
    listChats;
  }, [listChats, chatId, customerId]);

  return { listChats, chatId, customerId, formCustomer, listMessage, formChat };
};
