import { Carousel } from "flowbite-react";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../Home/home.module.css";
export default function Testimoni() {
  return (
    <>
      <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
        <label htmlFor="testimoni" className={`${styles["h3-title"]} group`}>
          Testimoni
          <ArrowRightCircleIcon
            className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
          />
        </label>
      </div>
      <input type="checkbox" id="testimoni" className="modal-toggle" />
      <label htmlFor="testimoni" className="cursor-pointer modal z-[99999]">
        <label className="relative w-11/12 modal-box bg-pic-200" htmlFor="">
          <h3 className="mb-3 text-lg font-bold text-brown-900">Tesimoni</h3>
          <div className="grid w-full h-56 sm:h-64 xl:h-80">
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
    </>
  );
}
