import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/layout";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../components/Pages/Home/home.module.css";
import Galeri from "@/components/Pages/Media/galeri";
import Berita from "@/components/Pages/Media/berita";
import Testimoni from "@/components/Pages/Media/testimoni";
import Head from "next/head";

export default function Media() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Media </title>
      </Head>
      <Breadcrumb title="Media" navigate="media" />
      <section className="container p-2 mx-auto 2xl:my-12">
        <div className="grid w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-3">
          <Testimoni />
          <Berita />
          <Galeri />
        </div>
      </section>
    </Layout>
  );
}
