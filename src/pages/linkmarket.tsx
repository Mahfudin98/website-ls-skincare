import Layout from "@/components/Layout/layout";
import CrauselHeadline from "@/components/Pages/Home/CrauselHeadline";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Head from "next/head";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function LinkMarket() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Linktree </title>
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
      <Breadcrumb title="Linktree" navigate="linktree" />
      <section className="w-full mt-4">
        <CrauselHeadline />
      </section>
      <section className="container min-h-[65vh] mx-auto mt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://shope.ee/6pbyKRozrf"
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
                <h1 className="mb-0 lg:text-2xl">Shopee</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://www.lazada.co.id/shop/ls-skincare-offial-pusat/"
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
                    alt="Shopee"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Lazada</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://orderan.lsskincare.id/cs/all-cs-new"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/icons/whatsapp.svg"
                    className="w-full h-full"
                    width={350}
                    height={350}
                    alt="Shopee"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Whatsapp</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://orderan.lsskincare.id/cs/join-reseller-new"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/icons/whatsapp.svg"
                    className="w-full h-full"
                    width={350}
                    height={350}
                    alt="Shopee"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Join Reseller</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://orderan.lsskincare.id/cs/join-agen"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <Image
                    src="/icons/whatsapp.svg"
                    className="w-full h-full"
                    width={350}
                    height={350}
                    alt="Shopee"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Join Agen</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
