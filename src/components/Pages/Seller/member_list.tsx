import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/Widget/loading";
import { useSellerData } from "@/store/seller_data";
export default function MemberList() {
  const { seller } = useSellerData();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (seller?.length > 0) {
      setShow(false);
    }
  }, [seller, setShow]);
  return (
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
  );
}
