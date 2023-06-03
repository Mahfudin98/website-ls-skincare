import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function LineChart(props: any) {
  const { dataLine } = props;
  const options = {
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
        text: "Data pembelian perbulan"
      },
      scales: {
        x: {
          ticks: {
            font: {
              family: "Poppins",
              size: 10,
              weight: "semibold",
              lineHeight: 1.2
            },
            color: "#64748b"
          },
          grid: {
            display: true
          }
        },
        y: {
          ticks: {
            font: {
              family: "Poppins",
              size: 10,
              weight: "semibold",
              lineHeight: 1.2
            },
            color: "#64748b"
          },
          grid: {
            color: "#64748b",
            borderDash: [2, 2],
            zeroLineBorderDash: [2, 2],
            drawBorder: false,
            display: true
          }
        }
      }
    }
  };

  const labels = dataLine.map((label: any) => {
    return moment(label.date).format("DD");
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Pembelian",
        data: dataLine.map((total: any) => {
          return total.total;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };
  return <Line options={options} data={data} />;
}
