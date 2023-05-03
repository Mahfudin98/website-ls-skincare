import Layout from "@/components/layout";
import {
  ArrowRightCircleIcon,
  StarIcon,
  EyeIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "../components/Pages/Home/home.module.css";
import Breadcrumb from "@/components/Widget/breadcrumb";
import { useEffect, useState, Key } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import LoadingPage from "@/components/Widget/loading";
export default function Product() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api-report.lsskincare.id/api/product-list-customer`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then((response) => {
        if (response.data.data.length > 0) {
          setShow(false);
        }
        return setProducts(response.data.data);
      });
  }, [setProducts, setShow]);
  return (
    <Layout pageTitle="Product">
      <Breadcrumb title="Product" navigate="product" />
      <section className={`${styles["section-def"]}`}>
        <LoadingPage show={show} />
        <div className="grid grid-cols-12 gap-6 px-2 md:px-6">
          {/* products list */}
          {products.map(
            (product: {
              code_produk: Key | null | undefined;
              nama_produk: String;
              stock: String;
              image: String;
              harga_agen: String;
              harga_reseller: String;
              harga_end_user: String;
              category_name: String;
              category_pay: String;
              type: String;
            }) => {
              return (
                <div
                  key={product.code_produk}
                  className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3"
                >
                  <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                      <div className="relative flex items-end overflow-hidden rounded-xl">
                        <Image
                          src={`${product.image}`}
                          width={1080}
                          height={1080}
                          className="object-cover w-full bg-pic-600"
                          alt={`${product.nama_produk}`}
                        />
                        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-slate-400">
                            4.9
                          </span>
                        </div>
                      </div>

                      <div className="mt-1 p-2">
                        <h2 className="text-brown-900 font-poppins font-semibold text-xl uppercase">
                          {product.nama_produk}
                        </h2>
                        <p className="mt-1 text-sm text-brown-600 font-poppins font-normal capitalize">
                          {product.category_name}, {product.category_pay}
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                          <p className="text-lg font-bold text-pic-900">
                            <NumericFormat
                              value={`${product.harga_end_user}`}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"Rp. "}
                            />
                          </p>

                          <div className="flex items-center space-x-1.5 rounded-lg bg-pic-500 px-4 py-1.5 text-white duration-100 hover:bg-pic-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                              />
                            </svg>

                            <button className="text-sm">Order Now</button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              );
            }
          )}
        </div>
      </section>
    </Layout>
  );
}
