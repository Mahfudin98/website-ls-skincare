import { Inter } from "next/font/google";
import HeaderCustom from "@/components/Header/header";
import FooterCustom from "../components/Footer/footer";
import {
  ShoppingBagIcon,
  ArrowRightCircleIcon,
  StarIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderCustom />

      <main className="container px-4 mx-auto">
        {/* headlie section */}
        <section className="container flex flex-col justify-between p-2 mt-6 mx-auto mb-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-5 text-3xl lg:text-5xl font-bold leading-tight text-brown-900 uppercase">
                Temukan kulit sehatmu dengan rangkaian produk kami
              </h1>
              <p className="mb-6 text-base font-normal text-brown-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis qui quae dicta repellat fuga aliquam mollitia minus nam
                cum sunt?
              </p>
              <button
                type="button"
                className="inline-flex items-center group text-base font-medium text-brown-900 ease-in duration-150 delay-0 hover:bg-[#ffb19d] hover:text-white border-2 border-[#ffb19d] rounded-lg"
              >
                <div className="px-4 py-1.5 uppercase">Shop Product</div>
                <div className="bg-[#ffb19d] group-hover:bg-white group-hover:rounded-r-md ease-in duration-150 delay-0 rounded-l-md h-10 w-10 flex items-center justify-center">
                  <ShoppingBagIcon className="w-6 h-6 group-hover:text-brown-900 text-white ease-in duration-150 delay-0" />
                </div>
              </button>
            </div>
            <div className="w-full lg:w-1/2">
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
        <section className="container p-2 mx-auto mb-16">
          <div className="grid grid-cols-12 gap-6 justify-items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="w-[250px] h-[250px] bg-pic-900 rounded-full"></div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="w-full h-full bg-pic-100 p-6 rounded-3xl border border-brown-300">
                <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3"></div>
                <h3 className="uppercase text-xl font-bold text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                  Skin care
                  <ArrowRightCircleIcon className="h-6 w-6 fill-pic-800 text-brown-800 group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
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
                <h3 className="uppercase text-xl font-bold text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                  Skin care
                  <ArrowRightCircleIcon className="h-6 w-6 fill-pic-800 text-brown-800 group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
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
                <h3 className="uppercase text-xl font-bold text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                  Skin care
                  <ArrowRightCircleIcon className="h-6 w-6 fill-pic-800 text-brown-800 group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
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
        <section className="container p-2 mx-auto mb-12">
          <div className="w-full inline-flex justify-between items-center mb-3">
            <div>
              <h1 className="mb-5 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase">
                Our Popular Product
              </h1>
            </div>
            <div className="hidden lg:block">
              <h3 className="uppercase text-xl font-bold text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                View All
                <ArrowRightCircleIcon className="h-6 w-6 fill-pic-800 text-brown-800 group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
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
                        <button className="px-2.5 py-2 inline-flex items-center bg-pic-500 rounded-l-lg rounded-r-lg hover:rounded-r-none relative after:absolute after:top-0 after:-z-0 after:left-9 after:origin-left after:scale-x-0 after:hover:scale-x-100 after:pr-3 after:rounded-r-lg after:bg-pic-500 after:py-2.5 after:content-['Detail'] after:ease-in-out after:duration-100 after:delay-0 after:text-brown-900 ease-in-out duration-100 delay-0">
                          <EyeIcon className="h-6 w-6 text-brown-900 mr-0.5 bg-pic-500" />
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-pic-900 w-fit uppercase text-xl font-bold text-white rounded-lg shadow-lg -mr-8"
                        >
                          Rp. 180.000
                        </button>
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
                        <button className="px-2.5 py-2 inline-flex items-center bg-pic-500 rounded-l-lg rounded-r-lg hover:rounded-r-none relative after:absolute after:top-0 after:-z-0 after:left-9 after:origin-left after:scale-x-0 after:hover:scale-x-100 after:pr-3 after:rounded-r-lg after:bg-pic-500 after:py-2.5 after:content-['Detail'] after:ease-in-out after:duration-100 after:delay-0 after:text-brown-900 ease-in-out duration-100 delay-0">
                          <EyeIcon className="h-6 w-6 text-brown-900 mr-0.5 bg-pic-500" />
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-pic-900 w-fit uppercase text-xl font-bold text-white rounded-lg shadow-lg -mr-8"
                        >
                          Rp. 180.000
                        </button>
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
                        <button className="px-2.5 py-2 inline-flex items-center bg-pic-500 rounded-l-lg rounded-r-lg hover:rounded-r-none relative after:absolute after:top-0 after:-z-0 after:left-9 after:origin-left after:scale-x-0 after:hover:scale-x-100 after:pr-3 after:rounded-r-lg after:bg-pic-500 after:py-2.5 after:content-['Detail'] after:ease-in-out after:duration-100 after:delay-0 after:text-brown-900 ease-in-out duration-100 delay-0">
                          <EyeIcon className="h-6 w-6 text-brown-900 mr-0.5 bg-pic-500" />
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-pic-900 w-fit uppercase text-xl font-bold text-white rounded-lg shadow-lg -mr-8"
                        >
                          Rp. 180.000
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-12">
              <div className="flex justify-center w-full items-center h-full lg:mt-3">
                <h3 className="uppercase text-xl font-bold text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                  View All
                  <ArrowRightCircleIcon className="h-6 w-6 fill-pic-800 text-brown-800 group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* our seller */}
        <section className="container p-2 mx-auto mb-16">
          <div className="w-full inline-flex justify-between items-center mb-3">
            <div>
              <h1 className="mb-5 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase">
                Our Seller
              </h1>
            </div>
          </div>
          <div className="flex flex-wrapr border border-pic-100 rounded-md shadow-lg relative overflow-hidden">
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
                    <MagnifyingGlassIcon className="h-6 w-6 fill-pic-800 text-brown-800 group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
                  </h3>
                </div>
                <div className="mb-5 px-4">
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-brown-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-brown-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-brown-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pic-500 focus:border-pic-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pic-500 dark:focus:border-pic-500"
                      placeholder="Search Mockups, Logos..."
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
        </section>
      </main>
      <FooterCustom />
    </>
  );
}
