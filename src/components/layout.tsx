import Head from "next/head";
import HeaderCustom from "./Header/header";
import FooterCustom from "./Footer/footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title> LS Skincare - {pageTitle} </title>
        <meta
          name="description"
          content="LS Skincare adalah sebuah brand skincare asal Majalengka"
        />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <main>
        <HeaderCustom />
        <main className="container px-4 mx-auto">{children}</main>
        <FooterCustom />
      </main>
    </>
  );
}
