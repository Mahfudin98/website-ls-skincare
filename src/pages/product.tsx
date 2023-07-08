import Layout from "@/components/Layout/layout";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Head from "next/head";
import ProductList from "@/components/Pages/Product/product_list";
import { useProductData } from "@/store/product_data";
import { useEffect, useState } from "react";
import ProductSearch from "@/components/Pages/Product/product_search";
import ProductFilter from "@/components/Pages/Product/product_filter";
import ProductSort from "@/components/Pages/Product/product_sort";
import ProductGrid from "@/components/Pages/Product/product_grid";
export default function Product() {
  const { categories, product, getCategory } = useProductData();
  const [paket, setPaket] = useState([
    {
      id: new Number(),
      code: new String(),
      category: new String(),
      type: new String(),
      product: new Number()
    }
  ]);
  const [ecer, setEcer] = useState([
    {
      id: new Number(),
      code: new String(),
      category: new String(),
      type: new String(),
      product: new Number()
    }
  ]);
  const [selected, setSelected] = useState([""]);
  const [show, setShow] = useState(true);
  const [views, setViews] = useState("grid");
  const [sorts, setSorts] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getCategory();
    if (product?.length > 0) {
      setShow(false);
    }
    if (!sorts) {
      product?.sort((a: any, b: any) => {
        const nameA = a.nama_produk.toUpperCase();
        const nameB = b.nama_produk.toUpperCase();

        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    } else {
      product?.sort((a: any, b: any) => {
        const nameA = a.nama_produk.toUpperCase();
        const nameB = b.nama_produk.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, setShow, sorts]);
  useEffect(() => {
    let paketFilter = categories?.filter((obj) => {
      let pakets = obj.type === "paket";
      return pakets;
    });
    let ecerFilter = categories?.filter((obj) => {
      let ecers = obj.type === "ecer";
      return ecers;
    });
    setPaket(paketFilter);
    setEcer(ecerFilter);
  }, [categories]);
  const filteredData = product?.filter((item: any) =>
    item.nama_produk.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title> LS Skincare - Product </title>
        <meta
          property="og:title"
          content="Related: Booster, Series, Acne, Serum, Formen"
        ></meta>
        <meta
          name="description"
          content="Jelajahi koleksi produk skincare kami yang menghadirkan solusi efektif untuk perawatan kulit Anda. Temukan keajaiban kulit sehat dengan produk-produk terbaik kami."
        ></meta>
        <meta
          property="og:url"
          content="https://pusat.lsskincare.id/product/"
        ></meta>
      </Head>
      <Breadcrumb title="Product" navigate="product" />
      <ProductSearch search={search} setSearch={setSearch} />
      <section className="container mx-auto mb-5">
        <div className="bg-pic-50 grid grid-cols-12 gap-4 p-6 rounded-xl shadow-inner">
          <div className="col-span-12 lg:col-span-3">
            <ProductFilter
              selected={selected}
              setSelected={setSelected}
              ecer={ecer}
              paket={paket}
            />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <ProductSort
              setViews={setViews}
              sorts={sorts}
              setSorts={setSorts}
            />
            {views === "grid" && (
              <ProductGrid
                product={search ? filteredData : product}
                show={show}
                selected={selected}
              />
            )}
            {views === "list" && (
              <ProductList
                product={search ? filteredData : product}
                show={show}
                selected={selected}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
