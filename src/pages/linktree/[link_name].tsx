import Layout from "@/components/Layout/layout";
import Head from "next/head";
import { TbBrandShopee } from "react-icons/tb";
import { IoHeartSharp } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { FaTiktok, FaWhatsapp, FaGlobe } from "react-icons/fa";
import Error404 from "@/components/Pages/PageMember/error404";
import { usePageData } from "@/store/page";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { title } from "process";
import Image from "next/image";

export default function LinkTree() {
  const { linktree } = usePageData();
  const [isFound, setIsFound] = useState(false);
  const [pages, setPages] = useState({
    title: new String()
  });
  const [links, setLinks] = useState([{ title: new String(), link: String }]);
  useEffect(() => {
    let page = linktree?.page;
    let link = linktree?.link;
    if (page != null) {
      setPages(page);
      setIsFound(true);
      setLinks(link);
    }
  }, [linktree?.link, linktree?.page]);

  return (
    <Layout>
      <Head>
        <title>LS - Skicare | Linktee</title>
      </Head>
      {!isFound && <Error404 />}
      {isFound && (
        <section className="container p-2 mx-auto my-5">
          <div className="flex flex-col justify-start md:justify-center items-center w-full md:h-[600px]">
            <div className="bg-pic-500 p-2 rounded-t-full rounded-br-full -rotate-45 mb-8">
              <Image
                src={"/logo.png"}
                height={1080}
                width={1080}
                alt="..."
                className="w-32 object-cover bg-white p-2 rounded-full rotate-45"
              />
            </div>
            <div className="px-4 py-2.5 bg-pic-500 rounded-2xl shadow-md mb-5">
              <h1 className="mb-0">{pages?.title}</h1>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {links.map((link, index) => {
                return (
                  <div key={index}>
                    <a
                      href={`${link.link}`}
                      className="flex items-center justify-center p-4 mb-3 shadow-md bg-pic-900 rounded-xl hover:bg-pic-800"
                    >
                      <TbBrandShopee
                        className={`w-16 h-16 text-white ${
                          link.title === "shopee" ? "block" : "hidden"
                        }`}
                      />
                      <IoHeartSharp
                        className={`w-16 h-16 text-white ${
                          link.title === "lazada" ? "block" : "hidden"
                        }`}
                      />
                      <SlHandbag
                        className={`w-16 h-16 text-white ${
                          link.title === "tokopedia" ? "block" : "hidden"
                        }`}
                      />
                      <FaTiktok
                        className={`w-16 h-16 text-white ${
                          link.title === "tiktokshop" ? "block" : "hidden"
                        }`}
                      />
                      <FaWhatsapp
                        className={`w-16 h-16 text-white ${
                          link.title === "whatsapp" ? "block" : "hidden"
                        }`}
                      />
                      <FaGlobe
                        className={`w-16 h-16 text-white ${
                          link.title === "website" ? "block" : "hidden"
                        }`}
                      />
                    </a>
                    <h3 className="text-lg font-semibold text-center uppercase font-poppins text-brown-700">
                      {link.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
