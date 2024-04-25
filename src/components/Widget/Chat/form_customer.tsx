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

interface FormCustomerProps {
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormCustomer(props: FormCustomerProps) {
  const { setShowHistory } = props;
  const [isLoad, setIsLoad] = useState(false);
  const handleShowHistory = () => {
    setShowHistory(true);
  };
  const { customer, submitCustomer } = useCustomer();
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
  };

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoad(true);
    const cookieValue = getCookie("token");
    submitCustomer({
      nama: nama,
      no_hp: noHP,
      token: cookieValue
    }).then(() => {
      setTimeout(() => {
        setIsLoad(false);
      }, 3000);
      setTimeout(() => {
        handleShowHistory();
      }, 2000);
    });
  };
  return (
    <div className="relative">
      <div className="bg-pic-900 relative flex px-3 py-2.5 rounded-t-lg justify-between">
        <div className="p-4">
          <h1 className="mb-0 capitalize card-title text-base-100">
            Selamat datang di chat boot
          </h1>
          <h2 className="mb-3 text-xl font-bold uppercase font-lato text-base-300">
            LS Skincare
          </h2>
          <p className="text-base text-base-100">
            Mohon isi Nama dan No HP dulu ya
          </p>
        </div>
      </div>
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
          {!isLoad ? (
            <button
              type="submit"
              className="border-none btn bg-pic-600 hover:bg-pic-700 text-base-100"
            >
              Mulai Chat
            </button>
          ) : (
            <button className="btn" disabled>
              <span className="loading loading-spinner"></span>
              loading
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
