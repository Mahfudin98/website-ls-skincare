import { Inter } from "next/font/google";
import HeaderCustom from "@/components/Header/header";
import FooterCustom from "../components/Footer/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderCustom />

      <main className="container px-4 mx-auto">
        {/* headlie section */}
        <section className="container flex flex-col justify-between h-screen p-2 mx-auto">
          <div className="h-screen bg-red-500">Hallo</div>
        </section>
      </main>
      <FooterCustom />
    </>
  );
}
