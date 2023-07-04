export default function HeadlineAbout() {
  return (
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
                sebagai salah satu pemimpin pasar dalam industri perawatan kulit
                dengan produk-produk berkualitas tinggi. Misi utama LS Skincare
                adalah memberikan solusi efektif dan inovatif bagi perawatan
                kulit yang aman dan terpercaya bagi semua jenis kulit.
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
  );
}
