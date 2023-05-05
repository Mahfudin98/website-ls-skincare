import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "./home.module.css";
import Link from "next/link";
import Testimoni from "../Media/testimoni";
import Berita from "../Media/berita";
import Galeri from "../Media/galeri";

export default function MediaHome() {
  return (
    <section className={styles["section-def"]}>
      <div className="inline-flex items-center justify-between w-full mb-3">
        <div>
          <h1>Media</h1>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-3">
        <Testimoni />
        <Berita />
        <Galeri />
      </div>
    </section>
  );
}
