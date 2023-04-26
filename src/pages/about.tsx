import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout pageTitle="About">
      <section className="container mx-auto px-4 pt-10 mb-5">
        <h1>Brand Story</h1>
        <div className="grid grid-cols-12 gap-6 px-2">
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pic-900 mb-0 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Sejarah LS Skincare</h1>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pic-900 mb-0 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">
                Visi & Misi LS Skincare
              </h1>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pic-900 mb-0 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">
                Target Konsumen LS Skincare
              </h1>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pic-900 mb-0 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Produk LS Skincare</h1>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pic-900 mb-0 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Keunikan LS Skincare</h1>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-pic-900 mb-0 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Kesuksesan LS Skincare</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-10 mb-5">
        <h1>All Brand</h1>
        <div className="grid grid-cols-12 gap-6 px-2">
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-brown-900 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Awal mula berdiri</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-10 mb-5">
        <h1>LS Skincare Aesthetic Clinic</h1>
        <div className="grid grid-cols-12 gap-6 px-2">
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-brown-900 h-[350px] w-full flex justify-center items-center rounded-md shadow-md shadow-brown-400">
              <h1 className="text-white text-center">Awal mula berdiri</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
