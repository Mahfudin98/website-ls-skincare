import {
  ChevronRightIcon,
  ChevronUpIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
export default function ModalProduct(props: any) {
  const { isOpen = false, closeModal, openModal, detail = {} } = props;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
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
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl p-6 overflow-hidden text-left align-middle transition-all transform border shadow-xl rounded-2xl bg-gradient-to-b from-pic-900 to-pic-400 via-pic-600 border-brown-400">
                <div className="mt-2">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-5">
                      <div className="grid gap-4">
                        <div className="p-4 rounded-lg bg-pic-700 border border-brown-300">
                          <nav className="flex mb-3" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                              <li className="inline-flex items-center">
                                <a
                                  href="#"
                                  className="inline-flex items-center text-sm font-medium text-brown-600 hover:text-brown-800"
                                >
                                  <HomeIcon className="w-4 h-4 mr-2" />
                                  Home
                                </a>
                              </li>
                              <li>
                                <div className="flex items-center">
                                  <ChevronRightIcon className="w-6 h-6 text-brown-400" />
                                  <a
                                    href="#"
                                    className="ml-1 text-sm font-medium text-brown-600 hover:text-brown-800 md:ml-2"
                                  >
                                    Projects
                                  </a>
                                </div>
                              </li>
                              <li aria-current="page">
                                <div className="flex items-center">
                                  <ChevronRightIcon className="w-6 h-6 text-brown-400" />
                                  <span className="ml-1 text-sm font-medium text-brown-500 md:ml-2">
                                    Flowbite
                                  </span>
                                </div>
                              </li>
                            </ol>
                          </nav>
                          <Dialog.Title
                            as="h3"
                            className="mb-2 text-2xl font-semibold leading-6 text-brown-800 font-poppins"
                          >
                            {detail.nama_produk}
                          </Dialog.Title>
                          <h1 className="text-xl font-medium whitespace-nowrap font-poppins text-brown-50 mb-3">
                            <NumericFormat
                              value={`${detail.harga_end_user}`}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"Rp. "}
                            />
                          </h1>
                          <hr />
                          <article className="py-3 text-lg font-light text-brown-600 font-poppins text-start">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Suscipit voluptas voluptatibus
                              totam dolor voluptatum quod non quos laudantium
                              esse, est sed saepe nobis neque error hic
                              accusantium quas odio libero aperiam minus vitae
                              ipsa! Iste.
                            </p>
                          </article>
                          <hr className="mb-6" />
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-brown-100 px-4 py-2 text-left text-sm font-medium text-brown-900 hover:bg-brown-200 focus:outline-none focus-visible:ring focus-visible:ring-brown-500 focus-visible:ring-opacity-75">
                                  <span>Usage</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-brown-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-brown-500">
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Dolorum, facilis nisi, quas
                                  laborum unde quasi blanditiis, provident
                                  architecto ipsam iste nihil aliquam at amet
                                  odio.
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                          <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-brown-100 px-4 py-2 text-left text-sm font-medium text-brown-900 hover:bg-brown-200 focus:outline-none focus-visible:ring focus-visible:ring-brown-500 focus-visible:ring-opacity-75">
                                  <span>Whats in it?</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-brown-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-brown-500">
                                  No.
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className="p-4 bg-pic-500 rounded-lg border border-brown-300">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                      <div className="flex items-center justify-center h-full p-4 rounded-lg bg-pic-900">
                        <Image
                          src={`${detail.image}`}
                          width={1080}
                          height={1080}
                          className="object-cover w-[450px] h-auto transition duration-300 ease-in-out delay-150 brightness-100 contrast-100 hover:-translate-y-1 hover:scale-110 hover:z-10 hue-rotate-10"
                          alt={`${detail.nama_produk}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
