import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";

export default function BrandStory() {
  return (
    <section className="container px-4 pt-10 mx-auto mb-5">
      <h1>Brand Story</h1>
      <div>
        <Carousel>
          <div id="slide1" className="relative w-full carousel-item">
            <div className="bg-gradient-to-br from-[#2980b9] to-[#2c3e50] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-center text-white">Sejarah LS Skincare</h1>
              <label
                htmlFor="sejarah"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 duration-100 ease-in group-hover:ml-2 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide2" className="relative w-full carousel-item">
            <div className="bg-gradient-to-br from-[#fd746c] to-[#ff9068] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-center text-white">
                Visi & Misi LS Skincare
              </h1>
              <label
                htmlFor="visi-misi"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 duration-100 ease-in group-hover:ml-2 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide3" className="relative w-full carousel-item">
            <div className="bg-gradient-to-br from-[#c2e59c] to-[#64b3f4] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-center text-white">
                Target Konsumen LS Skincare
              </h1>
              <label
                htmlFor="target"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 duration-100 ease-in group-hover:ml-2 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide4" className="relative w-full carousel-item">
            <div className="bg-gradient-to-br from-[#C02425] to-[#F0CB35] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-center text-white">Produk LS Skincare</h1>
              <label
                htmlFor="produk"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 duration-100 ease-in group-hover:ml-2 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide5" className="relative w-full carousel-item">
            <div className="bg-gradient-to-br from-[#005C97] to-[#363795] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-center text-white">Keunikan LS Skincare</h1>
              <label
                htmlFor="keunikan"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 duration-100 ease-in group-hover:ml-2 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide6" className="relative w-full carousel-item">
            <div className="bg-gradient-to-br from-[#F1F2B5] to-[#135058] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-center text-white">Kesuksesan LS Skincare</h1>
              <label
                htmlFor="kesuksesan"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 duration-100 ease-in group-hover:ml-2 delay-0" />
              </label>
            </div>
          </div>
        </Carousel>
      </div>
      {/* modal sejarah */}
      <input type="checkbox" id="sejarah" className="modal-toggle" />
      <label htmlFor="sejarah" className="cursor-pointer modal">
        <label
          className="relative w-11/12 max-w-5xl modal-box bg-pic-200"
          htmlFor=""
        >
          <h3 className="text-lg font-bold uppercase text-brown-900">
            Sejarah LS Skincare
          </h3>
          <label
            htmlFor="sejarah"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <article className="py-4 leading-relaxed text-justify text-brown-700">
            <p className="mb-2 indent-8">
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
            <p className="mb-2 indent-8">
              Diawal perjalanannya{" "}
              <span className="font-medium underline uppercase cursor-pointer decoration-green-600 text-brown-900">
                Larossa{" "}
                <span className="normal-case">merekrut 2 orang karyawan</span>
              </span>{" "}
              yang bertugas untuk{" "}
              <span className="font-medium underline cursor-pointer decoration-purple-600 text-brown-900">
                packing dan Customer service
              </span>
              , founder pun masih ikut serta turun tangan untuk melakukan
              packing dan melayani customer. Seiring dengan meningkatnya
              penjualan founder memutuskan untuk merekrut tim penjualan dan tim
              packing dengan jumlah 13 orang dan memanfaatkan garasi rumah
              sebagai kantor.
            </p>
            <p className="mb-2 indent-8">
              <span className="font-medium underline cursor-pointer decoration-blue-600 text-brown-900">
                Dipenghujung tahun 2019
              </span>{" "}
              penjualan naik begitu signifikan dan founder memutuskan untuk
              mendirikan CV dengan nama CV. LAROSSA SUKSESTAMA dan berharap
              dengan adanya wadah ini bisa meningkatkan kepercayaan dari
              customer terhadap LAROSSA. Target pasar produk Larossa adalah
              semua orang yang membutuhkan perawatan mulai dari usia 17 tahun.
              Disamping perkembangannya yang begitu pesat, Larossa juga memiliki
              tantangan dan keresahan dalam perijinan BPOM. Sehingga diawal
              tahun 2020 founder dan tim fokus mempersiapkan dan mengurus untuk
              perijinan BPOM sampai di akhir tahun 2020 bersamaan dengan
              bergantinya{" "}
              <span className="font-medium underline cursor-pointer decoration-blue-500 text-brown-900">
                CV LAROSSA SUKSESTAMA
              </span>{" "}
              menjadi{" "}
              <span className="font-medium underline cursor-pointer decoration-blue-500 text-brown-900">
                PT. LS ASTARI SUKSESTAMA
              </span>{" "}
              berhasil meluncurkan 2 produk BPOM sekaligus dengan brand{" "}
              <span className="font-medium underline cursor-pointer decoration-blue-500 text-brown-900">
                SUNROSE dan LS SKINCARE
              </span>
              . Sampai pada saat ini, PT. LS ASTARI SUKSESTAMA mempunyai kurang
              lebih{" "}
              <span className="font-medium underline cursor-pointer decoration-blue-500 text-brown-900">
                80 orang karyawan
              </span>
              .
            </p>
          </article>
        </label>
      </label>
      {/* modal visi misi */}
      <input type="checkbox" id="visi-misi" className="modal-toggle" />
      <label htmlFor="visi-misi" className="cursor-pointer modal">
        <label
          className="relative w-11/12 max-w-5xl modal-box bg-pic-200"
          htmlFor=""
        >
          <h3 className="text-lg font-bold uppercase text-brown-900">
            Visi Misi LS Skincare
          </h3>
          <label
            htmlFor="visi-misi"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <article className="py-4 leading-relaxed text-justify text-brown-700">
            <h3 className="mb-2 text-lg font-semibold text-center uppercase font-poppins text-brown-900">
              Visi
            </h3>
            <p className="text-center">
              Menjadi solusi kecantikan kulit setiap perempuan Indonesia
            </p>
            <h3 className="mb-2 text-lg font-semibold text-center uppercase font-poppins text-brown-900">
              Misi
            </h3>
            <ul className="ml-4 list-disc list-outside">
              <li>
                Fokus dan konsentrasi Memberikan Pelayanan yang berkualitas
                kepada seluruh pelanggan.
              </li>
              <li>
                Menciptakan lingkungan kerja yang mengutamakan Attitude yang
                baik.
              </li>
              <li>
                Membentuk perusahaan yang konsisten dalam menjaga keunggulan di
                bidang kecantikan kulit sehingga mampu menyediakan produk sesuai
                dengan kebutuhan pelanggan.
              </li>
              <li>
                Selalu berinovasi, bertumbuh dan berkembang sesuai dengan Time
                priority.
              </li>
            </ul>
          </article>
        </label>
      </label>
      {/* modal target */}
      <input type="checkbox" id="target" className="modal-toggle" />
      <label htmlFor="target" className="cursor-pointer modal">
        <label
          className="relative w-11/12 max-w-xl modal-box bg-pic-200"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-brown-900">
            Target LS Skincare
          </h3>
          <label
            htmlFor="target"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <article className="py-4 leading-relaxed text-justify text-brown-700">
            <p className="indent-8">
              Target penjualan dari LS SKINCARE yaitu seluruh perempuan
              Indonesia dengan rentang usia dari 17th-50 thn dan yang baru akan
              memakai skincare cocok menggunakan produk ini.
            </p>
          </article>
        </label>
      </label>
      {/* modal produk */}
      <input type="checkbox" id="produk" className="modal-toggle" />
      <label htmlFor="produk" className="cursor-pointer modal">
        <label
          className="relative w-11/12 max-w-5xl modal-box bg-pic-200"
          htmlFor=""
        >
          <h3 className="text-lg font-bold uppercase text-brown-900">
            Produk LS Skincare
          </h3>
          <label
            htmlFor="produk"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <article className="py-4 leading-relaxed text-justify text-brown-700">
            <p className="mb-2 indent-8">
              Produk LS SKINCARE bisa membantu meng-Glowingkan hanya dalam 3
              hari dan semua produknya sudah terverifikasi BPOM aman juga untuk
              ibu hamil, menyusui dan tidak membuat ketrgantungan,ada jaminan
              garansi uang kembali 100%. disetiap pembelian min 1 paket produk
              LS SKINCARE bisa langsung mendapatkan Gratis Pouch kosmetik
              cantik, Gratis Gift menarik, diskon sampai dengan 30% dan Subsidi
              Ongkir. Selain itu juga untuk reseller dan agen nya sudah tersebar
              di seuruh wilayah indonesia.
            </p>
            <ul className="ml-4 list-disc list-outside">
              <li>
                <h3 className="mb-2 text-lg font-semibold uppercase font-poppins text-brown-900">
                  PRODUK AMAN DAN HALAL
                </h3>
                <p>
                  Semua produk LS SKINCARE menggunakan bahan-bahan berkualitas
                  dan tidak bertentangan dengan kaedah-kaedah medis sehingga
                  aman dan terpercaya.
                </p>
              </li>
            </ul>
          </article>
        </label>
      </label>
      {/* modal keunikan */}
      <input type="checkbox" id="keunikan" className="modal-toggle" />
      <label htmlFor="keunikan" className="cursor-pointer modal">
        <label
          className="relative w-11/12 max-w-5xl modal-box bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">Keunikan LS Skincare</h3>
          <label
            htmlFor="keunikan"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <article className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            omnis, saepe facere nesciunt modi ipsa autem obcaecati, alias vel
            facilis commodi, veniam possimus praesentium. Velit maiores libero
            quasi eius praesentium quae animi eos expedita hic vitae fugiat nam
            minima ab, mollitia iste, quia ut natus unde dolore et similique!
            Ex!
          </article>
        </label>
      </label>
      {/* modal kesuksesan */}
      <input type="checkbox" id="kesuksesan" className="modal-toggle" />
      <label htmlFor="kesuksesan" className="cursor-pointer modal">
        <label
          className="relative w-11/12 max-w-2xl modal-box bg-pic-200"
          htmlFor=""
        >
          <h3 className="text-lg font-bold uppercase text-brown-900">
            Kesuksesan LS Skincare
          </h3>
          <label
            htmlFor="kesuksesan"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <article className="py-4 leading-relaxed text-justify text-brown-700">
            <p className="indent-8">
              Pada tahun 2021 LS SKINCARE meraih penghargaan sebagai Top brand
              dan The best produk skincare selain itu juga mendapatkan peringkat
              teratas dalam kategori perawatan kulit di salah satu marketplace
              dan penjualan terbanyak sebesar 60rb paket setiap bulannya di
              seluruh marketplace.
            </p>
          </article>
        </label>
      </label>
    </section>
  );
}
