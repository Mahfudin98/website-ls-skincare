import Head from "next/head";
import HeaderCustom from "../Header/header";
import FooterCustom from "../Footer/footer";
import { ReactNode } from "react";
// import ChatBubble from "../Widget/Chat/chat_buble";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <meta
          name="description"
          content="LS Skincare adalah sebuah brand skincare yang berasal dari Majalengka, Indonesia. Brand ini telah menjadikan dirinya sebagai salah satu pemimpin pasar dalam industri perawatan kulit dengan produk-produk berkualitas tinggi. Misi utama LS Skincare adalah memberikan solusi efektif dan inovatif bagi perawatan kulit yang aman dan terpercaya bagi semua jenis kulit."
        />
        <link
          rel="shortcut icon"
          href="/logo/vertical-08.ico"
          type="image/x-icon"
        />
      </Head>
      <main className="relative">
        <HeaderCustom />
        <main className="container px-4 mx-auto">{children}</main>
        <FooterCustom />
        {/* <ChatBubble /> */}
      </main>
    </>
  );
}
