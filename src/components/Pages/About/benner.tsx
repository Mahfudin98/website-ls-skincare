import Image from "next/image";
export default function BannerAbout() {
  return (
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
  );
}
