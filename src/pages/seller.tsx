import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/Layout/layout";
import MapsList from "@/components/Pages/Seller/maps_list";
import Join from "@/components/Pages/Seller/join";
import TopAgen from "@/components/Pages/Seller/top_agen";
import Head from "next/head";

export default function Seller() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Seller </title>
        <meta
          property="og:title"
          content="TEMUKAN AGEN DAN RESELLER LS SKINCARE"
        ></meta>
        <meta
          name="description"
          content="Jadilah bagian dari tim kami sebagai reseller atau agen produk skincare kami. Dapatkan keuntungan menarik dan jangkau pelanggan di seluruh wilayah Indonesia."
        ></meta>
        <meta
          property="og:url"
          content="https://pusat.lsskincare.id/seller/"
        ></meta>
      </Head>
      <Breadcrumb title="Seller" navigate="seller" />
      <MapsList />
      <Join />
      <TopAgen />
    </Layout>
  );
}
