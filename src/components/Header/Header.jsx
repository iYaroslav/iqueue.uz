import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = ({
  mainRef,
  companyRef,
  productsRef,
  contactsRef,
  plusRef,
  currentBlock,
  setCurrentBlock,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [showLang, setShowLang] = useState(false);
  const dropdownRef = useRef(null);
  const [burger, setBurger] = useState(false);
  const [currentLang, setCurrentLang] = useState("ru");

  const toggleBurger = () => {
    setBurger(!burger);
  };

  const changeBlock = (block) => {
    if (block === "main" && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (block === "company" && companyRef.current) {
      companyRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (block === "products" && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (block === "contacts" && contactsRef.current) {
      contactsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (block === "plus" && plusRef.current) {
      plusRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (burger === true) {
      toggleBurger();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setShowLang(!showLang);
  };

  const changeLang = (lang) => {
    setCurrentLang(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerMob}>
        <div onClick={toggleBurger} className={styles.headerMobBtn}>
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="4" rx="2" fill="#152040" />
            <rect y="8" width="32" height="4" rx="2" fill="#152040" />
            <rect y="16" width="32" height="4" rx="2" fill="#152040" />
          </svg>
        </div>
        <div className={styles.headerMobLogo}>
          <img
            loading="lazy"
            src="images/logo-green.svg"
            alt=""
            draggable="false"
            className={styles.logo}
          />
        </div>
      </div>
      <div
        onClick={toggleBurger}
        className={`${styles.filter} ${burger === true ? styles.active : ""}`}
      ></div>
      <div
        className={`${styles.container} ${
          burger === true ? styles.active : ""
        }`}
      >
        <div onClick={toggleBurger} className={styles.exit}>
          <button className={styles.exitBtn}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.19191 7.19191C7.63823 6.7456 8.36184 6.7456 8.80816 7.19191L16 14.3829L23.1919 7.19191C23.6039 6.77993 24.2522 6.74824 24.7005 7.09684L24.8082 7.19191C25.2545 7.63823 25.2545 8.36184 24.8082 8.80816L17.6172 16L24.8082 23.1919C25.2201 23.6039 25.2518 24.2522 24.9032 24.7005L24.8082 24.8082C24.3618 25.2545 23.6382 25.2545 23.1919 24.8082L16 17.6172L8.80816 24.8082C8.39617 25.2201 7.74791 25.2518 7.29958 24.9032L7.19191 24.8082C6.7456 24.3618 6.7456 23.6382 7.19191 23.1919L14.3829 16L7.19191 8.80816C6.77993 8.39617 6.74824 7.74791 7.09684 7.29958L7.19191 7.19191Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className={styles.left}>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            <img
              loading="lazy"
              src="images/logo-green.svg"
              alt=""
              draggable="false"
              className={styles.logo}
            />
          </button>
          <nav className={styles.nav}>
            <button
              onClick={() => changeBlock("main")}
              className={currentBlock === "main" ? styles.active : ""}
            >
              {t("menu_home")}
            </button>
            <button
              onClick={() => changeBlock("company")}
              className={currentBlock === "company" ? styles.active : ""}
            >
              {t("about_company")}
            </button>
            <button
              onClick={() => changeBlock("products")}
              className={currentBlock === "products" ? styles.active : ""}
            >
              {t("products")}
            </button>
            <button
              onClick={() => changeBlock("contacts")}
              className={currentBlock === "contacts" ? styles.active : ""}
            >
              {t("contacts")}
            </button>
          </nav>
        </div>
        <div className={styles.right}>
          <div className={styles.dropDown} ref={dropdownRef}>
            <button
              type="button"
              className={styles.dropDownTitle}
              onClick={toggleDropdown}
            >
              {currentLang.toUpperCase()}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5306 6.53073L8.5306 11.5307C8.46092 11.6007 8.37813 11.6561 8.28696 11.694C8.1958 11.7318 8.09806 11.7513 7.99935 11.7513C7.90064 11.7513 7.8029 11.7318 7.71173 11.694C7.62057 11.6561 7.53778 11.6007 7.4681 11.5307L2.4681 6.53073C2.3272 6.38984 2.24805 6.19874 2.24805 5.99948C2.24805 5.80023 2.3272 5.60913 2.4681 5.46823C2.60899 5.32734 2.80009 5.24818 2.99935 5.24818C3.19861 5.24818 3.3897 5.32734 3.5306 5.46823L7.99997 9.93761L12.4693 5.46761C12.6102 5.32671 12.8013 5.24756 13.0006 5.24756C13.1999 5.24756 13.391 5.32671 13.5318 5.46761C13.6727 5.60851 13.7519 5.7996 13.7519 5.99886C13.7519 6.19812 13.6727 6.38921 13.5318 6.53011L13.5306 6.53073Z"
                  fill="#152040"
                />
              </svg>
            </button>
            <div
              className={`${styles.dropDownInner} ${
                showLang ? styles.show : ""
              }`}
            >
              <button
                onClick={() => changeLang("ru")}
                type="button"
                className={`${styles.dropDownBtn} ${
                  currentLang === "ru" ? styles.active : ""
                }`}
              >
                RU
              </button>

              <button
                onClick={() => changeLang("uz")}
                type="button"
                className={`${styles.dropDownBtn} ${
                  currentLang === "uz" ? styles.active : ""
                }`}
              >
                UZ
              </button>

              <button
                onClick={() => changeLang("en")}
                type="button"
                className={`${styles.dropDownBtn} ${
                  currentLang === "en" ? styles.active : ""
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
