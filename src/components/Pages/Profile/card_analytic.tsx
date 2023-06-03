import BarChartHorizontal from "@/components/Widget/Chart/bar_chart_horizontal";
import DoughnutChart from "@/components/Widget/Chart/doughnut_chart";
import { LineChart } from "@/components/Widget/Chart/line_chart";
import { useSellerChartData } from "@/store/seller_chart_data";
import { useEffect } from "react";

export default function CardAnalytic(props: any) {
  const { barData, lineData } = props;
  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="p-5 bg-pic-50 rounded-lg shadow-md w-full h-[350px]">
            <BarChartHorizontal dataBar={barData} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="p-5 bg-pic-50 rounded-lg shadow-md w-full h-[350px]">
            <DoughnutChart />
          </div>
        </div>
        <div className="col-span-12">
          <div className="p-5 bg-pic-50 rounded-lg shadow-md w-full h-[350px]">
            <LineChart dataLine={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
}
