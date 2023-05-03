import {
  ArrowRightCircleIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  HomeModernIcon
} from "@heroicons/react/24/outline";
import styles from "./home.module.css";

export default function AboutHome() {
  return (
    <section className={styles["section-def"]}>
      <div className="grid grid-cols-12 gap-6 justify-items-center">
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-[250px] h-[250px] bg-pic-900 group-hover:bg-pic-600 rounded-full flex justify-center items-center">
            <h2 className="text-white uppercase text-3xl font-semibold font-poppins group-hover:text-brown-800">
              About Us
            </h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-full h-full bg-pic-100 p-6 rounded-3xl group-hover:bg-pic-300 border border-brown-300">
            <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3 text-white group-hover:bg-white group-hover:text-brown-900 flex justify-center items-center">
              <BookOpenIcon className="h-16 w-16" />
            </div>
            <h3 className={`${styles["h3-title"]} group`}>
              Brand Story
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
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-full h-full bg-pic-100 p-6 rounded-3xl group-hover:bg-pic-300 border border-brown-300">
            <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3 text-white group-hover:bg-white group-hover:text-brown-900 flex justify-center items-center">
              <ClipboardDocumentListIcon className="h-16 w-16" />
            </div>
            <h3 className={`${styles["h3-title"]} group`}>
              All Brand
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
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-full h-full bg-pic-100 p-6 rounded-3xl group-hover:bg-pic-300 border border-brown-300">
            <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3 text-white group-hover:bg-white group-hover:text-brown-900 flex justify-center items-center">
              <HomeModernIcon className="h-16 w-16" />
            </div>
            <h3 className={`${styles["h3-title"]} group`}>
              LS Aesthetic Clinic
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
  );
}
