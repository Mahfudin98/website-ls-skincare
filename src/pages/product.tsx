import Layout from "@/components/layout";
import {
  ArrowRightCircleIcon,
  StarIcon,
  EyeIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "../components/Pages/Home/home.module.css";
export default function Product() {
  return (
    <Layout pageTitle="Product">
      <section className={`${styles["section-def"]}`}>
        <div className="w-full inline-flex justify-between items-center mb-3">
          <div>
            <h1>Our Product</h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 px-2 md:px-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
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
        </div>
      </section>
    </Layout>
  );
}
