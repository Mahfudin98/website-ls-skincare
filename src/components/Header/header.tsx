import Image from "next/image";
import { Inter } from "next/font/google";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function HeaderCustom() {
  const fixedRef = useRef(null);
  const [fixed, setFixed] = useState("w-full");
  const [offste, setOffset] = useState(0);

  const listenScrollEvent = () => {
    if (window.scrollY > offste + 100) {
      setFixed(styles["header-fixed"]);
    } else {
      setFixed("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFixed, fixedRef]);
  return (
    <header ref={fixedRef} className={`${fixed}`}>
      <div className="container mx-auto">
        <nav className={styles.nav}>
          <div className={styles["nav-flex"]}>
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="object-cover w-8 h-8 mr-3"
                height={150}
                width={150}
                alt="Flowbite Logo"
              />
              <span className={styles["logo-text"]}>LS Skincare</span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className={styles["button-toggle"]}
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon className="w-6 h-6 fill-[#4E342E]" />
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className={styles["nav-ul"]}>
                <li>
                  <a href="#" className={styles.active} aria-current="page">
                    <span className={styles["active-span"]}>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles["nav-li"]}>
                    <span className={styles["animation-li"]}>About</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles["nav-li"]}>
                    <span className={styles["animation-li"]}>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles["nav-li"]}>
                    <span className={styles["animation-li"]}>Pricing</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles["nav-li"]}>
                    <span className={styles["animation-li"]}>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
