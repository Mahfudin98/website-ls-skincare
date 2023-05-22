import LoadingPage from "@/components/Widget/loading";
import { useProductData } from "@/store/product_data";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import styles from "@/components/Pages/Home/home.module.css";

export default function ProductList() {
  const { product } = useProductData();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (product?.length > 0) {
      setShow(false);
    }
  }, [product, setShow]);
  return (
    <section className={`${styles["section-def"]}`}>
      <LoadingPage show={show} />
      <div className="grid grid-cols-12 gap-6 px-2 md:px-6">
        {/* products list */}
        {product?.map((product: any) => {
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

                        <button className="text-sm">Order Now</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
