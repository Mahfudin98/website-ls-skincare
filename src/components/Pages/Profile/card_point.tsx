import { useSellerChartData } from "@/store/seller_chart_data";
import { Menu, Transition } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import Datepicker from "react-tailwindcss-datepicker";

export default function CardPoint(props: any) {
  const { sellerPoint, pointData } = useSellerChartData();
  const { lineData, month, sellerId } = props;
  const [total, setTotal] = useState();
  const [range, setRange] = useState({
    startDate: null,
    endDate: null
  });

  const handleRangeChange = (newRange: any) => {
    setRange(newRange);
  };

  useEffect(() => {
    let totals = lineData.map((totals: any) => {
      return totals.total;
    });
    setTotal(
      totals.reduce((a: any, b: any) => {
        return a + parseInt(b);
      }, 0)
    );
    if (sellerId) {
      sellerPoint({
        idMember: sellerId,
        from: range.startDate,
        to: range.endDate
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineData, sellerId, range]);
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="p-5 bg-pic-50 rounded-lg shadow-md w-full h-[350px] flex flex-col justify-center items-center relative">
        {/* button range date */}

        <div className="absolute top-2 right-2">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-pic-900 bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Bars2Icon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-2 py-2">
                  <Menu.Item>
                    {
                      <>
                        <h3 className="mb-1">Filter Point</h3>
                        <Datepicker
                          value={range}
                          onChange={handleRangeChange}
                        />
                      </>
                    }
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <h1 className="uppercase text-2xl font-bold font-poppins text-brown-900 mb-3">
          point
        </h1>
        <div className="flex h-[180px] w-[180px] border-4 border-pic-900 rounded-full justify-center items-center mb-5">
          <h1 className="uppercase text-3xl font-bold font-poppins text-brown-900 mb-0">
            {pointData}
          </h1>
        </div>
        <h3 className="text-sm font-poppins font-medium text-brown-800 flex flex-col gap-2 text-center">
          Total Pembelian bulan {month}{" "}
          <NumericFormat
            className="underline underline-offset-8 font-bold text-base"
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp. "}
          />
        </h3>
      </div>
    </div>
  );
}
