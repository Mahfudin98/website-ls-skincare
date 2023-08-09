import $axios from "@/lib/api";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useSellerData = () => {
  const router = useRouter();
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

  const { data: sellerDetail } = useSWR(
    `/api/owner-member-detail-qr/${router.query.username}`,
    () => {
      if (router.query.username) {
        $axios
          .get(`/api/owner-member-detail-qr/${router.query.username}`)
          .then((res) => res.data.data)
          .catch((error) => {
            if (error.response.status !== 409) throw error;
          });
      }
    }
  );
  return { seller, topAgen, sellerDetail };
};
