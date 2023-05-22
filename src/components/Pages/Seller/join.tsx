import { NumericFormat } from "react-number-format";

export default function Join() {
  return (
    <section className="container p-2 mx-auto">
      <div className="py-5">
        <h1 className="mb-10 text-2xl lg:text-4xl font-bold leading-tight text-brown-900 uppercase text-center">
          Join us
        </h1>
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center container">
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
                <li className="text-start text-sm font-light">
                  Lorem ipsum dolor sit amet.
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
                <li className="text-start text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-brown-700 hover:shadow-xl duration-200 hover:bg-brown-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
