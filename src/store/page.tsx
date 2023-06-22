import $axios from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const usePageData = () => {
  const router = useRouter();
  const csrf = () => $axios.get("/sanctum/csrf-cookie");
  const { data: linktree } = useSWR(
    `/api/member-page-view-linktree/${router.query.link_name}`,
    () =>
      $axios
        .get(`/api/member-page-view-linktree/${router.query.link_name}`)
        .then((res) => res.data.data)
        .catch((error) => {
          if (error.response.status !== 409) throw error;
        })
  );
  const { data: landingPage } = useSWR(
    `/api/member-page-view-lp/${router.query.page_name}`,
    () =>
      $axios
        .get(`/api/member-page-view-lp/${router.query.page_name}`)
        .then((res) => res.data.data)
        .catch((error) => {
          if (error.response.status !== 409) throw error;
        })
  );
  return { linktree, landingPage };
};
