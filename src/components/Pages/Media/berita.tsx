import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import styles from "../Home/home.module.css";

export default function Berita() {
  return (
    <>
      <div className="h-[400px] bg-pic-100 flex items-center justify-center rounded-sm">
        <label htmlFor="berita" className={`${styles["h3-title"]} group`}>
          Berita
          <ArrowRightCircleIcon
            className={`${styles["h3-icon"]} group-hover:ml-1.5 group-hover:fill-brown-800 group-hover:text-pic-800`}
          />
        </label>
      </div>
      <input type="checkbox" id="berita" className="modal-toggle" />
      <label htmlFor="berita" className="cursor-pointer modal z-[99999]">
        <label className="relative modal-box bg-pic-700" htmlFor="">
          <h3 className="text-lg font-bold">Berita</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            asperiores accusantium porro quam nemo illo quia voluptate quis
            maxime minima at necessitatibus praesentium ea, ipsam voluptates
            corrupti quae. Magnam, cupiditate.
          </p>
        </label>
      </label>
    </>
  );
}
