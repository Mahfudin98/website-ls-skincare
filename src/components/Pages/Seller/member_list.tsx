import { useEffect, useState } from "react";
import { useSellerData } from "@/store/seller_data";
import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function MemberList(props: any) {
  const { search = "" } = props;
  const { seller } = useSellerData();
  const [show, setShow] = useState(true);
  let filterMember: any[] = [];
  const sanitizedSearchTerm = search
    .replace(/(city of|Regency)/i, "")
    .trim()
    .toLowerCase();

  useEffect(() => {
    if (seller?.length > 0) {
      setShow(false);
    }
  }, [seller, setShow]);
  if (!show) {
    filterMember = seller?.filter((m: any) => {
      return (
        m.member_kota?.toLowerCase().includes(sanitizedSearchTerm) ||
        m.member_kecamatan?.toLowerCase().includes(sanitizedSearchTerm)
      );
    });
  }

  return (
    <div className="h-[425px] p-4 relative overflow-y-auto">
      <div
        className={`w-full h-full items-center justify-center ${
          !show ? "hidden" : "flex"
        }`}
      >
        <AiOutlineLoading3Quarters
          className={`w-8 h-8 text-pic-900 animate-spin`}
        />
      </div>
      {/* list agen reseller */}
      {filterMember?.length <= 0 && (
        <div
          className={`flex justify-center items-center w-full h-full ${
            show ? "hidden" : "block"
          }`}
        >
          <Image
            className="h-[350px] w-[350px] object-cover"
            src={"/coming-soon.gif"}
            width={1080}
            height={1080}
            alt="..."
          />
        </div>
      )}
      {filterMember?.length > 0 && (
        <ul className="flex flex-col gap-3">
          {filterMember?.map((member: any) => {
            return (
              <li
                key={member.member_id}
                className={`relative flex items-center w-full gap-2 overflow-hidden transition ease-in-out delay-75 shadow-md group ${
                  member.member_type == "Reseller"
                    ? "bg-pic-50 hover:bg-pic-300"
                    : "bg-gold-500 hover:bg-gold-400"
                } rounded-3xl shadow-slate-500/40 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/60`}
              >
                <div
                  className={`w-[25%] p-2 rounded-r-lg ${
                    member.member_type == "Reseller"
                      ? "bg-brown-600"
                      : "bg-pic-700"
                  }`}
                >
                  <Image
                    width={1080}
                    height={1080}
                    src={
                      member.member_image == null
                        ? `https://ui-avatars.com/api/?name=${member.member_name}&background=random&size=350`
                        : member.member_image
                    }
                    alt={member.member_name}
                    className="object-cover w-[60px] h-[60px] md:w-[130px] md:h-[130px] lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] rounded-full"
                  />
                </div>
                <div className="flex flex-col w-[60%]">
                  <h2 className="text-sm font-semibold md:text-2xl text-brown-900 font-poppins">
                    {member.member_name}
                  </h2>
                  <p className="text-xs font-medium md:text-lg text-brown-700 font-poppins">
                    {member.member_type}
                  </p>
                  <p className="text-xs font-medium md:text-lg text-brown-700 font-poppins">
                    {member.member_provinsi} - {member.member_kota} -{" "}
                    {member.member_kecamatan}
                  </p>
                </div>
                <div className="w-[15%] p-2 rounded-l-2xl bg-white shadow-md">
                  <a
                    href={`https://wa.me/${member.member_phone
                      .replace(/[ -]/g, "")
                      .replace(/^0/, "62")}?text=Hallo%20${
                      member.member_type
                    }%20${
                      member.member_name
                    }%20saya%20ingin%20pesan%20produk%20LS%20Skincare,%20apakah%20masih%20ada?`}
                    className="group"
                  >
                    <FaBagShopping className="w-full h-full text-pic-600 group-hover:text-pic-700" />
                    <p className="text-xs font-medium text-center md:text-base text-brown-800 font-poppins">
                      Pesan
                    </p>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
