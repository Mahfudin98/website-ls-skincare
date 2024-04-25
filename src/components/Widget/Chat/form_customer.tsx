import { useCustomer } from "@/store/chat/customer";
import { useMessage } from "@/store/chat/message";
import { useMessageData } from "@/store/message";
import {
  PaperAirplaneIcon,
  PhoneIcon,
  UserIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function FormCustomer() {
  const { customer, submitCustomer } = useCustomer();
  const { historyChat, setShowHistory } = useMessage();
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
  };

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const cookieValue = getCookie("token");
    submitCustomer({
      nama: nama,
      no_hp: noHP,
      token: cookieValue
    });
    setShowHistory(true);
    historyChat();
  };
  return (
    <div className="relative">
      <div className="p-4 bg-pic-50 h-[350px] lg:h-[350px] 2xl:h-[450px]">
        <form
          onSubmit={submit}
          className="flex flex-col items-center justify-center w-full h-full gap-2"
        >
          <label className="w-full max-w-xs form-control">
            <div className="label">
              <span className="label-text text-base-100">Siapa nama kamu?</span>
            </div>
            <input
              type="text"
              placeholder="Masukan nama kamu"
              className="w-full max-w-xs input input-bordered bg-pic-300"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </label>
          <label className="w-full max-w-xs form-control">
            <div className="label">
              <span className="label-text text-base-100">
                Nomor HP kamu berapa?
              </span>
            </div>
            <input
              type="tel"
              placeholder="08**********"
              className="w-full max-w-xs input input-bordered bg-pic-300"
              value={noHP}
              onChange={(e) => setNoHP(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="border-none btn bg-pic-600 hover:bg-pic-700 text-base-100"
          >
            Mulai Chat
          </button>
        </form>
      </div>
    </div>
  );
}
