import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/layout";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../components/Pages/Home/home.module.css";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Media() {
  return (
    <Layout pageTitle="Media">
      <Breadcrumb title="Media" navigate="media" />
      <section className="container p-2 mx-auto 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto w-full text-center">
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <label
              htmlFor="testimoni"
              className={`${styles["h3-title"]} group`}
            >
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </label>
          </div>
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <label htmlFor="berita" className={`${styles["h3-title"]} group`}>
              Berita
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </label>
          </div>
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <label htmlFor="galeri" className={`${styles["h3-title"]} group`}>
              Galeri
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </label>
          </div>
        </div>
      </section>
      {/* modal */}
      {/* tesimoni */}
      <input type="checkbox" id="testimoni" className="modal-toggle" />
      <label htmlFor="testimoni" className="modal cursor-pointer">
        <label className="modal-box w-11/12 relative bg-pic-700" htmlFor="">
          <h3 className="text-lg font-bold">Tesimoni</h3>
          <div className="grid h-56 grid-cols-3 w-full gap-4 sm:h-64 xl:h-80 2xl:h-full">
            <Carousel indicators={false}>
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
            </Carousel>
            <Carousel indicators={false}>
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
            </Carousel>
            <Carousel indicators={false}>
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
              <Image
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                height={1080}
                width={1080}
                className="w-full"
              />
            </Carousel>
          </div>
        </label>
      </label>
      {/* berita */}
      <input type="checkbox" id="berita" className="modal-toggle" />
      <label htmlFor="berita" className="modal cursor-pointer">
        <label className="modal-box relative bg-pic-700" htmlFor="">
          <h3 className="text-lg font-bold">Berita</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            asperiores accusantium porro quam nemo illo quia voluptate quis
            maxime minima at necessitatibus praesentium ea, ipsam voluptates
            corrupti quae. Magnam, cupiditate.
          </p>
        </label>
      </label>
      {/* galeri */}
      <input type="checkbox" id="galeri" className="modal-toggle" />
      <label htmlFor="galeri" className="modal cursor-pointer">
        <label className="modal-box relative bg-pic-700" htmlFor="">
          <h3 className="text-lg font-bold">Galeri</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            cumque illo fuga atque hic iste quam, corporis itaque porro
            obcaecati at, dicta nulla tenetur saepe vitae incidunt repellat.
            Delectus, omnis.
          </p>
        </label>
      </label>
    </Layout>
  );
}
