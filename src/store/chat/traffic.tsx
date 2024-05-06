import $axiosChat from "@/lib/api_chat";
import useSWR from "swr";

export const useTraffic = () => {
  const csrf = () => $axiosChat.get("/sanctum/csrf-cookie");

  const setTraffic = async ({ path, referal }: { path: any; referal: any }) => {
    // await csrf();
    return new Promise<any>((resolve, reject) => {
      $axiosChat
        .get(`/api/traffic?path=${path}&referrer_url=${referal}`)
        .then((res) => {
          resolve(res.data);
        });
    });
  };

  return { setTraffic };
};
