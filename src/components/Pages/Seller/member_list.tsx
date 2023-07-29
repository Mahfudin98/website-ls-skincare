import { useEffect, useState } from "react";
import LoadingPage from "@/components/Widget/loading";
import { useSellerData } from "@/store/seller_data";
import { useRajaongkir } from "@/store/rajaongkir";
import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";
export default function MemberList(props: any) {
  const { search = "" } = props;
  const { kota } = useRajaongkir();
  const { seller } = useSellerData();
  const [show, setShow] = useState(true);
  const kabupaten = kota?.filter((el: any) => {
    return el.city_name === search || el.city_name === search.split(" ")[0];
  });
  let memberFilters: any[] = [];
  kabupaten?.map((city: any) => {
    memberFilters = seller?.filter((el: any) => {
      return el.member_city_id === city.city_id;
    });
  });
  useEffect(() => {
    if (seller?.length > 0) {
      setShow(false);
    }
  }, [seller, setShow]);

  return (
    <div className="h-[425px] p-4 relative overflow-y-auto">
      <LoadingPage show={show} />
      {/* list agen reseller */}
      {memberFilters?.length <= 0 && (
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
      {memberFilters?.length > 0 && (
        <ul className="flex flex-col gap-3">
          {memberFilters?.map((member: any) => {
            return (
              <li
                key={member.member_id}
                className="relative flex items-center w-full gap-2 overflow-hidden transition ease-in-out delay-75 shadow-md group bg-pic-50 hover:bg-pic-300 rounded-3xl shadow-slate-500/40 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/60"
              >
                <div className="w-[25%] p-2 rounded-r-lg bg-brown-600">
                  <Image
                    width={1080}
                    height={1080}
                    src={
                      member.member_image == null
                        ? `https://ui-avatars.com/api/?name=${member.nama_member}&background=random&size=350`
                        : member.member_image
                    }
                    alt={member.nama_member}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col w-[60%]">
                  <h2 className="text-sm font-semibold md:text-2xl text-brown-900 font-poppins">
                    {member.nama_member}
                  </h2>
                  <p className="text-xs font-medium md:text-lg text-brown-700 font-poppins">
                    {member.member_type}
                  </p>
                  <p className="text-xs font-medium md:text-lg text-brown-700 font-poppins">
                    {search.split(" ")[0]}
                  </p>
                </div>
                <div className="w-[15%] p-2 rounded-l-2xl bg-white shadow-md">
                  <a
                    href={`https://wa.me/${member.phone_member
                      .replace(/[ -]/g, "")
                      .replace(/^0/, "62")}?text=Hallo%20${
                      member.member_type
                    }%20${
                      member.nama_member
                    }%20saya%20ingin%20pesan%20produk%20LS%20Skincare,%20apakah%20masih%20ada?`}
                    className="group"
                  >
                    <FaBagShopping className="w-full h-full text-pic-600 group-hover:text-pic-700" />
                    <p className="text-xs font-medium text-center md:text-base text-brown-800 group-hover:text-brown-900 font-poppins">
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
