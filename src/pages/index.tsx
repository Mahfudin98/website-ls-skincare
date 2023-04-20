import {
  ShoppingBagIcon,
  ArrowRightCircleIcon,
  StarIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      {/* headlie section */}
      <section className={`${styles["section-def"]} ${styles["headline"]}`}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-8">
            <h1 className={styles["h1-headline"]}>
              Temukan kulit sehatmu dengan rangkaian produk kami
            </h1>
            <p className={styles["text-headline"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              qui quae dicta repellat fuga aliquam mollitia minus nam cum sunt?
            </p>
            <button
              type="button"
              className={`${styles["button-headline"]} group`}
            >
              <div className="px-4 py-1.5 uppercase">Shop Product</div>
              <div
                className={`${styles["icon-headline"]} group-hover:bg-white group-hover:rounded-r-md`}
              >
                <ShoppingBagIcon className="w-6 h-6 group-hover:text-brown-900 text-white ease-in duration-150 delay-0" />
              </div>
            </button>
          </div>
          <div className="w-full lg:w-1/2 h-[450px] lg:h-[450px]">
            <Carousel>
              <Image
                height={1280}
                width={1280}
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <Image
                height={1280}
                width={1280}
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <Image
                height={1280}
                width={1280}
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <Image
                height={1280}
                width={1280}
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <Image
                height={1280}
                width={1280}
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>
      </section>
      {/* about */}
      <section className={styles["section-def"]}>
        <div className="grid grid-cols-12 gap-6 justify-items-center">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="w-[250px] h-[250px] bg-pic-900 rounded-full"></div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="w-full h-full bg-pic-100 p-6 rounded-3xl border border-brown-300">
              <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3"></div>
              <h3 className={`${styles["h3-title"]} group`}>
                Skin care
                <ArrowRightCircleIcon
                  className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
                />
              </h3>
              <p className="text-brown-600 text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                iure voluptatem, aliquam nobis esse molestiae!
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="w-full h-full bg-pic-100 p-6 rounded-3xl border border-brown-300">
              <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3"></div>
              <h3 className={`${styles["h3-title"]} group`}>
                Skin care
                <ArrowRightCircleIcon
                  className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
                />
              </h3>
              <p className="text-brown-600 text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                iure voluptatem, aliquam nobis esse molestiae!
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="w-full h-full bg-pic-100 p-6 rounded-3xl border border-brown-300">
              <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3"></div>
              <h3 className={`${styles["h3-title"]} group`}>
                Skin care
                <ArrowRightCircleIcon
                  className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
                />
              </h3>
              <p className="text-brown-600 text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                iure voluptatem, aliquam nobis esse molestiae!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* our product */}
      <section className={styles["section-def"]}>
        <div className="w-full inline-flex justify-between items-center mb-3">
          <div>
            <h1>Our Popular Product</h1>
          </div>
          <div className="hidden lg:block">
            <h3 className={`${styles["h3-title"]} group`}>
              View All
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 px-2 md:px-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="pt-8 px-0 lg:px-8 pb-2 relative">
              <div className="bg-pic-400 rounded-tr-md rounded-tl-[35px] shadow-md rounded-b-xl">
                <div className="">
                  <div className="p-3 bg-white w-fit rounded-full">
                    <Image
                      src="/logo.png"
                      width={350}
                      height={350}
                      alt="Logo"
                      className="w-10 h-10 object-center"
                    />
                  </div>
                  <div className="py-4 px-5 pb-24">
                    <h3 className="uppercase text-xl font-bold mb-3 text-brown-900">
                      New Brightening
                    </h3>
                    <p className="text-brown-600 text-sm font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni iure voluptatem, aliquam nobis esse molestiae!
                    </p>
                  </div>
                  <div className="p-4 absolute -top-1 right-10 ">
                    <Image
                      src="https://lh3.googleusercontent.com/d/119TNv9lB6wn2aXHy94x1xCvAOHFNt76N?authuser=0"
                      width={1080}
                      height={1080}
                      className="w-24 h-auto rotate-[20deg]"
                      alt="Image-1"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-b-xl">
                  <div className="py-4 px-5">
                    <h3 className="uppercase text-xl font-bold mb-3 text-brown-900">
                      New Brightening
                      <span className="block text-xs font-normal text-brown-600">
                        Bright
                      </span>
                    </h3>
                    <div className="inline-flex mb-6">
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 text-brown-600" />
                    </div>
                    <div className="flex justify-between">
                      <button className={styles["button-detail-product"]}>
                        <EyeIcon className="h-6 w-6 text-brown-900 mr-0.5 bg-pic-500" />
                      </button>
                      <h3 className={styles["h3-price"]}>Rp. 180.000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="pt-8 px-0 lg:px-8 pb-2 relative">
              <div className="bg-pic-400 rounded-tr-md rounded-tl-[35px] shadow-md rounded-b-xl">
                <div className="">
                  <div className="p-3 bg-white w-fit rounded-full">
                    <Image
                      src="/logo.png"
                      width={350}
                      height={350}
                      alt="Logo"
                      className="w-10 h-10 object-center"
                    />
                  </div>
                  <div className="py-4 px-5 pb-24">
                    <h3 className="uppercase text-xl font-bold mb-3 text-brown-900">
                      New Brightening
                    </h3>
                    <p className="text-brown-600 text-sm font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni iure voluptatem, aliquam nobis esse molestiae!
                    </p>
                  </div>
                  <div className="p-4 absolute -top-1 right-10 ">
                    <Image
                      src="https://lh3.googleusercontent.com/d/119TNv9lB6wn2aXHy94x1xCvAOHFNt76N?authuser=0"
                      width={1080}
                      height={1080}
                      className="w-24 h-auto rotate-[20deg]"
                      alt="Image-1"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-b-xl">
                  <div className="py-4 px-5">
                    <h3 className="uppercase text-xl font-bold mb-3 text-brown-900">
                      New Brightening
                      <span className="block text-xs font-normal text-brown-600">
                        Bright
                      </span>
                    </h3>
                    <div className="inline-flex mb-6">
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 text-brown-600" />
                    </div>
                    <div className="flex justify-between">
                      <button className={styles["button-detail-product"]}>
                        <EyeIcon className="h-6 w-6 text-brown-900 mr-0.5 bg-pic-500" />
                      </button>
                      <h3 className={styles["h3-price"]}>Rp. 180.000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="pt-8 px-0 lg:px-8 pb-2 relative">
              <div className="bg-pic-400 rounded-tr-md rounded-tl-[35px] shadow-md rounded-b-xl">
                <div className="">
                  <div className="p-3 bg-white w-fit rounded-full">
                    <Image
                      src="/logo.png"
                      width={350}
                      height={350}
                      alt="Logo"
                      className="w-10 h-10 object-center"
                    />
                  </div>
                  <div className="py-4 px-5 pb-24">
                    <h3 className="uppercase text-xl font-bold mb-3 text-brown-900">
                      New Brightening
                    </h3>
                    <p className="text-brown-600 text-sm font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni iure voluptatem, aliquam nobis esse molestiae!
                    </p>
                  </div>
                  <div className="p-4 absolute -top-1 right-10 ">
                    <Image
                      src="https://lh3.googleusercontent.com/d/119TNv9lB6wn2aXHy94x1xCvAOHFNt76N?authuser=0"
                      width={1080}
                      height={1080}
                      className="w-24 h-auto rotate-[20deg]"
                      alt="Image-1"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-b-xl">
                  <div className="py-4 px-5">
                    <h3 className="uppercase text-xl font-bold mb-3 text-brown-900">
                      New Brightening
                      <span className="block text-xs font-normal text-brown-600">
                        Bright
                      </span>
                    </h3>
                    <div className="inline-flex mb-6">
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 fill-yellow-300 text-brown-600" />
                      <StarIcon className="h-6 w-6 text-brown-600" />
                    </div>
                    <div className="flex justify-between">
                      <button className={styles["button-detail-product"]}>
                        <EyeIcon className="h-6 w-6 text-brown-900 mr-0.5 bg-pic-500" />
                      </button>
                      <h3 className={styles["h3-price"]}>Rp. 180.000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <div className="flex justify-center w-full items-center h-full lg:mt-3">
              <h3 className="uppercase text-xl font-bold text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150">
                View All
                <ArrowRightCircleIcon
                  className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
                />
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* our seller */}
      <section className={styles["section-def"]}>
        <div className="w-full inline-flex justify-between items-center mb-3">
          <div>
            <h1>Our Seller</h1>
          </div>
        </div>
        <div className="flex flex-wrap border border-pic-100 rounded-md shadow-lg relative overflow-hidden mb-8">
          <div className="w-full lg:w-1/2">
            <div className="text-center h-full flex items-center justify-center w-full text-5xl font-bold bg-pic-900">
              MAPS
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <div className="grid grid-cols-1">
              <div className="flex justify-center mb-3">
                <h3 className="uppercase text-xl font-bold text-center text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                  Temukan Agen dan Reseller LS Skincare
                  <MagnifyingGlassIcon className="h-6 w-6 text-brown-800 group-hover:ml-1.5 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
                </h3>
              </div>
              <div className="mb-5 px-4">
                <label className="mb-2 text-sm font-medium text-brown-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5 text-brown-500 dark:text-brown-400" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-brown-900 border border-brown-300 rounded-lg bg-brown-50 focus:ring-pic-500 focus:border-pic-500 dark:bg-brown-700 dark:border-brown-600 dark:placeholder-brown-400 dark:text-white dark:focus:ring-pic-500 dark:focus:border-pic-500"
                    placeholder="Nama kota/kabupaten"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-pic-700 hover:bg-pic-800 focus:ring-4 focus:outline-none focus:ring-pic-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pic-600 dark:hover:bg-pic-700 dark:focus:ring-pic-800"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="h-[425px] p-4 relative overflow-y-auto">
                {/* list agen reseller */}
                <div className="group">
                  <div className="px-4 z-10 py-2 border border-pic-100 rounded-t-lg rounded-b-lg group-hover:rounded-b-none ease-out duration-200 delay-75 inline-flex w-full justify-between items-center">
                    <h3 className="uppercase text-lg font-bold text-brown-900">
                      Mahfudin Nawawi
                      <span className="block text-xs font-normal text-brown-600">
                        Reseller
                      </span>
                    </h3>
                    <ChevronDownIcon className="h-6 w-6 text-brown-900" />
                  </div>
                  <div className="px-4 z-0 pt-4 pb-2 -translate-y-2.5 border-b border-l border-r scale-y-0 group-hover:scale-y-100 origin-top ease-out duration-200 delay-75 border-pic-100 rounded-b-lg">
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing join */}
        <div className="py-5">
          <h1 className="mb-10 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase text-center">
            Join us
          </h1>
          <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center container">
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-200 z-30">
              <h1 className="text-brown-500 font-semibold text-xl">End User</h1>
              <div className="text-center py-4 px-7">
                <h1 className="text-brown-700 text-4xl font-black">$199.00</h1>
                <p className="text-brown-500  mt-2">Monthely</p>
              </div>
              <div className="h-px bg-brown-200"></div>
              <div className="text-center mt-3">
                <ul>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
                Buy Now
              </button>
            </div>
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-700 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
              <h1 className="text-brown-800 font-semibold text-xl ">
                Reseller
              </h1>
              <div className="text-center py-4 px-7">
                <h1 className="text-white text-4xl font-black">$399.00</h1>
                <p className="text-white text-opacity-50 mt-2">Monthely</p>
              </div>
              <div className="h-px bg-brown-400"></div>
              <div className="text-center mt-3">
                <ul>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-400 hover:shadow-xl duration-200 hover:bg-brown-800">
                Buy Now
              </button>
            </div>
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-200 z-30">
              <h1 className="text-brown-500 font-semibold text-xl ">
                Enterprise
              </h1>
              <div className="text-center py-4 px-7">
                <h1 className="text-brown-700 text-4xl font-black">$899.00</h1>
                <p className="text-brown-500  mt-2">Monthely</p>
              </div>
              <div className="h-px bg-brown-200"></div>
              <div className="text-center mt-3">
                <ul>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-start text-sm font-light">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* media */}
      <section className={styles["section-def"]}>
        <div className="w-full inline-flex justify-between items-center mb-3">
          <div>
            <h1>Media</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto w-full text-center">
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <h3 className={`${styles["h3-title"]} group`}>
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <h3 className={`${styles["h3-title"]} group`}>
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <h3 className={`${styles["h3-title"]} group`}>
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
