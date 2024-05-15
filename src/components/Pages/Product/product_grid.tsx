import LoadingPage from "@/components/Widget/loading";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import styles from "./product.module.css";
import { TbCategory2, TbShoppingCart } from "react-icons/tb";
import { useEffect, useState } from "react";
export default function ProductGrid(props: any) {
  const { product, show, selected } = props;
  const [products, setProducts] = useState([
    {
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
    }
  ]);
  useEffect(() => {
    if (selected.length === 1 && selected[0] === "") {
      setProducts(product);
    } else {
      let filter = product?.filter((obj: any) => {
        let filters =
          obj.category_name === selected.category &&
          obj.category_pay === selected.type;
        return filters;
      });
      setProducts(filter);
    }
  }, [product, selected]);

  return (
    <>
      {show && <LoadingPage show={show} />}
      {!show && (
        <div className="grid grid-cols-12 gap-5">
          {/* products list */}
          {products?.map((product: any) => {
            return (
              <div
                key={product.code_produk}
                className="col-span-12 md:col-span-6 lg:col-span-4 group relative overflow-hidden p-[1px] rounded-xl transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0"
              >
                <div
                  className={`rounded-xl hidden group-hover:block ${styles["animate-gradient"]} w-[250%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-pic-900 via-brown-200/40 to-pic-700 shadow-xl`}
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
                    {/* <a
                      href="https://orderan.lsskincare.id/cs/all-cs-new"
                      className="w-full -translate-y-5 -mb-[50px] delay-100 duration-150 transform ease-in-out origin-top-left scale-y-0 group-hover:translate-y-0 group-hover:mb-0 group-hover:scale-y-100 text-base font-poppins font-medium bg-pic-900 text-white py-1.5 px-4 rounded-xl shadow-inner flex justify-center items-center"
                    >
                      <TbShoppingCart className="w-5 h-5 mr-2" /> Order Now
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
