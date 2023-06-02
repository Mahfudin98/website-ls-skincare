import Layout from "@/components/Layout/layout";
import CardLayout from "@/components/Pages/Profile/card_layout";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Head from "next/head";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Profile</title>
      </Head>
      <Breadcrumb title="Profile" navigate="profile" />
      <CardLayout />
    </Layout>
  );
}
