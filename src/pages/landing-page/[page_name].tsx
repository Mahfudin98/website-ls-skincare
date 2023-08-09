import Layout from "@/components/Layout/layout";
import Error404 from "@/components/Pages/PageMember/error404";
import { usePageData } from "@/store/page";
import { useProductData } from "@/store/product_data";
import {
  ArrowDownCircleIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function LandingPage() {
  const { landingPage } = usePageData();
  const [isFound, setIsFound] = useState(false);
  const [pages, setPages] = useState({
    title: new String(),
    product_code: new String(),
    description: new String(),
    harga_jual: Number,
    harga_discount: Number
  });
  const [link, setLink] = useState({ title: new String(), link: String() });
  const [product, setProduct] = useState({
    product_name: new String(),
    image: String()
  });

  const imgProduct = pages?.product_code.replace(/ /g, "");

  useEffect(() => {
    let page = landingPage?.page;
    let link = landingPage?.link;
    let product = landingPage?.product;
    if (page != null) {
      setPages(page);
      setLink(link);
      setProduct(product);
      setIsFound(true);
    }
  }, [landingPage?.link, landingPage?.page, landingPage?.product]);

  return (
    <Layout>
      <Head>
        <title> LS Skincare </title>
        <meta
          property="og:title"
          content="Landing page agen LS Skincare"
        ></meta>
        <meta
          name="description"
          content="Jelajahi koleksi produk skincare kami yang menghadirkan solusi efektif untuk perawatan kulit Anda. Temukan keajaiban kulit sehat dengan produk-produk terbaik kami."
        ></meta>
      </Head>
      {!isFound && <Error404 />}
      {isFound && (
        <>
          <section className="container p-2 mx-auto my-5">
            <div className="w-full h-[250px] lg:h-[450px] bg-pic-900 rounded-2xl shadow-sm relative">
              <Carousel slideInterval={5000}>
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                />
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                />
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                />
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                />
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                />
              </Carousel>
              <div className="absolute flex justify-center w-full -bottom-6">
                <div className="flex items-center gap-2 px-4 py-3 bg-pic-100 w-fit rounded-xl">
                  <h2 className="text-base font-semibold text-brown-900 font-poppins">
                    Terdaftar
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full ring-1 ring-pic-900">
                      <Image
                        width={1080}
                        height={1080}
                        className="object-cover w-8 h-8"
                        alt="..."
                        src="/bpom.png"
                      />
                    </div>
                    <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full ring-1 ring-pic-900">
                      <Image
                        width={1080}
                        height={1080}
                        className="object-cover w-8 h-8"
                        alt="..."
                        src="/mui.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full mt-14">
              <h1 className="mb-0 text-4xl text-center">LS Skincare</h1>
              <h2 className="text-base font-normal text-center font-poppins text-brown-800">
                Perfect Your Beauty Care
              </h2>
            </div>
          </section>
          <section className="container p-2 mx-auto my-2.5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-3 text-base font-normal text-center font-poppins text-brown-900">
                {pages?.title}
              </h2>
              <ArrowDownCircleIcon className="mb-3 transition ease-in-out h-14 w-14 text-brown-900 animate-bounce" />
            </div>
            <div className="relative flex flex-wrap items-center w-full mt-20 mb-5 rounded-md shadow-md bg-pic-500 md:mt-0">
              <div className="absolute z-10 flex justify-center w-full -top-20 md:top-0 md:bottom-0 md:h-full">
                <div className="w-[100px] h-[190px] md:h-full md:w-[120px] lg:w-[200px] flex justify-center items-center rounded-md">
                  <Image
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full"
                    alt="..."
                    src={`/${imgProduct}.png`}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="pt-32 pb-8 pl-8 pr-8 md:pl-6 lg:pl-16 md:pr-20 lg:pr-32 md:pt-8 lg:pt-0 md:pb-8 lg:pb-0">
                  <h3 className="text-lg font-bold text-brown-900 font-poppins">
                    {product?.product_name}
                  </h3>
                  <article className="mt-3 mb-3 text-base font-normal font-poppins text-brown-700">
                    {pages?.description != null
                      ? pages.description
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dignissimos odit fugiat dolorum mollitianecessitatibus animi aspernatur ipsam omnis quaerat."}
                  </article>
                </div>
              </div>
              <div className="relative w-full h-full overflow-hidden md:w-1/2 bg-pic-900 rounded-b-md md:rounded-b-none md:rounded-r-md">
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src="/model.png"
                />
                <div className="absolute z-10 flex items-center justify-center w-full h-full top-12 md:top-14 -left-2 lg:top-24 lg:-left-6 2xl:top-28 2xl:-left-8">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-16 lg:w-32 2xl:w-40"
                    alt="..."
                    src={`/${imgProduct}-paket.png`}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="container p-2 mx-auto mb-2.5">
            <div className="relative flex flex-wrap items-center overflow-hidden rounded-lg shadow-md bg-pic-100">
              <div className="w-full md:w-1/2 md:order-last">
                <div className="flex flex-col items-center justify-center p-8">
                  <h2 className="mb-3 text-xl font-semibold uppercase md:text-2xl lg:text-3xl text-brown-900 font-poppins">
                    Special Offer
                  </h2>
                  <p className="mb-3 text-base font-normal text-center md:text-lg lg:text-xl text-brown-700 font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, expedita?
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    <NumericFormat
                      className="mb-2 text-xl font-bold line-through text-brown-400 font-poppins"
                      value={`${pages?.harga_discount}`}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                    />
                    <NumericFormat
                      className="mb-5 text-3xl font-bold text-brown-900 font-poppins"
                      value={`${pages?.harga_jual}`}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                    />
                  </div>
                  <a
                    href={link?.link}
                    className="flex items-center py-1.5 px-3 bg-pic-900 rounded-lg text-base md:text-lg lg:text-xl font-medium text-white shadow-md hover:bg-pic-800 focus:ring-1 focus:ring-white"
                  >
                    Shop Now
                    <ShoppingCartIcon className="w-6 h-6 ml-2" />
                  </a>
                </div>
              </div>
              <div className="w-full p-8 md:w-1/2 bg-pic-900">
                <Image
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="..."
                  src={product?.image}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}
