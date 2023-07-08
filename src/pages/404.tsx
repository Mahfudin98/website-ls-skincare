import Layout from "@/components/Layout/layout";
import Head from "next/head";
import Error404 from "@/components/Pages/PageMember/error404";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>LS - Skicare | Linktee</title>
        <meta property="og:title" content="Halaman tidak ditemukan"></meta>
      </Head>
      <Error404 />
    </Layout>
  );
}
