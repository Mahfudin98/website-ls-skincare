import { useSellerData } from "@/store/seller_data";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CardBiodata() {
  const { sellerDetail } = useSellerData();
  const [seller, setSeller] = useState({
    member_id: "",
    usernamae: "",
    member_name: "",
    image_member: "",
    member_phone: "",
    member_type: "",
    join_on: "",
    status: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    website: ""
  });
  useEffect(() => {
    if (sellerDetail != undefined) {
      setSeller(sellerDetail);
    }
  }, [sellerDetail]);
  return (
    <div className="p-5 mb-6 bg-pic-50 rounded-lg shadow-md flex flex-col justify-center items-center">
      <div className="w-full mb-3 flex flex-col justify-center items-center">
        <div className="w-44 h-44 mb-3 rounded-full bg-pic-900 flex justify-center items-center">
          <Image
            src={
              seller
                ? seller.image_member != null
                  ? seller.image_member
                  : `https://ui-avatars.com/api/?name=${seller.member_name}&background=random&size=350`
                : `https://ui-avatars.com/api/?name=LS+Skincare&background=random&size=350`
            }
            className="w-40 h-40 object-cover rounded-full"
            height={1080}
            width={1080}
            alt="Foto Seller"
          />
        </div>
        <h2 className="text-xl font-poppins font-semibold text-brown-900 uppercase text-center">
          {seller.member_name}
        </h2>
        <h3 className="text-sm font-poppins font-semibold text-brown-700 uppercase text-center">
          {seller.member_type}
        </h3>
      </div>
      <div className="w-full border-t-2 border-brown-700">
        <h1 className="text-xl font-poppins font-semibold my-5 text-brown-900 uppercase">
          Profile Data
        </h1>
        <div className="grid gap-3">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                <Image
                  src="/icons/whatsapp.svg"
                  className="w-5 h-5 mr-2"
                  width={350}
                  height={350}
                  alt="Instagram"
                />{" "}
                Whatsapp
              </h3>
            </div>
            <div className="col-span-1 text-center">:</div>
            <div className="col-span-7">
              <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                {seller.member_phone}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                <Image
                  src="/icons/facebook.svg"
                  className="w-5 h-5 mr-2"
                  width={350}
                  height={350}
                  alt="Instagram"
                />{" "}
                Facebook
              </h3>
            </div>
            <div className="col-span-1 text-center">:</div>
            <div className="col-span-7">
              <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                {seller.facebook != null ? seller.facebook : "-"}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                <Image
                  src="/icons/instagram.svg"
                  className="w-5 h-5 mr-2"
                  width={350}
                  height={350}
                  alt="Instagram"
                />{" "}
                Instagram
              </h3>
            </div>
            <div className="col-span-1 text-center">:</div>
            <div className="col-span-7">
              <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                {seller.instagram != null ? seller.instagram : "-"}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                <Image
                  src="/icons/tiktok_rounded.svg"
                  className="w-5 h-5 mr-2"
                  width={350}
                  height={350}
                  alt="Instagram"
                />{" "}
                Tiktok
              </h3>
            </div>
            <div className="col-span-1 text-center">:</div>
            <div className="col-span-7">
              <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                {seller.tiktok != null ? seller.tiktok : "-"}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                <GlobeAltIcon className="w-5 h-5 mr-2" />
                Website
              </h3>
            </div>
            <div className="col-span-1 text-center">:</div>
            <div className="col-span-7">
              <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                {seller.website != null ? seller.website : "-"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
