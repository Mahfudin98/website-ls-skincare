import BarChartHorizontal from "@/components/Widget/Chart/bar_chart_horizontal";
import { LineChart } from "@/components/Widget/Chart/line_chart";
import CardPoint from "./card_point";

export default function CardAnalytic(props: any) {
  const { barData, lineData, month, sellerId } = props;
  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="p-5 bg-pic-50 rounded-lg shadow-md w-full h-[350px]">
            <BarChartHorizontal dataBar={barData} />
          </div>
        </div>
        <CardPoint month={month} lineData={lineData} sellerId={sellerId} />
        <div className="col-span-12">
          <div className="p-5 bg-pic-50 rounded-lg shadow-md w-full h-[350px]">
            <LineChart dataLine={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
}
