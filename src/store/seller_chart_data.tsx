import $axios from "@/lib/api";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useSellerChartData = () => {
  const [barData, setBarData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const csrf = () => $axios.get("/sanctum/csrf-cookie");
  const sellerBar = async ({
    idMember,
    year
  }: {
    idMember: any;
    year: any;
  }) => {
    await csrf();
    $axios
      .get(`/api/owner-bar-data-member-qr/${idMember}?year=${year}`)
      .then((res: any) => {
        res.data.data;
        setBarData(res.data.data);
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      });

    return barData;
  };

  const sellerLine = async ({
    idMember,
    year,
    month
  }: {
    idMember: any;
    year: any;
    month: any;
  }) => {
    await csrf();
    $axios
      .get(
        `/api/owner-line-data-member-qr/${idMember}?year=${year}&month=${month}`
      )
      .then((res: any) => {
        res.data.data;
        setLineData(res.data.data);
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      });

    return lineData;
  };

  return { sellerBar, barData, sellerLine, lineData };
};
