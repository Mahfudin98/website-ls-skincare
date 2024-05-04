import $axiosChat from "@/lib/api_chat";
import useLocalstorage from "@/lib/use_localstorage";
import { Customer } from "customer";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useMessage } from "./message";
import Cookies from "js-cookie";

export const useCustomer = () => {
  const csrf = () => $axiosChat.get("/sanctum/csrf-cookie");
  const { historyChat } = useMessage();
  const [customer, setCustomer] = useState({} as Customer);
  const getCookie = (cookieName: any) => {
    return Cookies.withAttributes({ path: '/', domain: 'api-website.lsskincare.id' }).get(cookieName);
  };
  const submitCustomer = async ({ ...props }) => {
    await csrf();
    return new Promise<any>((resolve, reject) => {
      $axiosChat
        .post("/api/chat/customer-store", props, {
          headers: {
            "X-CSRF-Token": getCookie("XSRF-TOKEN")
          }
        })
        .then((res: any) => {
          setCustomer(res.data.data);
          historyChat();
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  const getCustomer = () => {
    const cookieValue = getCookie("token");
    return new Promise<any>((resolve, reject) => {
      $axiosChat
        .get(`/api/chat/customer?token=${cookieValue}`)
        .then((res: any) => {
          setCustomer(res.data.data);
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    customer;
  }, [customer]);

  return { customer, submitCustomer, getCustomer };
};
