import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChartHorizontal(props: any) {
  const { dataBar } = props;
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 3000,
        easting: "easeInOutQuint",
        from: 0,
        to: 0.5,
        loop: false
      }
    },
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Data pembelian pertahun"
      }
    }
  };

  const labels = dataBar.map((label: any) => {
    return moment(label.date).format("MMMM");
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Pembelian",
        data: dataBar.map((total: any) => {
          return total.total;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };
  return <Bar options={options} data={data} />;
}
