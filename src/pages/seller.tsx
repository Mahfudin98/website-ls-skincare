import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/layout";
import MapsList from "@/components/Pages/Seller/maps_list";
import Join from "@/components/Pages/Seller/join";
import TopAgen from "@/components/Pages/Seller/top_agen";

export default function Seller() {
  return (
    <Layout pageTitle="Seller">
      <Breadcrumb title="Seller" navigate="seller" />
      <MapsList />
      <Join />
      <TopAgen />
    </Layout>
  );
}
