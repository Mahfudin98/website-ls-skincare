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
          <div className="px-6 py-8 bg-white border-2 border-pic-100 rounded-3xl shadow-md relative overflow-hidden">
            <div className="absolute -right-[100px] -top-[100px]">
              <svg
                className="w-[300px] h-[300px] rotate-12"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4E342E"
                  d="M71.8,-23.4C80.7,3.8,66.8,38.4,41.5,56.7C16.2,74.9,-20.6,76.9,-44,60C-67.4,43.2,-77.4,7.4,-67.8,-20.9C-58.2,-49.2,-29.1,-69.9,1.2,-70.3C31.5,-70.7,63,-50.7,71.8,-23.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
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
          <div className="px-6 py-8 bg-white border-2 border-pic-100 rounded-3xl shadow-md relative overflow-hidden">
            <div className="absolute -right-[100px] -top-[100px]">
              <svg
                className="w-[300px] h-[300px]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F27272"
                  d="M44.2,-24.9C57.1,-3.1,67.4,20.9,59.6,37.6C51.8,54.4,25.9,64,0.2,63.8C-25.4,63.7,-50.8,53.8,-59.1,36.8C-67.3,19.8,-58.5,-4.4,-45.8,-26.1C-33.1,-47.8,-16.5,-67.1,-0.5,-66.8C15.6,-66.5,31.2,-46.8,44.2,-24.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
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
          <div className="px-6 py-8 bg-white border-2 border-pic-100 rounded-3xl shadow-md relative overflow-hidden">
            <div className="absolute -right-[100px] -top-[100px]">
              <svg
                className="w-[300px] h-[300px]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F69C9C"
                  d="M47.5,-51.5C63.1,-43.4,78.5,-30,80.8,-14.6C83.1,0.8,72.3,18.1,59.5,28.8C46.7,39.5,32,43.4,17.5,49.1C3.1,54.8,-11.1,62.2,-25.6,61C-40,59.7,-54.6,49.9,-58.8,36.8C-63,23.7,-56.7,7.4,-54.9,-10.9C-53.2,-29.2,-55.9,-49.5,-47.4,-58.9C-39,-68.2,-19.5,-66.7,-1.8,-64.6C15.9,-62.4,31.8,-59.6,47.5,-51.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
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
      </div>
    </section>
  );
}
