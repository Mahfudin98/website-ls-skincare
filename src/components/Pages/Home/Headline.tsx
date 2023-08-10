import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import styles from "./home.module.css";
import { usePageData } from "@/store/page";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function HeadlineHome() {
  const { imageHead, headlineImage } = usePageData();
  const [show, setShow] = useState(true);
  useEffect(() => {
    headlineImage().then(() => setShow(false));
    imageHead;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`${styles["section-def"]} ${styles["headline"]}`}>
      <div className="flex flex-wrap">
        <div className="w-full mb-8 lg:w-1/2 lg:pr-4">
          <h1 className={styles["h1-headline"]}>
            Temukan kulit sehatmu dengan rangkaian produk kami
          </h1>
          <p className={styles["text-headline"]}>
            Temukan Kulit Sehatmu dengan Rangkaian Produk Kami: Keajaiban
            Perawatan Kulit dalam Setiap Tetes, untuk hasil yang memukau dan
            percaya diri yang memancar.
          </p>
          <button
            type="button"
            className={`${styles["button-headline"]} group`}
          >
            <div className="px-4 py-1.5 uppercase">Shop Product</div>
            <div
              className={`${styles["icon-headline"]} group-hover:bg-white group-hover:rounded-r-md`}
            >
              <ShoppingBagIcon className="w-6 h-6 text-white duration-150 ease-in group-hover:text-brown-900 delay-0" />
            </div>
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <Carousel>
            {imageHead?.map((image: any, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center h-full max-h-[450px] w-full max-w-[768px] justify-center overflow-hidden rounded-lg shadow-md bg-gradient-to-tr from-pic-200 via-brown-100 to-pic-50"
                >
                  {show && (
                    <AiOutlineLoading3Quarters className="w-8 h-8 text-pic-900 animate-spin" />
                  )}
                  {!show && (
                    <Image
                      height={1280}
                      width={1280}
                      src={image.image}
                      alt={image.alt}
                      className="object-cover h-full max-h-[450px] w-full max-w-[768px] md:object-contain"
                    />
                  )}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
