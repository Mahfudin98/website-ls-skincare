import Layout from "@/components/Layout/layout";
import CardLayout from "@/components/Pages/Profile/card_layout";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Head from "next/head";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Profile</title>
        <meta
          property="og:title"
          content="Profile agen dan reseller LS Skincare"
        ></meta>
      </Head>
      <Breadcrumb title="Profile" navigate="profile" />
      <CardLayout />
    </Layout>
  );
}
