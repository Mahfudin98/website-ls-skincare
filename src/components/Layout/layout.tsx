import Head from "next/head";
import HeaderCustom from "../Header/header";
import FooterCustom from "../Footer/footer";
import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import ChatBubble from "../Widget/Chat/chat_buble";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const generateRandomString = (length: number) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
    return randomString;
  };
  const setCookieIfNotExists = (): void => {
    const cookieName: string = "token";
    const cookieValue: string = generateRandomString(32);

    // Cek apakah cookie sudah terpasang
    const existingCookie: string | undefined = Cookies.get(cookieName);

    if (!existingCookie) {
      // Jika cookie belum terpasang, set cookie
      Cookies.set(cookieName, cookieValue, { expires: 7 }); // Expires dalam 365 hari
    } else {
      console.log("Cookie already exists:", cookieName);
    }
  };
  useEffect(() => {
    setCookieIfNotExists();
  });
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
        <ChatBubble />
      </main>
    </>
  );
}
