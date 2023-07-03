import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NumericFormat } from "react-number-format";
import { TbCheckbox, TbWashDryOff, TbMoodDollar } from "react-icons/tb";

export default function Join() {
  return (
    <section className="container p-2 mx-auto">
      <div className="py-5">
        <h1 className="mb-10 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase text-center">
          Join us
        </h1>
        <div className="mb-3 grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto">
          <div className="px-6 py-8 bg-white border-2 border-pic-100 rounded-3xl shadow-md">
            <div className="flex flex-col">
              <span className="px-2 py-1.5 text-brown-600 mb-10 w-fit rounded-2xl bg-pic-50 border border-brown-100 text-xs uppercase font-medium font-poppins">
                Customer
              </span>

              <h1>IDR 0</h1>
              <div className="my-3">
                <h3 className="text-sm font-poppins font-medium text-brown-700">
                  Untuk customer biasa
                </h3>
                <h3 className="text-base font-poppins font-semibold text-brown-800">
                  Tanpa keuntungan tambahan dari produk
                </h3>
              </div>
              <a
                href="https://orderan.lsstore.id/cs/all-cs-new"
                className="w-full flex text-center mb-6 bg-brown-700 text-white items-center justify-center text-lg font-semibold font-poppins py-2 px-6 rounded-3xl hover:bg-brown-800 focus:ring-4 focus:ring-brown-300"
              >
                <ShoppingCartIcon className="h-6 w-6 mr-2" /> Shop Now
              </a>
              <h2 className="text-base font-poppins font-semibold text-brown-900">
                Keuntungan:
              </h2>
              <ul className="w-full flex flex-col justify-start items-center my-4 gap-3">
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Kulit glowing dan berseri
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Member VIP
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Pembinaan langsung dari Owner.
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Promotion dan marketing kit.
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Keuntungan produk kebih besar.
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Free Landing Page & Linktree.
                </li>
              </ul>
            </div>
          </div>
          <div className="px-6 py-8 bg-white border-2 border-pic-100 rounded-3xl shadow-md">
            <div className="flex flex-col">
              <span className="px-2 py-1.5 text-brown-600 mb-10 w-fit rounded-2xl bg-pic-50 border border-brown-100 text-xs uppercase font-medium font-poppins">
                Reseller
              </span>

              <h1>IDR 450K</h1>
              <div className="my-3">
                <h3 className="text-sm font-poppins font-medium text-brown-700">
                  Untuk customer reseller
                </h3>
                <h3 className="text-base font-poppins font-semibold text-brown-800">
                  Dengan keuntungan tambahan dari produk
                </h3>
              </div>
              <a
                href="https://orderan.lsstore.id/cs/join-reseller-new"
                className="w-full flex text-center mb-6 bg-pic-800 text-white items-center justify-center text-lg font-semibold font-poppins py-2 px-6 rounded-3xl hover:bg-pic-900 focus:ring-4 focus:ring-brown-300"
              >
                <TbMoodDollar className="h-6 w-6 mr-2" /> Join Now
              </a>
              <h2 className="text-base font-poppins font-semibold text-brown-900">
                Keuntungan:
              </h2>
              <ul className="w-full flex flex-col justify-start items-center my-4 gap-3">
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Kulit glowing dan berseri
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Member VIP
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Pembinaan langsung dari Owner.
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Promotion dan marketing kit.
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Keuntungan produk kebih besar.
                </li>
                <li className="flex items-center line-through justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbWashDryOff className="h-6 w-6 mr-2" />
                  Free Landing Page & Linktree.
                </li>
              </ul>
            </div>
          </div>
          <div className="px-6 py-8 bg-white border-2 border-pic-100 rounded-3xl shadow-md">
            <div className="flex flex-col">
              <span className="px-2 py-1.5 text-brown-600 mb-10 w-fit rounded-2xl bg-pic-50 border border-brown-100 text-xs uppercase font-medium font-poppins">
                Agen
              </span>

              <h1>IDR 18Juta</h1>
              <div className="my-3">
                <h3 className="text-sm font-poppins font-medium text-brown-700">
                  Untuk customer agen
                </h3>
                <h3 className="text-base font-poppins font-semibold text-brown-800">
                  Menjadi prioritas dan keutungan yang melimpah
                </h3>
              </div>
              <a
                href="https://orderan.lsstore.id/cs/join-agen"
                className="w-full flex text-center mb-6 bg-pic-600 text-white items-center justify-center text-lg font-semibold font-poppins py-2 px-6 rounded-3xl hover:bg-pic-700 focus:ring-4 focus:ring-brown-300"
              >
                <TbMoodDollar className="h-6 w-6 mr-2" /> Join Now
              </a>
              <h2 className="text-base font-poppins font-semibold text-brown-900">
                Keuntungan:
              </h2>
              <ul className="w-full flex flex-col justify-start items-center my-4 gap-3">
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Kulit glowing dan berseri
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Member VVIP
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Pembinaan langsung dari Owner.
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Promotion dan marketing kit.
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Keuntungan produk kebih besar.
                </li>
                <li className="flex items-center justify-start w-full text-base font-poppins font-medium text-brown-700 border-b-2 pb-2.5 border-brown-100">
                  <TbCheckbox className="h-6 w-6 mr-2" />
                  Free Landing Page & Linktree.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center container">
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-200 z-30">
            <h1 className="text-brown-500 font-semibold text-xl">End User</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-brown-700 text-4xl font-black whitespace-nowrap">
                Rp. 0 .-
              </h1>
            </div>
            <div className="h-px bg-brown-200"></div>
            <div className="text-center mt-3">
              <ul>
                <li className="text-start text-sm font-light">
                  Kulit Glowing dan berseri.
                </li>
                <li className="text-start text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="text-start text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="text-start text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="text-start text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-700 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <h1 className="text-brown-800 font-semibold text-xl ">Reseller</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-white text-4xl font-black whitespace-nowrap">
                Rp. 450 K
              </h1>
            </div>
            <div className="h-px bg-brown-400"></div>
            <div className="text-center mt-3">
              <ul>
                <li className="text-start text-sm font-light">
                  Kulit Glowing dan berseri.
                </li>
                <li className="text-start text-sm font-light">Member VIP</li>
                <li className="text-start text-sm font-light">
                  Pembinaan langsung dari Owner.
                </li>
                <li className="text-start text-sm font-light">
                  PROMOTION DAN MARKETING KIT
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-400 hover:shadow-xl duration-200 hover:bg-brown-800">
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-pic-200 z-30">
            <h1 className="text-brown-500 font-semibold text-xl ">Agen</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-brown-700 text-4xl font-black whitespace-nowrap">
                Rp. 8 JT
              </h1>
            </div>
            <div className="h-px bg-brown-200"></div>
            <div className="text-center mt-3">
              <ul>
                <li className="text-start text-sm font-light">
                  Kulit Glowing dan berseri.
                </li>
                <li className="text-start text-sm font-light">Member VVIP</li>
                <li className="text-start text-sm font-light">
                  Pembinaan langsung dari Owner.
                </li>
                <li className="text-start text-sm font-light">
                  PROMOTION DAN MARKETING KIT
                </li>
                <li className="text-start text-sm font-light">
                  Keuntungan Produk Sampai Dengan Rp. 66.000.
                </li>
                <li className="text-start text-sm font-light">
                  Free Landing Page ( Domain & Hosting dengan CTA Langsung Ke
                  Nomor Agen )
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
              Buy Now
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
