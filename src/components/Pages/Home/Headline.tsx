import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import styles from "./home.module.css";
export default function HeadlineHome() {
  return (
    <section className={`${styles["section-def"]} ${styles["headline"]}`}>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 mb-8 lg:pr-4">
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
              <ShoppingBagIcon className="w-6 h-6 group-hover:text-brown-900 text-white ease-in duration-150 delay-0" />
            </div>
          </button>
        </div>
        <div className="w-full lg:w-1/2 h-[450px] lg:pl-4">
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
  );
}
