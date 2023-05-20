import Layout from "@/components/layout";
import HeadlineHome from "@/components/Pages/Home/Headline";
import AboutHome from "@/components/Pages/Home/About";
import ProductHome from "@/components/Pages/Home/Product";
import SellerHome from "@/components/Pages/Home/Seller";
import MediaHome from "@/components/Pages/Home/Media";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Home </title>
      </Head>
      {/* headlie section */}
      <HeadlineHome />
      {/* about */}
      <AboutHome />
      {/* our product */}
      <ProductHome />
      {/* our seller */}
      <SellerHome />
      {/* media */}
      <MediaHome />
    </Layout>
  );
}
