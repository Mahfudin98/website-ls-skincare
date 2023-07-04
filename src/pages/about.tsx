import BrandClinic from "@/components/Pages/About/brand_clinic";
import BrandList from "@/components/Pages/About/brand_list";
import BrandStory from "@/components/Pages/About/brand_story";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import Image from "next/image";
import { BiHistory, BiTargetLock, BiBasket, BiParty } from "react-icons/bi";
import { GiHumanTarget } from "react-icons/gi";
export default function About() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - About </title>
      </Head>
      <Breadcrumb title="About" navigate="about" />
      {/* story section */}
      <section className="container mx-auto">
        <div className="flex flex-wrap w-full mx-auto items-center">
          <div className="w-full md:w-1/2">
            <div className="lg:pr-[200px] py-8 lg:py-[80px]">
              <h1 className="mb-0 capitalize text-start">
                Discover the Perfect Balance of Beauty Care with LS Skincare
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="lg:pr-[120px] py-8 lg:py-[80px]">
              <article className="text-base leading-relaxed text-start text-brown-800 font-normal font-poppins">
                <p className="leading-8 mb-3">
                  LS Skincare adalah sebuah brand skincare yang berasal dari
                  Majalengka, Indonesia. Brand ini telah menjadikan dirinya
                  sebagai salah satu pemimpin pasar dalam industri perawatan
                  kulit dengan produk-produk berkualitas tinggi. Misi utama LS
                  Skincare adalah memberikan solusi efektif dan inovatif bagi
                  perawatan kulit yang aman dan terpercaya bagi semua jenis
                  kulit.
                </p>
                <h2 className="text-start text-2xl uppercase font-poppins underline underline-offset-4 font-bold relative w-fit">
                  LS Skincare
                </h2>
                <span className="text-center text-xs font-normal mb-1.5">
                  Perfect Your Beauty Care
                </span>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-5">
        <div className="w-full h-[350px] md:h-[450px] lg:h-[625px] relative rounded-xl shadow-md">
          <Image
            src={"/about-product.png"}
            height={625}
            width={1290}
            className="w-full hidden md:block lg:h-[625px] object-cover rounded-xl"
            alt="..."
          />
          <div className="absolute bottom-0 left-0 lg:-bottom-[80px] lg:left-[80px]">
            <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-[450px] relative">
              <article className="text-base text-brown-800 font-poppins font-medium">
                <p className="text-justify leading-relaxed">
                  <span className="font-bold">
                    Salah satu keunggulan utama dari LS Skincare adalah kualitas
                    produknya yang tinggi dan keselamatan yang dijamin.
                  </span>
                  Semua produk LS Skincare telah terdaftar di BPOM RI (Badan
                  Pengawas Obat dan Makanan Republik Indonesia), menunjukkan
                  komitmen brand ini terhadap keamanan dan kepatuhan terhadap
                  standar regulasi yang ketat.
                </p>
              </article>
              <div className="absolute -bottom-6 right-8 lg:-right-10">
                <div className="flex items-center gap-2 px-4 py-3 bg-pic-50 w-fit shadow-md rounded-xl">
                  <h2 className="text-base font-semibold text-brown-900 font-poppins">
                    Terdaftar
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-10 h-10 relative overflow-hidden flex justify-center items-center rounded-full ring-1 ring-pic-900">
                      <Image
                        width={1080}
                        height={1080}
                        className="w-8 h-8 object-cover"
                        alt="..."
                        src="/bpom.png"
                      />
                    </div>
                    <div className="w-10 h-10 relative overflow-hidden flex justify-center items-center rounded-full ring-1 ring-pic-900">
                      <Image
                        width={1080}
                        height={1080}
                        className="w-8 h-8 object-cover"
                        alt="..."
                        src="/mui.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-[125px] mb-10" />
      <section className="container mx-auto mb-5">
        <h1 className="text-center w-full capitalize">About Us</h1>
        <div className="flex w-full justify-center items-center">
          <div className="relative flex-wrap flex overflow-hidden p-10 h-fit">
            <div className="border-2 absolute border-opacity-20 border-brown-900 h-full left-[50%]"></div>
            {/* sejarah */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
                <BiHistory className="w-5 h-5 text-pic-800 dark:text-pic-300" />
              </div>
              <div className="order-1 bg-brown-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-brown-800 text-xl">
                  Sejarah LS Skincare
                </h3>
                <article className="text-sm leading-snug tracking-wide text-brown-900 text-opacity-100">
                  <p>
                    PT. LS ASTARI SUKSESTAMA, awalnya berjuang dari
                    kebangkrutan, berkembang menjadi sukses dengan kisah
                    perjalanan sepasang suami istri yang menciptakan brand
                    LAROSSA pada tahun 2019. Dengan kerja keras dan keuletan,
                    mereka berhasil meluncurkan produk skincare dengan merek
                    SUNROSE dan LS SKINCARE yang telah terdaftar di BPOM. Saat
                    ini, PT. LS ASTARI SUKSESTAMA telah menjadi perusahaan
                    dengan lebih dari 80 karyawan yang berdedikasi.
                  </p>
                </article>
              </div>
            </div>
            {/* visi misi */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
                <BiTargetLock className="w-5 h-5 text-pic-800 dark:text-pic-300" />
              </div>
              <div className="order-1 bg-pic-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
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
                      Fokus dan konsentrasi Memberikan Pelayanan yang
                      berkualitas kepada seluruh pelanggan.
                    </li>
                    <li className="flex items-start">
                      <BiTargetLock className="w-5 h-5 flex-shrink-0 mr-1" />
                      Menciptakan lingkungan kerja yang mengutamakan Attitude
                      yang baik.
                    </li>
                    <li className="flex items-start">
                      <BiTargetLock className="w-5 h-5 flex-shrink-0 mr-1" />
                      Membentuk perusahaan yang konsisten dalam menjaga
                      keunggulan di bidang kecantikan kulit sehingga mampu
                      menyediakan produk sesuai dengan kebutuhan pelanggan.
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
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
                <GiHumanTarget className="w-5 h-5 text-pic-800 dark:text-pic-300" />
              </div>
              <div className="order-1 bg-brown-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
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
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
                <BiBasket className="w-5 h-5 text-pic-800 dark:text-pic-300" />
              </div>
              <div className="order-1 bg-pic-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  Produk LS Skincare
                </h3>
                <article className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  <p>
                    LS SKINCARE: Meng-Glowingkan Kulit dalam 3 Hari, Terdaftar
                    BPOM, Aman untuk Ibu Hamil, Menyusui, dan Non-Adiktif.
                    Garansi Uang Kembali 100%, Dapatkan Gratis Pouch Kosmetik,
                    Gift Menarik, Diskon hingga 30%, dan Subsidi Ongkir dengan
                    Pembelian 1 Paket. Reseller dan Agen Tersedia di Seluruh
                    Indonesia.
                  </p>
                  <h3 className="font-semibold my-2 text-base">
                    PRODUK AMAN DAN HALAL
                  </h3>
                  <p>
                    Dalam setiap produk LS SKINCARE, kami hanya menggunakan
                    bahan-bahan berkualitas yang dipadukan dengan keahlian
                    medis, menjadikannya pilihan terbaik yang aman dan
                    terpercaya.
                  </p>
                </article>
              </div>
            </div>
            {/* keuksesan */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center justify-center order-1 bg-brown-800 shadow-xl w-8 h-8 rounded-full">
                <BiParty className="w-5 h-5 text-pic-800 dark:text-pic-300" />
              </div>
              <div className="order-1 bg-brown-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-brown-800 text-xl">
                  Kesuksesan LS Skincare
                </h3>
                <article className="text-sm leading-snug tracking-wide text-brown-900 text-opacity-100">
                  <p>
                    Tahun 2021 menjadi tahun yang mengesankan bagi LS SKINCARE,
                    dengan prestasi sebagai Top Brand dan The Best Produk
                    Skincare. Tidak hanya itu, kami juga meraih peringkat
                    teratas dalam kategori perawatan kulit di salah satu
                    marketplace, serta berhasil menjual lebih dari 60.000 paket
                    setiap bulannya di berbagai platform online.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-10" />
      <section className="container mx-auto mb-10">
        <h1 className="text-center w-full capitalize">Our Brand</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-xl shadow-md bg-pic-900 relative overflow-hidden">
            <Image
              height={1080}
              width={1080}
              alt="..."
              src={"/pusat-product.png"}
            />
          </div>
          <div className="rounded-xl shadow-md bg-pic-900 relative overflow-hidden">
            <Image height={1080} width={1080} alt="..." src={"/klinik.png"} />
          </div>
          <div className="rounded-xl shadow-md bg-pic-900 relative overflow-hidden">
            <Image
              height={1080}
              width={1080}
              alt="..."
              src={"/formen-product.png"}
            />
          </div>
        </div>
      </section>
      {/* <BrandStory /> */}
      {/* list brand */}
      {/* <BrandList /> */}
      {/* klinik brand */}
      {/* <BrandClinic /> */}
    </Layout>
  );
}
