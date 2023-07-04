import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import HeadlineAbout from "@/components/Pages/About/headline";
import BannerAbout from "@/components/Pages/About/benner";
import AboutUs from "@/components/Pages/About/about_us";
import OurBrand from "@/components/Pages/About/our_brand";
export default function About() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - About </title>
      </Head>
      <Breadcrumb title="About" navigate="about" />
      {/* story section */}
      <HeadlineAbout />
      <BannerAbout />
      <hr className="mt-[125px] mb-10" />
      <AboutUs />
      <hr className="my-10" />
      <OurBrand />
    </Layout>
  );
}
