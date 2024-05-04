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
interface FormData {
  name: string;
  phoneNumber: string;
}

export default function FormCustomer(props: FormCustomerProps) {
  const { setShowHistory } = props;
  const [isLoad, setIsLoad] = useState(false);
  const handleShowHistory = () => {
    setShowHistory(true);
  };
  const { customer, submitCustomer } = useCustomer();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setIsLoad(true);
      const cookieValue = getCookie("token");
      submitCustomer({
        nama: formData.name,
        no_hp: formData.phoneNumber,
        token: cookieValue
      }).then(() => {
        setTimeout(() => {
          setIsLoad(false);
        }, 3000);
        setTimeout(() => {
          handleShowHistory();
        }, 2000);
      });
      console.log("Form submitted:", formData);
    } else {
      // Form is invalid, display errors
      setErrors(errors);
    }
  };
  const validateForm = (data: any) => {
    const errors: { [key: string]: string } = {};
    if (!data.name.trim()) {
      errors.name = "Nama wajib diisi.";
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Nomor HP wajib diisi.";
    } else if (!isValidPhoneNumber(data.phoneNumber)) {
      errors.phoneNumber = "Format nomor HP salah.";
    }
    return errors;
  };

  const isValidPhoneNumber = (phoneNumber: any) => {
    const re = /^08\d{9,12}$/;
    return re.test(phoneNumber);
  };

  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
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
          onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={(e) => {
                const newName = e.target.value;
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  name: newName
                }));
              }}
            />
            <div className="label">
              {errors.name && (
                <span className="label-text text-error">{errors.name}</span>
              )}
            </div>
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
              value={formData.phoneNumber}
              onChange={(e) => {
                const newName = e.target.value;
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  phoneNumber: newName
                }));
              }}
            />
            <div className="label">
              {errors.phoneNumber && (
                <span className="label-text text-error">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
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
