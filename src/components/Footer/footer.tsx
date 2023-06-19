import styles from "./footer.module.css";
import Image from "next/image";
import {
  RectangleGroupIcon,
  QuestionMarkCircleIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";
import { FaTiktok, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function FooterCustom() {
  const years = new Date().getFullYear();
  return (
    <footer className="bg-pic-900">
      <div className="container p-4 mx-auto">
        {/* head */}
        <div className="flex items-start justify-between px-2 mt-5 lg:mt-0">
          <div>
            <h1 className={styles["logo-text"]}>LS Skincare</h1>
            <Image
              src="/logo.png"
              className={styles["logo-image"]}
              width={350}
              height={350}
              alt="Shopee"
            />
          </div>
          <div>
            <h1 className={styles["market-text"]}>Our Marketplace</h1>
            <div className="inline-flex -space-x-2 w-fit">
              <Image
                src="/icons/shopee.svg"
                className={styles["market-image"]}
                width={350}
                height={350}
                alt="Shopee"
              />
              <Image
                src="/icons/lazada.svg"
                className={styles["market-image"]}
                width={350}
                height={350}
                alt="Shopee"
              />
              <Image
                src="/icons/tiktok.svg"
                className={styles["market-image"]}
                width={350}
                height={350}
                alt="Shopee"
              />
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* center */}
        <div className="relative grid grid-cols-12 gap-6 px-2 mb-5">
          <div className="col-span-6 md:col-span-12 lg:col-span-3">
            <div className="relative mb-5 overflow-hidden cursor-pointer group">
              <h1 className="sticky z-10 text-lg font-semibold text-center text-white duration-150 ease-in delay-75 group-hover:text-brown-900 mb-0">
                Contact Us
              </h1>
              <div className="absolute top-0 left-0 w-full h-full duration-150 ease-in delay-75 translate-y-40 bg-white group-hover:translate-y-0" />
            </div>
            <ul className="">
              <li className="mb-1">
                <div className={`${styles["nav-li"]} group`}>
                  <div className="self-start">
                    <MapPinIcon className="w-5 h-5 mr-1" />
                  </div>
                  <p className="leading-relaxed text-justify">
                    Jl. Desa Tenjolayar No.23, Tenjolayar, Kec. Cigasong,
                    Kabupaten Majalengka, Jawa Barat 45476
                  </p>
                </div>
              </li>
              <li className="mb-1">
                <a href="#" className={`${styles["nav-li"]} group`}>
                  <FaWhatsapp className="w-5 h-5 mr-1 duration-150 ease-in delay-75 grayscale group-hover:grayscale-0" />
                  Costumer Care
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="relative mb-5 overflow-hidden cursor-pointer group">
              <h1 className="sticky z-10 text-lg font-semibold text-center text-white duration-150 ease-in delay-75 group-hover:text-brown-900 mb-0">
                Menu
              </h1>
              <div className="absolute top-0 left-0 w-full h-full duration-150 ease-in delay-75 translate-y-40 bg-white group-hover:translate-y-0" />
            </div>
            <ul className="">
              <li className="mb-1">
                <Link href="/about" className={styles["nav-li"]}>
                  <RectangleGroupIcon className="w-5 h-5 mr-1 " /> About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/product" className={styles["nav-li"]}>
                  <RectangleGroupIcon className="w-5 h-5 mr-1 " /> Our Product
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/seller" className={styles["nav-li"]}>
                  <RectangleGroupIcon className="w-5 h-5 mr-1 " /> Our Seller
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/media" className={styles["nav-li"]}>
                  <RectangleGroupIcon className="w-5 h-5 mr-1 " /> Media
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="relative mb-5 overflow-hidden cursor-pointer group">
              <h1 className="sticky z-10 text-lg font-semibold text-center text-white duration-150 ease-in delay-75 group-hover:text-brown-900 mb-0">
                Social Media
              </h1>
              <div className="absolute top-0 left-0 w-full h-full duration-150 ease-in delay-75 translate-y-40 bg-white group-hover:translate-y-0" />
            </div>
            <ul className="">
              <li className="mb-1">
                <a
                  href="#"
                  className="relative inline-flex items-center group text-sm font-normal text-brown-900 hover:text-white ease-in duration-150 delay-75 after:content-[''] after:bg-white after:w-full after:h-[2px] after:absolute after:-bottom-1 after:left-0-5 after:scale-0 after:hover:scale-100 after:origin-left after:ease-in after:duration-150 after:delay-75"
                >
                  <FaInstagram className="w-5 h-5 mr-1 duration-150 ease-in delay-75 grayscale group-hover:grayscale-0" />
                  Instagram
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="relative inline-flex items-center group text-sm font-normal text-brown-900 hover:text-white ease-in duration-150 delay-75 after:content-[''] after:bg-white after:w-full after:h-[2px] after:absolute after:-bottom-1 after:left-0-5 after:scale-0 after:hover:scale-100 after:origin-left after:ease-in after:duration-150 after:delay-75"
                >
                  <FaFacebook className="w-5 h-5 mr-1 duration-150 ease-in delay-75 grayscale group-hover:grayscale-0" />
                  Facebook
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="relative inline-flex items-center group text-sm font-normal text-brown-900 hover:text-white ease-in duration-150 delay-75 after:content-[''] after:bg-white after:w-full after:h-[2px] after:absolute after:-bottom-1 after:left-0-5 after:scale-0 after:hover:scale-100 after:origin-left after:ease-in after:duration-150 after:delay-75"
                >
                  <FaTiktok className="w-5 h-5 mr-1 duration-150 ease-in delay-75 grayscale group-hover:grayscale-0" />
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="relative mb-5 overflow-hidden cursor-pointer group">
              <h1 className="sticky z-10 text-lg font-semibold text-center text-white duration-150 ease-in delay-75 group-hover:text-brown-900 mb-0">
                Help Desk
              </h1>
              <div className="absolute top-0 left-0 w-full h-full duration-150 ease-in delay-75 translate-y-40 bg-white group-hover:translate-y-0" />
            </div>
            <ul className="">
              <li className="mb-1">
                <a href="#" className={styles["nav-li"]}>
                  <QuestionMarkCircleIcon className="w-5 h-5 mr-1 " /> FAQs
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className={styles["nav-li"]}>
                  <QuestionMarkCircleIcon className="w-5 h-5 mr-1 " /> Terms &
                  Condisions
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className={styles["nav-li"]}>
                  <QuestionMarkCircleIcon className="w-5 h-5 mr-1" /> Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="py-2 text-center bg-pic-800">
        <p className="text-sm font-light text-brown-800">
          © LS Skincare {years}
        </p>
      </div>
    </footer>
  );
}
