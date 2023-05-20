import { useMessageData } from "@/store/message";
import {
  PaperAirplaneIcon,
  PhoneIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function FormCustomer() {
  const { formCustomer, chatId } = useMessageData();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [visible, setVisible] = useState(true);
  const submitCustomer = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    formCustomer({
      customer_name: customerName,
      customer_phone: customerPhone
    });

    setCustomerName("");
    setCustomerPhone("");
    setVisible(false);
  };
  useEffect(() => {
    if (chatId !== null) {
      setVisible(false);
    }
  }, [chatId, visible]);

  return (
    <div
      className={`absolute w-full top-0 bottom-0 left-0 h-full right-0 ${
        !visible ? "scale-0" : "scale-100"
      }`}
    >
      <div className="p-4 bg-pic-50 lg:h-[380px] 2xl:h-[510px] overflow-auto flex justify-center">
        <form onSubmit={submitCustomer} className="self-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-brown-900">Your Name</span>
            </label>
            <label className="input-group">
              <span className="bg-pic-900">
                <UserIcon className="w-6 h-6 text-white" />
              </span>
              <input
                type="text"
                placeholder="Masukan nama kamu..."
                value={customerName}
                className="input input-bordered bg-pic-600 text-brown-900"
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-brown-900">Your Phone</span>
            </label>
            <label className="input-group">
              <span className="bg-pic-900">
                <PhoneIcon className="w-6 h-6 text-white" />
              </span>
              <input
                type="text"
                placeholder="081234567..."
                value={customerPhone}
                className="input input-bordered bg-pic-600 text-brown-900"
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-5 text-white btn bg-brown-900"
          >
            <PaperAirplaneIcon className="w-6 h-6 mr-2" />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
