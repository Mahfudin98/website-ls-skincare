import { Carousel } from "flowbite-react";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../Home/home.module.css";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaCircleXmark } from "react-icons/fa6";
export default function Testimoni() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section>
      <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
        <button
          type="button"
          onClick={openModal}
          className={`${styles["h3-title"]} group`}
        >
          Testimoni
          <ArrowRightCircleIcon
            className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
          />
        </button>
      </div>
      <Transition appear show={isOpen} as={"div"}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={"div"}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={"div"}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg transform rounded-2xl bg-pic-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-brown-900 font-poppins"
                  >
                    Testimoni
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="w-[450px] h-[450px]">
                      <Carousel>
                        <Image
                          src={"/testi1.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi2.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi3.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi4.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi5.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi6.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi7.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                        <Image
                          src={"/testi8.png"}
                          alt="..."
                          height={1080}
                          width={1080}
                          className="w-full object-cover"
                        />
                      </Carousel>
                    </div>
                  </div>
                  <div className="absolute -top-[12px] -right-[10px]">
                    <button
                      type="button"
                      className="p-1 rounded-full border border-red-900 text-red-900"
                      onClick={closeModal}
                    >
                      <FaCircleXmark className="w-6 h-6" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
