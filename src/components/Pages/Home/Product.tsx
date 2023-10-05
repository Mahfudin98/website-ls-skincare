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
import stylesProd from "../Product/product.module.css";
import { TbCategory2, TbShoppingCart } from "react-icons/tb";

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
                key={product.code_produk}
                className="col-span-12 md:col-span-6 lg:col-span-3 group relative overflow-hidden p-[1px] shadow-sm rounded-xl transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0"
              >
                <div
                  className={`rounded-xl hidden group-hover:block ${stylesProd["animate-gradient"]} w-[250%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-pic-900 via-brown-200/40 to-pic-700 shadow-xl`}
                />
                <div className="relative z-10 w-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={product.image}
                      width={1080}
                      height={1080}
                      alt="..."
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white border-t rounded-b-xl border-brown-600">
                    <h2 className="mb-1 text-lg font-bold uppercase font-poppins text-brown-900">
                      {product.nama_produk}
                    </h2>
                    <p className="flex items-center mb-5 text-sm font-medium capitalize font-poppins text-brown-600">
                      <TbCategory2 className="w-4 h-4 mr-2" />
                      {product.category_name}
                    </p>
                    <h2 className="mb-3 text-lg font-bold font-poppins text-brown-900">
                      <NumericFormat
                        value={`${product.harga_end_user}`}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rp. "}
                      />
                    </h2>
                    <a
                      href={`https://lsskincare.orderonline.id/${product.nama_produk
                        .replaceAll(" ", "-")
                        .toLowerCase()}`}
                      className="w-full -translate-y-5 -mb-[50px] delay-100 duration-150 transform ease-in-out origin-top-left scale-y-0 group-hover:translate-y-0 group-hover:mb-0 group-hover:scale-y-100 text-base font-poppins font-medium bg-pic-900 text-white py-1.5 px-4 rounded-xl shadow-inner flex justify-center items-center"
                    >
                      <TbShoppingCart className="w-5 h-5 mr-2" /> Order Now
                    </a>
                  </div>
                </div>
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
