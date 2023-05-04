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
            <h2 className="text-3xl font-semibold text-white uppercase font-poppins group-hover:text-brown-800">
              About Us
            </h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-full h-full p-6 border bg-pic-100 rounded-3xl group-hover:bg-pic-300 border-brown-300">
            <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3 text-white group-hover:bg-white group-hover:text-brown-900 flex justify-center items-center">
              <BookOpenIcon className="w-16 h-16" />
            </div>
            <h3 className={`${styles["h3-title"]} group`}>
              Brand Story
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
            <p className="text-sm font-normal leading-snug text-justify text-brown-600 line-clamp-4 indent-6">
              <span className="font-medium underline cursor-pointer text-brown-900 decoration-blue-600">
                PT. LS ASTARI SUKSESTAMA
              </span>{" "}
              didirikan berawal dari kebangkrutan founder dengan utang mencapai
              1M,{" "}
              <span className="font-medium underline cursor-pointer decoration-blue-500 text-brown-900">
                Aceng Sunanto
              </span>{" "}
              dan{" "}
              <span className="font-medium underline cursor-pointer decoration-pic-900 text-brown-900">
                Mila Rosmala Rosa
              </span>{" "}
              sebagai sepasang suami istri yang dulu terbiasa dengan gaya hidup
              mewah dengan sangat terpaksa harus menjalani kehidupan sampai pada
              titik terendah. Karena hobby dari founder yang selalu ingin
              merawat diri tetapi pada saat itu terbentur dengan keadaan yang
              sangat sulit maka Mila sebagai seorang istri mencoba mencari
              peluang dengan berjualan skincare secara online yang diperoleh
              dari distributor dengan modal 3 juta. Maka dengan berbekal
              keuletan dan kerja keras yang dilakukan bersama – sama, sepasang
              suami istri ini berhasil bekerjasama dengan salah satu pabrik
              skincare dan menciptakan brand sendiri dengan nama{" "}
              <span className="font-medium underline uppercase cursor-pointer decoration-green-600 text-brown-900">
                Larossa <span className="normal-case">pada tahun 2019</span>
              </span>
              .
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-full h-full p-6 border bg-pic-100 rounded-3xl group-hover:bg-pic-300 border-brown-300">
            <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3 text-white group-hover:bg-white group-hover:text-brown-900 flex justify-center items-center">
              <ClipboardDocumentListIcon className="w-16 h-16" />
            </div>
            <h3 className={`${styles["h3-title"]} group`}>
              All Brand
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
            <p className="text-sm font-normal text-brown-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              iure voluptatem, aliquam nobis esse molestiae!
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 group lg:col-span-3">
          <div className="w-full h-full p-6 border bg-pic-100 rounded-3xl group-hover:bg-pic-300 border-brown-300">
            <div className="w-[90px] h-[90px] bg-brown-900 rounded-full mb-3 text-white group-hover:bg-white group-hover:text-brown-900 flex justify-center items-center">
              <HomeModernIcon className="w-16 h-16" />
            </div>
            <h3 className={`${styles["h3-title"]} group`}>
              LS Aesthetic Clinic
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
            <p className="text-sm font-normal text-brown-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              iure voluptatem, aliquam nobis esse molestiae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
