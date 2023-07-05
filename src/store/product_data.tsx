import $axios from "@/lib/api";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useProductData = () => {
  const [categories, setCategories] = useState([
    {
      id: Number(),
      code: new String(),
      category: new String(),
      type: new String(),
      product: Number()
    }
  ]);
  const { data: product } = useSWR("/api/product-list-customer", () =>
    $axios
      .get("/api/product-list-customer")
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  const { data: topProduct } = useSWR(`/api/top-product-customer`, () =>
    $axios
      .get(`/api/top-product-customer`)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );
  const csrf = () => $axios.get("/sanctum/csrf-cookie");
  const getCategory = async () => {
    await csrf();
    $axios
      .get(`/api/product-category-customer`)
      .then((res: any) => {
        res.data.data;
        setCategories(res.data.data);
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      });
    return categories;
  };
  return { product, topProduct, categories, getCategory };
};
