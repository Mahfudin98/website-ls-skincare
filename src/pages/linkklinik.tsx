import Layout from "@/components/Layout/layout";
import Breadcrumb from "@/components/Widget/breadcrumb";
import { Carousel } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineGlobal, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function LinkKlinik() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Link Klinik </title>
        <meta
          property="og:title"
          content="Temukan Rahasia Kulit Sehat dengan Produk Skincare Terbaik"
        ></meta>
        <meta
          name="description"
          content="Selamat datang di website resmi kami. Temukan solusi perawatan kulit terbaik untuk mencapai kulit sehat dan bercahaya."
        ></meta>
        <meta property="og:url" content="https://pusat.lsskincare.id/"></meta>
      </Head>
      <Breadcrumb
        title="Link LS Aesthetic Klinik"
        navigate="link LS Aesthetic Klinik"
      />
      <section className="w-full mt-4">
        <Carousel>
          <div className="relative flex items-center h-full max-h-[450px] w-full max-w-[768px] justify-center overflow-hidden rounded-lg shadow-md bg-gradient-to-tr from-pic-200 via-brown-100 to-pic-50">
            <Image
              height={1280}
              width={1280}
              src="/klinik3.png"
              alt="image1"
              className="object-cover h-full max-h-[450px] w-full max-w-[768px] md:object-contain"
            />
          </div>
          <div className="relative flex items-center h-full max-h-[450px] w-full max-w-[768px] justify-center overflow-hidden rounded-lg shadow-md bg-gradient-to-tr from-pic-200 via-brown-100 to-pic-50">
            <Image
              height={1280}
              width={1280}
              src="/klinik4.png"
              alt="image1"
              className="object-cover h-full max-h-[450px] w-full max-w-[768px] md:object-contain"
            />
          </div>
          <div className="relative flex items-center h-full max-h-[450px] w-full max-w-[768px] justify-center overflow-hidden rounded-lg shadow-md bg-gradient-to-tr from-pic-200 via-brown-100 to-pic-50">
            <Image
              height={1280}
              width={1280}
              src="/klinik1.png"
              alt="image1"
              className="object-cover h-full max-h-[450px] w-full max-w-[768px] md:object-contain"
            />
          </div>
          <div className="relative flex items-center h-full max-h-[450px] w-full max-w-[768px] justify-center overflow-hidden rounded-lg shadow-md bg-gradient-to-tr from-pic-200 via-brown-100 to-pic-50">
            <Image
              height={1280}
              width={1280}
              src="/klinik2.png"
              alt="image2"
              className="object-cover h-full max-h-[450px] w-full max-w-[768px] md:object-contain"
            />
          </div>
        </Carousel>
      </section>
      <section className="container min-h-[65vh] mx-auto mt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://shope.ee/iogvpfou"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/icons/shopee.svg"
                    className="w-full h-full"
                    width={350}
                    height={350}
                    alt="Shopee"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Shopee Klinik</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://s.lazada.co.id/s.N47NL"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/icons/icons8-lazada-400.svg"
                    className="w-full h-full"
                    width={350}
                    height={350}
                    alt="Lazada"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Lazada Klinik</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/rosmalamila/"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/teteh.png"
                    className="w-full h-full rounded-full"
                    width={350}
                    height={350}
                    alt="Whatsapp"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">IG rosmalamila</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/lsskincareaesthetic/"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/klinik-ig.png"
                    className="w-full h-full rounded-full"
                    width={350}
                    height={350}
                    alt="Whatsapp"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">IG Klinik</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://orderan.lsskincare.id/cs/aesthetic-clinic"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/icons/whatsapp.svg"
                    className="w-full h-full rounded-full"
                    width={350}
                    height={350}
                    alt="Whatsapp"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Whatsapp</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
