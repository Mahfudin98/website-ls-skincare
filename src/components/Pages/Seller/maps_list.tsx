import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/Widget/loading";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { useSellerData } from "@/store/seller_data";

export default function MapsList() {
  const { seller } = useSellerData();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (seller?.length > 0) {
      setShow(false);
    }
  }, [seller, setShow]);
  return (
    <section className="container p-2 mx-auto mt-5">
      <div className="flex flex-wrap border border-pic-100 rounded-md shadow-lg relative overflow-hidden mb-8">
        <div className="w-full lg:w-1/2">
          <div className="text-center h-full flex items-center justify-center w-full text-5xl font-bold bg-pic-900">
            MAPS
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="grid grid-cols-1">
            <div className="flex justify-center mb-3">
              <h3 className="uppercase text-xl font-bold text-center text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                Temukan Agen dan Reseller LS Skincare
                <MagnifyingGlassIcon className="h-6 w-6 text-brown-800 group-hover:ml-1.5 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
              </h3>
            </div>
            <div className="mb-5 px-4">
              <label className="mb-2 text-sm font-medium text-brown-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyingGlassIcon className="w-5 h-5 text-brown-500 dark:text-brown-400" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-brown-900 border border-brown-300 rounded-lg bg-brown-50 focus:ring-pic-500 focus:border-pic-500 dark:bg-brown-700 dark:border-brown-600 dark:placeholder-brown-400 dark:text-white dark:focus:ring-pic-500 dark:focus:border-pic-500"
                  placeholder="Nama kota/kabupaten"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-pic-700 hover:bg-pic-800 focus:ring-4 focus:outline-none focus:ring-pic-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pic-600 dark:hover:bg-pic-700 dark:focus:ring-pic-800"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="h-[425px] p-4 relative overflow-y-auto">
              <LoadingPage show={show} />
              {/* list agen reseller */}
              {seller?.map((member: any) => {
                return (
                  <Accordion
                    key={member.member_id}
                    flush={true}
                    alwaysOpen={true}
                    collapseAll={true}
                  >
                    <Accordion.Panel>
                      <Accordion.Title>
                        <span className="uppercase text-base font-bold text-brown-900 text-start">
                          {member.nama_member}
                          <span className="block text-xs font-normal text-brown-600">
                            {member.member_type != "1" ? "Reseller" : "Agen"}
                          </span>
                        </span>
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="text-sm font-normal text-brown-700">
                          Full Name :{" "}
                          <span className="text-base font-medium text-brown-900 capitalize">
                            {member.nama_member}
                          </span>
                        </p>
                        <p className="text-sm font-normal text-brown-700">
                          Phone :{" "}
                          <span className="text-base font-medium text-brown-900">
                            {member.phone_member}
                          </span>
                        </p>
                        <p className="text-sm font-normal text-brown-700">
                          Full Adress :{" "}
                          <span className="text-base font-medium text-brown-900">
                            {member.alamat_member.replaceAll("=", ":")}
                          </span>
                        </p>
                        <p className="text-sm font-normal text-brown-700">
                          Member Type :{" "}
                          <span className="text-base font-medium text-brown-900">
                            {member.member_type != "1" ? "Reseller" : "Agen"}
                          </span>
                        </p>
                        <p className="text-sm font-normal text-brown-700">
                          Status :{" "}
                          <span className="text-base font-medium text-brown-900">
                            {member.member_type != "0" ? "Nonaktif" : "Aktif"}
                          </span>
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
