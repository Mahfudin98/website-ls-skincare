import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/layout";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../components/Pages/Home/home.module.css";

export default function Media() {
  return (
    <Layout pageTitle="Media">
      <Breadcrumb title="Media" navigate="media" />
      <section className="container p-2 mx-auto 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto w-full text-center">
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <h3 className={`${styles["h3-title"]} group`}>
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <h3 className={`${styles["h3-title"]} group`}>
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
          <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
            <h3 className={`${styles["h3-title"]} group`}>
              Testimoni
              <ArrowRightCircleIcon
                className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
              />
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
