import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../Home/home.module.css";
import { Carousel } from "flowbite-react";

export default function Berita() {
  return (
    <>
      <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
        <label htmlFor="berita" className={`${styles["h3-title"]} group`}>
          Berita
          <ArrowRightCircleIcon
            className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
          />
        </label>
      </div>
      <input type="checkbox" id="berita" className="modal-toggle" />
      <label htmlFor="berita" className="cursor-pointer modal z-[99999]">
        <label className="relative modal-box bg-pic-200" htmlFor="">
          <h3 className="text-lg font-bold">Berita</h3>
          <div className="w-full h-52">
            <Carousel>
              <article className="p-4 flex flex-col text-base font-poppins font-medium text-brown-700">
                <h2 className="text-lg font-semibold text-brown-900">
                  Siarnitas.id
                </h2>
                <p className="mb-3">
                  Siarnitas.id – LS Skincare (ELSTM) kembali mendapatkan
                  penghargaan sebagai Top BRAND SKINCARE AWARD WINNER 2021 dari
                  Pusat Prestasi Indonesia di hotel Mercure Gatot subroto,
                  Jakarta pada Jum’at 11/06/2021.
                </p>
                <a
                  href="https://siarnitas.id/brand-lokal-skincare-majalengka-raih-penghargaan-top-brand-skincare-award-winner-2021/"
                  className="px-3 py-1.5 rounded-md bg-brown-600 text-white self-end hover:bg-brown-700"
                >
                  Lanjut Baca
                </a>
              </article>
              <article className="p-4 flex flex-col text-base font-poppins font-medium text-brown-700">
                <h2 className="text-lg font-semibold text-brown-900">
                  Timesindonesia.co.id
                </h2>
                <p className="mb-3">
                  TIMESINDONESIA, MAJALENGKA – LS Skincare (ELSTM) kembali
                  mendapatkan penghargaan sebagai ‘Top Brand Skincare Award
                  Winner 2021’ dari pusat prestasi Indonesia, di Hotel Mercure
                  Gatot subroto, Jakarta.
                </p>
                <a
                  href="https://www.timesindonesia.co.id/read/news/352280/ls-skincare-brand-kecantikan-asal-majalengka-kembali-raih-penghargaan-top-brand-skincare-award-winner-2021"
                  className="px-3 py-1.5 rounded-md bg-brown-600 text-white self-end hover:bg-brown-700"
                >
                  Lanjut Baca
                </a>
              </article>
              <article className="p-4 flex flex-col text-base font-poppins font-medium text-brown-700">
                <h2 className="text-lg font-semibold text-brown-900">
                  Zonabandung.com
                </h2>
                <p className="mb-3">
                  Majalengka, Zonabandung.com,- LS Skincacare (ELSTM) kembali
                  mendapatkan penghargaan sebagai Top BRAND SKINCARE AWARD
                  WINNER 2021 dari Pusat Prestasi Indonesia di hotel Mercure
                  Gatot subroto, Jakarta pada Jum’at 11/06/2021.
                </p>
                <a
                  href="https://zonabandung.com/daerah/5464/ls-skincare-kembali-raih-penghargaan-sebagai-indonesia-top-brand-skincare-award-winner-2021.html"
                  className="px-3 py-1.5 rounded-md bg-brown-600 text-white self-end hover:bg-brown-700"
                >
                  Lanjut Baca
                </a>
              </article>
            </Carousel>
          </div>
        </label>
      </label>
    </>
  );
}
