import Layout from "@/components/Layout/layout";
import CrauselHeadline from "@/components/Pages/Home/CrauselHeadline";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function LinkFormen() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Link Formen </title>
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
      <Breadcrumb title="Link Formen" navigate="link formen" />
      <section className="w-full mt-4">
        <CrauselHeadline />
      </section>
      <section className="container min-h-[65vh] mx-auto mt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://shopee.co.id/lsskincareformen"
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
                <h1 className="mb-0 lg:text-2xl">Shopee Formen</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://s.lazada.co.id/s.PM6Dw"
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
                <h1 className="mb-0 lg:text-2xl">Lazada Formen</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://orderan.lsstore.id/cs/pesan-formen"
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
                    alt="Whatsapp"
                  />
                </div>
                <h1 className="mb-0 lg:text-2xl">Whatsapp Formen</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
          <a
            href="https://formen.lsskincare.id/"
            className="flex flex-col items-center justify-center group"
          >
            <div className="px-4 py-1.5 bg-pic-200 group-hover:bg-pic-300 group-hover:scale-[1.01] duration-300 delay-75 ease-in-out rounded-xl w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative flex items-center justify-center w-16 h-16 p-2 overflow-hidden border rounded-full">
                  <AiOutlineGlobal className="w-[350px] h-[350px]" />
                </div>
                <h1 className="mb-0 lg:text-2xl">Website Formen</h1>
                <FiExternalLink className="w-8 h-8 pb-1" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
