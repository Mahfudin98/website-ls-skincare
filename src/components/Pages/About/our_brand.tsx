import Image from "next/image";
export default function OurBrand() {
  return (
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
  );
}
