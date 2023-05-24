import {
  ArrowRightCircleIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import LoadingPage from "@/components/Widget/loading";
import { useProductData } from "@/store/product_data";
import ModalProduct from "../Product/modal_product";

export default function ProductHome() {
  const { topProduct } = useProductData();
  const [show, setShow] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState({
    code_produk: new String(),
    nama_produk: new String(),
    stock: new String(),
    image: new String(),
    harga_agen: new String(),
    harga_reseller: new String(),
    harga_end_user: new String(),
    category_name: new String(),
    category_pay: new String(),
    type: new String()
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(data: any) {
    setIsOpen(true);
    setDetail(data);
  }
  useEffect(() => {
    if (topProduct?.length > 0) {
      setShow(false);
    }
  }, [setShow, topProduct]);

  return (
    <section className={styles["section-def"]}>
      <div className="inline-flex items-center justify-between w-full mb-3">
        <div>
          <h1>Our Popular Product</h1>
        </div>
        <Link href="/product" className="hidden lg:block">
          <h3 className={`${styles["h3-title"]} group`}>
            View All
            <ArrowRightCircleIcon
              className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
            />
          </h3>
        </Link>
      </div>
      <LoadingPage show={show} />
      <div className="grid grid-cols-12 gap-6 px-2 md:px-4">
        {/* products list */}
        {topProduct
          ?.filter((x: any, y: number) => y < 4)
          .map((product: any, index: Key | null | undefined) => {
            return (
              <div
                key={index}
                onClick={() => openModal(product)}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 border">
                  <a href="#">
                    <div className="relative flex items-center justify-center h-[350px] bg-pic-600 overflow-hidden rounded-xl">
                      <Image
                        src={`${product.image}`}
                        width={1080}
                        height={1080}
                        className="object-cover h-full"
                        alt={`${product.nama_produk}`}
                      />
                      <div className="absolute inline-flex items-center p-2 bg-white rounded-lg shadow-md bottom-3 left-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="p-2 mt-1">
                      <h2 className="text-xl font-semibold uppercase text-brown-900 font-poppins">
                        {product.nama_produk}
                      </h2>
                      <p className="mt-1 text-sm font-normal capitalize text-brown-600 font-poppins">
                        {product.category_name}, {product.category_pay}
                      </p>

                      <div className="flex items-end justify-between mt-3">
                        <p className="text-lg font-bold text-pic-900">
                          <NumericFormat
                            value={`${product.harga_end_user}`}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp. "}
                          />
                        </p>

                        <div className="flex items-center space-x-1.5 rounded-lg bg-pic-500 px-4 py-1.5 text-white duration-100 hover:bg-pic-600">
                          <ShoppingCartIcon className="w-4 h-4" />

                          <button className="text-sm">Order Now</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
            );
          })}
        <div className="col-span-12 md:col-span-6 lg:col-span-12">
          <Link
            href="/product"
            className="flex items-center justify-center w-full h-full lg:mt-3"
          >
            <h3 className="inline-flex items-center text-xl font-bold uppercase duration-150 ease-in-out delay-75 cursor-pointer text-brown-900 group hover:text-pic-800">
              View All
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </Link>
        </div>
      </div>
      <ModalProduct
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        detail={detail}
      />
    </section>
  );
}
