import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";

export default function BrandStory() {
  return (
    <section className="container mx-auto px-4 pt-10 mb-5">
      <h1>Brand Story</h1>
      <div>
        <Carousel>
          <div id="slide1" className="carousel-item relative w-full">
            <div className="bg-gradient-to-br from-[#2980b9] to-[#2c3e50] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Sejarah LS Skincare</h1>
              <label
                htmlFor="sejarah"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="h-6 w-6 ml-1 group-hover:ml-2 ease-in duration-100 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="bg-gradient-to-br from-[#fd746c] to-[#ff9068] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">
                Visi & Misi LS Skincare
              </h1>
              <label
                htmlFor="visi-misi"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="h-6 w-6 ml-1 group-hover:ml-2 ease-in duration-100 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="bg-gradient-to-br from-[#c2e59c] to-[#64b3f4] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">
                Target Konsumen LS Skincare
              </h1>
              <label
                htmlFor="target"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="h-6 w-6 ml-1 group-hover:ml-2 ease-in duration-100 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="bg-gradient-to-br from-[#C02425] to-[#F0CB35] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Produk LS Skincare</h1>
              <label
                htmlFor="produk"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="h-6 w-6 ml-1 group-hover:ml-2 ease-in duration-100 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="bg-gradient-to-br from-[#005C97] to-[#363795] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Keunikan LS Skincare</h1>
              <label
                htmlFor="keunikan"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="h-6 w-6 ml-1 group-hover:ml-2 ease-in duration-100 delay-0" />
              </label>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <div className="bg-gradient-to-br from-[#F1F2B5] to-[#135058] mb-0 h-[350px] w-full flex flex-col justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Kesuksesan LS Skincare</h1>
              <label
                htmlFor="kesuksesan"
                className="btn inline-flex text-base px-2 py-1.5 bg-brown-900 text-white font-semibold font-poppins rounded-md group hover:px-5 hover:py-2 hover:text-brown-900 hover:bg-transparent hover:border-2 hover:border-brown-900 hover:shadow-lg hover:shadow-brown-600 delay-75 duration-150 ease-in-out"
              >
                View more
                <ArrowRightCircleIcon className="h-6 w-6 ml-1 group-hover:ml-2 ease-in duration-100 delay-0" />
              </label>
            </div>
          </div>
        </Carousel>
      </div>
      {/* modal sejarah */}
      <input type="checkbox" id="sejarah" className="modal-toggle" />
      <label htmlFor="sejarah" className="modal cursor-pointer">
        <label
          className="modal-box relative w-11/12 max-w-5xl bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">Sejarah LS Skincare</h3>
          <label
            htmlFor="sejarah"
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
      {/* modal visi misi */}
      <input type="checkbox" id="visi-misi" className="modal-toggle" />
      <label htmlFor="visi-misi" className="modal cursor-pointer">
        <label
          className="modal-box relative w-11/12 max-w-5xl bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">
            Visi Misi LS Skincare
          </h3>
          <label
            htmlFor="visi-misi"
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
      {/* modal target */}
      <input type="checkbox" id="target" className="modal-toggle" />
      <label htmlFor="target" className="modal cursor-pointer">
        <label
          className="modal-box relative w-11/12 max-w-5xl bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">Target LS Skincare</h3>
          <label
            htmlFor="target"
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
      {/* modal produk */}
      <input type="checkbox" id="produk" className="modal-toggle" />
      <label htmlFor="produk" className="modal cursor-pointer">
        <label
          className="modal-box relative w-11/12 max-w-5xl bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">Produk LS Skincare</h3>
          <label
            htmlFor="produk"
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
      {/* modal keunikan */}
      <input type="checkbox" id="keunikan" className="modal-toggle" />
      <label htmlFor="keunikan" className="modal cursor-pointer">
        <label
          className="modal-box relative w-11/12 max-w-5xl bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">Keunikan LS Skincare</h3>
          <label
            htmlFor="keunikan"
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
      <label htmlFor="kesuksesan" className="modal cursor-pointer">
        <label
          className="modal-box relative w-11/12 max-w-5xl bg-pic-900"
          htmlFor=""
        >
          <h3 className="text-lg font-bold text-white">
            Kesuksesan LS Skincare
          </h3>
          <label
            htmlFor="kesuksesan"
            className="btn btn-sm btn-circle absolute right-2 top-2"
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
    </section>
  );
}
