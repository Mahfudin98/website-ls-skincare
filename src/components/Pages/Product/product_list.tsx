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
        <div className="grid gap-5">
          {/* products list */}
          {products?.map((product: any) => {
            return (
              <div
                key={product.code_produk}
                className="group relative overflow-hidden p-[1px] rounded-xl"
              >
                <div
                  className={`rounded-xl hidden group-hover:block ${styles["animate-gradient"]} w-[250%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-pic-900 via-brown-200/40 to-pic-700 shadow-xl`}
                />
                <div className="relative z-10 flex w-full">
                  <div className="relative overflow-hidden w-[35%] rounded-l-xl">
                    <Image
                      src={product.image}
                      width={1080}
                      height={1080}
                      alt="..."
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full p-4 bg-white rounded-r-xl border-brown-600">
                    <div className="flex flex-col items-start w-full h-1/3">
                      <h2 className="mb-1 text-xl font-bold capitalize font-poppins text-brown-900">
                        {product.nama_produk}
                      </h2>
                      <p className="flex items-center text-base font-medium capitalize font-poppins text-brown-600">
                        <TbCategory2 className="w-4 h-4 mr-2" />
                        {product.category_name}
                      </p>
                    </div>
                    <div className="flex items-center w-full h-1/3">
                      <h2 className="text-3xl font-bold font-poppins text-brown-900">
                        <NumericFormat
                          value={`${product.harga_end_user}`}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp. "}
                        />
                      </h2>
                    </div>
                    <div className="flex items-end w-full h-1/3">
                      {/* <a
                        href={`https://lsskincare.orderonline.id/${product.nama_produk
                          .replaceAll(" ", "-")
                          .toLowerCase()}`}
                        className="flex items-center justify-center p-4 mt-3 text-base font-medium text-white shadow-inner w-fit font-poppins bg-pic-900 rounded-xl"
                      >
                        <TbShoppingCart className="w-5 h-5 mr-2" /> Order Now
                      </a> */}
                      <a
                        href="https://orderan.lsstore.id/cs/all-cs-new"
                        className="flex items-center justify-center p-4 mt-3 text-base font-medium text-white shadow-inner w-fit font-poppins bg-pic-900 rounded-xl"
                      >
                        <TbShoppingCart className="w-5 h-5 mr-2" /> Order Now
                      </a>
                    </div>
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
