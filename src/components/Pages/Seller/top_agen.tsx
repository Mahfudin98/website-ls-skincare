import {
  UserGroupIcon,
  MapPinIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import moment from "moment";
import { Key, useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "@/components/Widget/loading";
import { NumericFormat } from "react-number-format";
import { useSellerData } from "@/store/seller_data";

export default function TopAgen() {
  const { topAgen } = useSellerData();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (topAgen?.length > 0) {
      setShow(false);
    }
  }, [setShow, topAgen]);
  return (
    <section className="container p-2 mx-auto pt-5 mb-3">
      <h1 className="mb-10 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase text-center">
        Top Agen Bulan {moment().subtract(1, "months").format("MMMM")}
      </h1>
      <div className="grid grid-cols-12 gap-6 lg:pt-5">
        <div className="col-span-12">
          <LoadingPage show={show} />
        </div>
        {topAgen
          ?.filter((x: any, y: number) => y < 3)
          .map((member: any, index: Key | null | undefined) => {
            return (
              <div className="col-span-12 lg:col-span-4 relative" key={index}>
                <div className="absolute -top-11 -right-7 lg:-top-20 lg:-right-2 flex justify-center z-20">
                  <svg
                    className={`object-cover w-20 lg:w-48 rotate-[24deg] lg:rotate-45 ${
                      index === 0
                        ? "fill-[#ffd700]"
                        : index === 1
                        ? "fill-[#C0C0C0]"
                        : "fill-[#945d41]"
                    }`}
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
                    src={member.image}
                    alt="avatar"
                    height={1080}
                    width={1080}
                  />
                  <div className="flex items-center px-6 py-3 bg-brown-900">
                    <UserGroupIcon className="h-6 w-6 text-white fill-current" />
                    <h1 className="mx-3 mb-0 text-white font-semibold text-lg">
                      {member.member_type}
                    </h1>
                  </div>
                  <div className="py-4 px-6">
                    <h1 className="text-2xl font-semibold text-brown-800 mb-0">
                      {member.member_name}
                    </h1>
                    <div className="flex items-center mt-4 text-brown-700">
                      <MapPinIcon className="h-6 w-6" />
                      <h1 className="px-2 text-sm mb-0">
                        {member.member_alamat}
                      </h1>
                    </div>
                    <div className="flex items-center mt-4 text-brown-700">
                      <ShoppingBagIcon className="h-6 w-6" />
                      <h1 className="px-2 text-sm mb-0">
                        <NumericFormat
                          value={`${parseInt(member.total)}`}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp. "}
                        />
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
