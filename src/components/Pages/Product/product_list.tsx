import LoadingPage from "@/components/Widget/loading";
import { useProductData } from "@/store/product_data";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  HomeIcon,
  ShoppingCartIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import styles from "@/components/Pages/Home/home.module.css";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import ModalProduct from "./modal_product";

export default function ProductList() {
  const { product } = useProductData();
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
    if (product?.length > 0) {
      setShow(false);
    }
  }, [product, setShow]);
  return (
    <section className={`${styles["section-def"]}`}>
      <LoadingPage show={show} />
      <div className="grid grid-cols-12 gap-6">
        {/* products list */}
        {product?.map((product: any) => {
          return (
            <div
              key={product.code_produk}
              onClick={() => openModal(product)}
              className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3"
            >
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 border">
                <a href="#">
                  <div className="relative flex overflow-hidden rounded-xl h-[350px] bg-pic-600 justify-center items-center">
                    <Image
                      src={`${product.image}`}
                      width={1080}
                      height={1080}
                      className="object-cover h-full"
                      alt={`${product.nama_produk}`}
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <StarIcon className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm text-slate-400">4.9</span>
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
                        <ShoppingCartIcon className="h-4 w-4" />

                        <a
                          href="https://orderan.lsstore.id/cs/all-cs-new"
                          className="text-sm"
                        >
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          );
        })}
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
