import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../Home/home.module.css";
import Image from "next/image";
export default function Galeri() {
  return (
    <>
      <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
        <label htmlFor="galeri" className={`${styles["h3-title"]} group`}>
          Galeri
          <ArrowRightCircleIcon
            className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
          />
        </label>
      </div>
      <input type="checkbox" id="galeri" className="modal-toggle" />
      <label htmlFor="galeri" className="cursor-pointer modal z-[99999]">
        <label className="relative max-w-5xl modal-box bg-pic-200" htmlFor="">
          <h3 className="text-lg font-bold text-brown-900">Galeri</h3>
          <hr className="my-3 border border-white" />
          <div className="grid grid-cols-2 gap-2 py-3 mt-3 lg:mt-0 md:grid-cols-4">
            <h2 className="h-16 text-xl font-semibold md:h-32 text-brown-900 md:col-start-4 md:row-start-2 md:flex">
              <span className="self-center md:self-end">LS Skincare</span>
            </h2>
            <div className="h-16 text-sm font-semibold md:text-lg md:h-32 text-brown-900 md:col-start-2 md:row-start-2 md:flex">
              <span className="self-center md:self-end">@lsskincarepusat</span>
            </div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/d/1Ix5Cwsnpl_Q1KfiArrUSrKT7G8IREfDO?authuser=0"
                height={720}
                width={1280}
                alt="image1"
                className="object-cover h-32 duration-300 ease-in-out delay-75 hover:scale-105"
              />
            </div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden md:col-start-3">
              <Image
                src="https://lh3.googleusercontent.com/d/15BsxMzDJGQSFfejd1eJ_846Itn0SWY1s?authuser=0"
                height={720}
                width={1280}
                alt="image1"
                className="object-cover h-32 duration-300 ease-in-out delay-75 hover:scale-105"
              />
            </div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/d/1B4m8J7CblwSkHx1yVyrpPSsrIKGdrcJg?authuser=0"
                height={720}
                width={1280}
                alt="image1"
                className="object-cover h-32 duration-300 ease-in-out delay-75 hover:scale-105"
              />
            </div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden"></div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden"></div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden md:col-start-2"></div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden md:col-start-4"></div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden"></div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden md:col-start-3"></div>
            <div className="h-32 w-full bg-pic-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg relative overflow-hidden md:col-start-3"></div>
          </div>
        </label>
      </label>
    </>
  );
}
