import Layout from "@/components/Layout/layout";
import HeadlineHome from "@/components/Pages/Home/Headline";
import AboutHome from "@/components/Pages/Home/About";
import ProductHome from "@/components/Pages/Home/Product";
import SellerHome from "@/components/Pages/Home/Seller";
import MediaHome from "@/components/Pages/Home/Media";
import Head from "next/head";
import HeadlineAbout from "@/components/Pages/About/headline";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Home </title>
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
      {/* headlie section */}
      <HeadlineHome />
      {/* about */}
      <HeadlineAbout />
      {/* our product */}
      <ProductHome />
      {/* our seller */}
      <SellerHome />
      {/* media */}
      <MediaHome />
    </Layout>
  );
}
