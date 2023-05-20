import Head from "next/head";
import HeaderCustom from "./Header/header";
import FooterCustom from "./Footer/footer";
import { ReactNode } from "react";
import ChatBubble from "./Widget/Chat/chat_buble";

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
          content="LS Skincare adalah sebuah brand skincare asal Majalengka"
        />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <main className="relative">
        <HeaderCustom />
        <main className="container px-4 mx-auto">{children}</main>
        {/* chat bubble */}
        {/* <ChatBubble /> */}
        <FooterCustom />
      </main>
    </>
  );
}
