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
        <meta
          property="og:title"
          content="LS Skincare adalah sebuah brand skincare yang berasal dari Majalengka, Indonesia. Brand ini telah menjadikan dirinya sebagai salah satu pemimpin pasar dalam industri perawatan kulit dengan produk-produk berkualitas tinggi. Misi utama LS Skincare adalah memberikan solusi efektif dan inovatif bagi perawatan kulit yang aman dan terpercaya bagi semua jenis kulit."
        ></meta>
        <meta
          name="description"
          content="Kami adalah brand skincare yang berkomitmen untuk memberikan produk berkualitas tinggi dan aman bagi perawatan kulit. Temukan kisah di balik kesuksesan kami."
        ></meta>
        <meta
          property="og:url"
          content="https://pusat.lsskincare.id/about/"
        ></meta>
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
