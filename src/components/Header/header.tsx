import Image from "next/image";
import { Inter } from "next/font/google";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderCustom() {
  const fixedRef = useRef(null);
  const [fixed, setFixed] = useState("w-full border-b border-gray-300");
  const [offste, setOffset] = useState(0);
  const router = useRouter();
  const listenScrollEvent = () => {
    if (window.scrollY > offste + 100) {
      setFixed(styles["header-fixed"]);
    } else {
      setFixed("w-full border-b border-gray-300");
    }
  };

  // button
  const [isOpen, setIsOpen] = useState(false);
  const listenNavigate = () => {
    setIsOpen((current) => !current);
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
      <div className="container px-4 mx-auto md:py-2">
        <nav className={styles.nav}>
          <div className={styles["nav-flex"]}>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/vertical-06.png"
                className="object-cover w-8 h-8 mr-3"
                height={150}
                width={150}
                alt="LS Logo"
              />
              <span className={styles["logo-text"]}>LS Skincare</span>
            </Link>
            <button
              onClick={listenNavigate}
              data-collapse-toggle="navbar-default"
              type="button"
              className={styles["button-toggle"]}
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon className="w-6 h-6 fill-brown-900" />
            </button>
            <div
              className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
              id="navbar-default"
            >
              <ul className={styles["nav-ul"]}>
                <li>
                  <Link
                    href="/"
                    className={
                      router.pathname == "/" ? styles.active : styles["nav-li"]
                    }
                    aria-current="page"
                  >
                    <span
                      className={
                        router.pathname == "/"
                          ? styles["active-span"]
                          : styles["animation-li"]
                      }
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={
                      router.pathname == "/about"
                        ? styles.active
                        : styles["nav-li"]
                    }
                    aria-current="page"
                  >
                    <span
                      className={
                        router.pathname == "/about"
                          ? styles["active-span"]
                          : styles["animation-li"]
                      }
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className={
                      router.pathname == "/product"
                        ? styles.active
                        : styles["nav-li"]
                    }
                    aria-current="page"
                  >
                    <span
                      className={
                        router.pathname == "/product"
                          ? styles["active-span"]
                          : styles["animation-li"]
                      }
                    >
                      Product
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seller"
                    className={
                      router.pathname == "/seller"
                        ? styles.active
                        : styles["nav-li"]
                    }
                    aria-current="page"
                  >
                    <span
                      className={
                        router.pathname == "/seller"
                          ? styles["active-span"]
                          : styles["animation-li"]
                      }
                    >
                      Seller
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className={
                      router.pathname == "/media"
                        ? styles.active
                        : styles["nav-li"]
                    }
                    aria-current="page"
                  >
                    <span
                      className={
                        router.pathname == "/media"
                          ? styles["active-span"]
                          : styles["animation-li"]
                      }
                    >
                      Media
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
