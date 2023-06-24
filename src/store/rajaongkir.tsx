import $axios from "@/lib/api";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useRajaongkir = () => {
  const { data: kota } = useSWR("/api/kabupaten", () =>
    $axios
      .get("/api/kabupaten")
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );
  return { kota };
};
