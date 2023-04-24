import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "./home.module.css";

export default function MediaHome() {
  return (
    <section className={styles["section-def"]}>
      <div className="w-full inline-flex justify-between items-center mb-3">
        <div>
          <h1>Media</h1>
        </div>
      </div>
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
  );
}
