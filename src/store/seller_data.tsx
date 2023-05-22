import $axios from "@/lib/api";
import moment from "moment";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useSellerData = () => {
  const year = moment().format("YYYY");
  const month = moment().subtract(1, "months").format("MM");
  const { data: seller } = useSWR("/api/member-list-guest", () =>
    $axios
      .get("/api/member-list-guest")
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  const { data: topAgen } = useSWR(
    `/api/top-agen?year=${year}&month=${month}`,
    () =>
      $axios
        .get(`/api/top-agen?year=${year}&month=${month}`)
        .then((res) => res.data.data)
        .catch((error) => {
          if (error.response.status !== 409) throw error;
        })
  );
  const csrf = () => $axios.get("/sanctum/csrf-cookie");

  return { seller, topAgen };
};
