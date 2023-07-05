import { BiHistory, BiTargetLock, BiBasket, BiParty } from "react-icons/bi";
import { GiHumanTarget } from "react-icons/gi";
export default function AboutUs() {
  return (
    <section className="container mx-auto mb-5">
      <h1 className="text-center w-full capitalize">About Us</h1>
      <div className="flex w-full justify-center items-center">
        <div className="relative flex-wrap flex p-0 md:p-5 lg:p-10 h-fit">
          <div className="border-2 absolute border-opacity-20 border-brown-900 h-full left-3 md:left-[50%]"></div>
          {/* sejarah */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 hidden md:flex md:w-6/12 lg:w-5/12"></div>
            <div className="z-20 mr-2 md:ml-2 lg:mr-0 lg:ml-0 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
              <BiHistory className="w-5 h-5 text-pic-800 dark:text-pic-300" />
            </div>
            <div className="order-1 bg-brown-100 rounded-lg shadow-xl w-full md:w-6/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-brown-800 text-xl">
                Sejarah LS Skincare
              </h3>
              <article className="text-sm leading-snug tracking-wide text-brown-900 text-opacity-100">
                <p>
                  PT. LS ASTARI SUKSESTAMA, awalnya berjuang dari kebangkrutan,
                  berkembang menjadi sukses dengan kisah perjalanan sepasang
                  suami istri yang menciptakan brand LAROSSA pada tahun 2019.
                  Dengan kerja keras dan keuletan, mereka berhasil meluncurkan
                  produk skincare dengan merek SUNROSE dan LS SKINCARE yang
                  telah terdaftar di BPOM. Saat ini, PT. LS ASTARI SUKSESTAMA
                  telah menjadi perusahaan dengan lebih dari 80 karyawan yang
                  berdedikasi.
                </p>
              </article>
            </div>
          </div>
          {/* visi misi */}
          <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 hidden md:flex md:w-6/12 lg:w-5/12"></div>
            <div className="z-20 mr-2 md:ml-2 lg:mr-0 lg:ml-0 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
              <BiTargetLock className="w-5 h-5 text-pic-800 dark:text-pic-300" />
            </div>
            <div className="order-1 bg-pic-700 rounded-lg shadow-xl w-full md:w-6/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                Visi Misi LS Skincare
              </h3>
              <article className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                <h3 className="text-center font-semibold mb-3 text-base">
                  VISI
                </h3>
                <p className="mb-3 text-center">
                  Menjadi solusi kecantikan kulit setiap perempuan Indonesia.
                </p>
                <h3 className="text-center font-semibold mb-3 text-base">
                  MISI
                </h3>
                <ul className="space-y-1 text-white list-inside">
                  <li className="flex items-start">
                    <BiTargetLock className="w-5 h-5 flex-shrink-0 mr-1" />
                    Fokus dan konsentrasi Memberikan Pelayanan yang berkualitas
                    kepada seluruh pelanggan.
                  </li>
                  <li className="flex items-start">
                    <BiTargetLock className="w-5 h-5 flex-shrink-0 mr-1" />
                    Menciptakan lingkungan kerja yang mengutamakan Attitude yang
                    baik.
                  </li>
                  <li className="flex items-start">
                    <BiTargetLock className="w-5 h-5 flex-shrink-0 mr-1" />
                    Membentuk perusahaan yang konsisten dalam menjaga keunggulan
                    di bidang kecantikan kulit sehingga mampu menyediakan produk
                    sesuai dengan kebutuhan pelanggan.
                  </li>
                  <li className="flex items-start">
                    <BiTargetLock className="w-5 h-5 flex-shrink-0 mr-1" />
                    Selalu berinovasi, bertumbuh dan berkembang sesuai dengan
                    Time priority.
                  </li>
                </ul>
              </article>
            </div>
          </div>
          {/* target */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 hidden md:flex md:w-6/12 lg:w-5/12"></div>
            <div className="z-20 mr-2 md:ml-2 lg:mr-0 lg:ml-0 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
              <GiHumanTarget className="w-5 h-5 text-pic-800 dark:text-pic-300" />
            </div>
            <div className="order-1 bg-brown-100 rounded-lg shadow-xl w-full md:w-6/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-brown-800 text-xl">
                Target LS Skincare
              </h3>
              <article className="text-sm leading-snug tracking-wide text-brown-900 text-opacity-100">
                <p>
                  Target penjualan dari LS SKINCARE yaitu seluruh perempuan
                  Indonesia dengan rentang usia dari 17th-50 thn dan yang baru
                  akan memakai skincare cocok menggunakan produk ini.
                </p>
              </article>
            </div>
          </div>
          {/* product */}
          <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 hidden md:flex md:w-6/12 lg:w-5/12"></div>
            <div className="z-20 mr-2 md:ml-2 lg:mr-0 lg:ml-0 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
              <BiBasket className="w-5 h-5 text-pic-800 dark:text-pic-300" />
            </div>
            <div className="order-1 bg-pic-700 rounded-lg shadow-xl w-full md:w-6/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                Produk LS Skincare
              </h3>
              <article className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                <p>
                  LS SKINCARE: Meng-Glowingkan Kulit dalam 3 Hari, Terdaftar
                  BPOM, Aman untuk Ibu Hamil, Menyusui, dan Non-Adiktif. Garansi
                  Uang Kembali 100%, Dapatkan Gratis Pouch Kosmetik, Gift
                  Menarik, Diskon hingga 30%, dan Subsidi Ongkir dengan
                  Pembelian 1 Paket. Reseller dan Agen Tersedia di Seluruh
                  Indonesia.
                </p>
                <h3 className="font-semibold my-2 text-base">
                  PRODUK AMAN DAN HALAL
                </h3>
                <p>
                  Dalam setiap produk LS SKINCARE, kami hanya menggunakan
                  bahan-bahan berkualitas yang dipadukan dengan keahlian medis,
                  menjadikannya pilihan terbaik yang aman dan terpercaya.
                </p>
              </article>
            </div>
          </div>
          {/* keuksesan */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 hidden md:flex md:w-6/12 lg:w-5/12"></div>
            <div className="z-20 mr-2 md:ml-2 lg:mr-0 lg:ml-0 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
              <BiParty className="w-5 h-5 text-pic-800 dark:text-pic-300" />
            </div>
            <div className="order-1 bg-brown-100 rounded-lg shadow-xl w-full md:w-6/12 lg:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-brown-800 text-xl">
                Kesuksesan LS Skincare
              </h3>
              <article className="text-sm leading-snug tracking-wide text-brown-900 text-opacity-100">
                <p>
                  Tahun 2021 menjadi tahun yang mengesankan bagi LS SKINCARE,
                  dengan prestasi sebagai Top Brand dan The Best Produk
                  Skincare. Tidak hanya itu, kami juga meraih peringkat teratas
                  dalam kategori perawatan kulit di salah satu marketplace,
                  serta berhasil menjual lebih dari 60.000 paket setiap bulannya
                  di berbagai platform online.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
