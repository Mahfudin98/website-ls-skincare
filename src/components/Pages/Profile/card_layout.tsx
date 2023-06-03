import { useEffect, useState } from "react";
import CardAnalytic from "./card_analytic";
import CardBiodata from "./card_biodata";
import moment from "moment";
import { useSellerChartData } from "@/store/seller_chart_data";
import { useSellerData } from "@/store/seller_data";
import { Label, Select } from "flowbite-react";

export default function CardLayout() {
  var years = moment().format("YYYY");
  var months = moment().format("MM");
  const { sellerDetail } = useSellerData();
  const { sellerBar, barData, sellerLine, lineData } = useSellerChartData();
  const [year, setYear] = useState(years);
  const [month, setMonth] = useState(months);
  const [seller, setSeller] = useState({
    member_id: ""
  });
  useEffect(() => {
    if (sellerDetail) {
      setSeller(sellerDetail);
      if (seller.member_id) {
        sellerLine({
          idMember: seller.member_id,
          month: month,
          year: year
        });
        sellerBar({
          idMember: seller.member_id,
          year: year
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, seller.member_id, sellerDetail, year]);
  return (
    <section className="container mx-auto my-5">
      <div className="grid grid-cols-12 gap-6 pb-3">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex flex-col">
            <CardBiodata />
            <div className="p-5 bg-pic-50 rounded-lg shadow-md">
              <h3 className="text-lg font-poppins font-semibold text-brown-900 mb-3">
                Filter Data Chart
              </h3>
              <div className="flex justify-start gap-3 items-center">
                <div className="w-full max-w-lg" id="month">
                  <div className="mb-2 block">
                    <Label htmlFor="month" value="Bulan" />
                  </div>
                  <Select
                    id="month"
                    required
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="01">Januari</option>
                    <option value="02">Februari</option>
                    <option value="03">Maret</option>
                    <option value="04">April</option>
                    <option value="05">Mei</option>
                    <option value="06">Juni</option>
                    <option value="07">Juli</option>
                    <option value="08">Agustus</option>
                    <option value="09">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">Desember</option>
                  </Select>
                </div>
                <div className="w-full max-w-lg" id="year">
                  <div className="mb-2 block">
                    <Label htmlFor="year" value="Tahun" />
                  </div>
                  <Select
                    id="year"
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardAnalytic barData={barData} lineData={lineData} />
      </div>
    </section>
  );
}
