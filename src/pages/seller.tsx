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
      </Head>
      <Breadcrumb title="Seller" navigate="seller" />
      <MapsList />
      <Join />
      <TopAgen />
    </Layout>
  );
}
