import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/layout";
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  MapPinIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/outline";
import { Accordion } from "flowbite-react";
import axios from "axios";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState
} from "react";
import LoadingPage from "@/components/Widget/loading";
import Image from "next/image";
import moment from "moment";

export default function Seller() {
  const [members, setMembers] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api-report.lsskincare.id/api/member-list-guest`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then((response) => {
        if (response.data.data.length > 0) {
          setShow(false);
        }
        return setMembers(response.data.data);
      });
  }, [setMembers, setShow]);

  return (
    <Layout pageTitle="Seller">
      <Breadcrumb title="Seller" navigate="seller" />
      <section className="container p-2 mx-auto">
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
                {members.map(
                  (member: {
                    member_id: Key | null | undefined;
                    nama_member:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | null
                      | undefined;
                    member_type: string;
                    phone_member:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    province_id:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    city_id:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    district_id:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    alamat_member: string;
                  }) => {
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
                                {member.member_type != "1"
                                  ? "Reseller"
                                  : "Agen"}
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
                              Address :{" "}
                              <span className="text-base font-medium text-brown-900">
                                {member.province_id}, {member.city_id},{" "}
                                {member.district_id}
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
                                {member.member_type != "1"
                                  ? "Reseller"
                                  : "Agen"}
                              </span>
                            </p>
                            <p className="text-sm font-normal text-brown-700">
                              Status :{" "}
                              <span className="text-base font-medium text-brown-900">
                                {member.member_type != "0"
                                  ? "Nonaktif"
                                  : "Aktif"}
                              </span>
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-2 mx-auto">
        <div className="py-5">
          <h1 className="mb-10 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase text-center">
            Join us
          </h1>
          <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center container">
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-200 z-30">
              <h1 className="text-brown-500 font-semibold text-xl">End User</h1>
              <div className="text-center py-4 px-7">
                <h1 className="text-brown-700 text-4xl font-black">$199.00</h1>
                <p className="text-brown-500  mt-2">Monthely</p>
              </div>
              <div className="h-px bg-brown-200"></div>
              <div className="text-center mt-3">
                <ul>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
                Buy Now
              </button>
            </div>
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-700 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
              <h1 className="text-brown-800 font-semibold text-xl ">
                Reseller
              </h1>
              <div className="text-center py-4 px-7">
                <h1 className="text-white text-4xl font-black">$399.00</h1>
                <p className="text-white text-opacity-50 mt-2">Monthely</p>
              </div>
              <div className="h-px bg-brown-400"></div>
              <div className="text-center mt-3">
                <ul>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-400 hover:shadow-xl duration-200 hover:bg-brown-800">
                Buy Now
              </button>
            </div>
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-200 z-30">
              <h1 className="text-brown-500 font-semibold text-xl ">
                Enterprise
              </h1>
              <div className="text-center py-4 px-7">
                <h1 className="text-brown-700 text-4xl font-black">$899.00</h1>
                <p className="text-brown-500  mt-2">Monthely</p>
              </div>
              <div className="h-px bg-brown-200"></div>
              <div className="text-center mt-3">
                <ul>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-2 mx-auto pt-5 mb-3">
        <h1 className="mb-10 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase text-center">
          Top Agen Bulan {moment().subtract(1, "months").format("MMMM")}
        </h1>
        <div className="grid grid-cols-12 gap-6 lg:pt-5">
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="absolute -top-11 -right-7 lg:-top-20 lg:-right-2 flex justify-center z-20">
              <svg
                className="object-cover w-20 lg:w-48 fill-pic-900 rotate-[24deg] lg:rotate-45"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220 220"
              >
                <path
                  d="M220,98.865c0-12.728-10.355-23.083-23.083-23.083s-23.083,10.355-23.083,23.083c0,5.79,2.148,11.084,5.681,15.14
	l-23.862,21.89L125.22,73.002l17.787-20.892l-32.882-38.623L77.244,52.111l16.995,19.962l-30.216,63.464l-23.527-21.544
	c3.528-4.055,5.671-9.344,5.671-15.128c0-12.728-10.355-23.083-23.083-23.083C10.355,75.782,0,86.137,0,98.865
	c0,11.794,8.895,21.545,20.328,22.913l7.073,84.735H192.6l7.073-84.735C211.105,120.41,220,110.659,220,98.865z"
                />
              </svg>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <Image
                className="w-full h-56 object-cover object-center"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
                height={1080}
                width={1080}
              />
              <div className="flex items-center px-6 py-3 bg-brown-900">
                <UserGroupIcon className="h-6 w-6 text-white fill-current" />
                <h1 className="mx-3 mb-0 text-white font-semibold text-lg">
                  Agen
                </h1>
              </div>
              <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-brown-800 mb-0">
                  Patterson johnson
                </h1>
                <div className="flex items-center mt-4 text-brown-700">
                  <MapPinIcon className="h-6 w-6" />
                  <h1 className="px-2 text-sm mb-0">California</h1>
                </div>
                <div className="flex items-center mt-4 text-brown-700">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <h1 className="px-2 text-sm mb-0">Rp. 100.000.000</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="absolute -top-11 -right-7 lg:-top-20 lg:-right-2 flex justify-center z-20">
              <svg
                className="object-cover w-20 lg:w-48 fill-pic-900 rotate-[24deg] lg:rotate-45"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220 220"
              >
                <path
                  d="M220,98.865c0-12.728-10.355-23.083-23.083-23.083s-23.083,10.355-23.083,23.083c0,5.79,2.148,11.084,5.681,15.14
	l-23.862,21.89L125.22,73.002l17.787-20.892l-32.882-38.623L77.244,52.111l16.995,19.962l-30.216,63.464l-23.527-21.544
	c3.528-4.055,5.671-9.344,5.671-15.128c0-12.728-10.355-23.083-23.083-23.083C10.355,75.782,0,86.137,0,98.865
	c0,11.794,8.895,21.545,20.328,22.913l7.073,84.735H192.6l7.073-84.735C211.105,120.41,220,110.659,220,98.865z"
                />
              </svg>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <Image
                className="w-full h-56 object-cover object-center"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
                height={1080}
                width={1080}
              />
              <div className="flex items-center px-6 py-3 bg-brown-900">
                <UserGroupIcon className="h-6 w-6 text-white fill-current" />
                <h1 className="mx-3 mb-0 text-white font-semibold text-lg">
                  Agen
                </h1>
              </div>
              <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-brown-800 mb-0">
                  Patterson johnson
                </h1>
                <div className="flex items-center mt-4 text-brown-700">
                  <MapPinIcon className="h-6 w-6" />
                  <h1 className="px-2 text-sm mb-0">California</h1>
                </div>
                <div className="flex items-center mt-4 text-brown-700">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <h1 className="px-2 text-sm mb-0">Rp. 100.000.000</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="absolute -top-11 -right-7 lg:-top-20 lg:-right-2 flex justify-center z-20">
              <svg
                className="object-cover w-20 lg:w-48 fill-pic-900 rotate-[24deg] lg:rotate-45"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220 220"
              >
                <path
                  d="M220,98.865c0-12.728-10.355-23.083-23.083-23.083s-23.083,10.355-23.083,23.083c0,5.79,2.148,11.084,5.681,15.14
	l-23.862,21.89L125.22,73.002l17.787-20.892l-32.882-38.623L77.244,52.111l16.995,19.962l-30.216,63.464l-23.527-21.544
	c3.528-4.055,5.671-9.344,5.671-15.128c0-12.728-10.355-23.083-23.083-23.083C10.355,75.782,0,86.137,0,98.865
	c0,11.794,8.895,21.545,20.328,22.913l7.073,84.735H192.6l7.073-84.735C211.105,120.41,220,110.659,220,98.865z"
                />
              </svg>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <Image
                className="w-full h-56 object-cover object-center"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
                height={1080}
                width={1080}
              />
              <div className="flex items-center px-6 py-3 bg-brown-900">
                <UserGroupIcon className="h-6 w-6 text-white fill-current" />
                <h1 className="mx-3 mb-0 text-white font-semibold text-lg">
                  Agen
                </h1>
              </div>
              <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-brown-800 mb-0">
                  Patterson johnson
                </h1>
                <div className="flex items-center mt-4 text-brown-700">
                  <MapPinIcon className="h-6 w-6" />
                  <h1 className="px-2 text-sm mb-0">California</h1>
                </div>
                <div className="flex items-center mt-4 text-brown-700">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <h1 className="px-2 text-sm mb-0">Rp. 100.000.000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
