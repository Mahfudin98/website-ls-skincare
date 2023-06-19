import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
export default function Error404() {
  return (
    <section className="container p-2 mx-auto">
      <div className="h-[600px] w-full flex flex-col items-center justify-center">
        <h1 className="mb-0">Waduh...!!!</h1>
        <Image
          src={"/404.gif"}
          className="object-cover w-[800px]"
          width={1000}
          height={1000}
          alt="..."
        />
        <h3 className="mb-5 text-xl font-medium text-center font-poppins text-brown-900">
          Sepertinya halaman yang dituju tidak ada!
        </h3>
        <Link
          href={"/"}
          className="px-4 py-1.5 bg-pic-900 rounded-md text-white hover:bg-pic-800 shadow-md text-center"
        >
          Kembali ke Home
        </Link>
      </div>
    </section>
  );
}
