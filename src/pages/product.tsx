import Layout from "@/components/layout";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Head from "next/head";
import ProductList from "@/components/Pages/Product/product_list";
export default function Product() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Product </title>
      </Head>
      <Breadcrumb title="Product" navigate="product" />
      <ProductList />
    </Layout>
  );
}
