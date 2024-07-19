import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Arasi Arts</div>
        <nav className={styles.navigation}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            Product
          </a>
          <a href="#" className={styles.navLink}>
            Classes
          </a>
          <a href="#" className={styles.navLink}>
            Blogs
          </a>
        </nav>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc7c75c43227a0bd49baecfad07c1eef8011abf8631e1d1302b87cd9473f9517?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt=""
          className={styles.icon}
        />
        <div className={styles.socialIcons}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/249d138255d468842e688bcff49ee72355d6f49064b9d1da87217b4b90e708c2?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Social Icon 1"
            className={styles.socialIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf0bf29dcc3fc6a90be5a94de41983b654f97b7f91c53538314c013bacdf2dd?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Social Icon 2"
            className={styles.socialIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6ec0d361849fc1b61ef4d78648818fb90f5796d13d727b3a33d07f0133f5c91?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Social Icon 3"
            className={styles.socialIcon}
          />
        </div>
        <button className={styles.contactButton}>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
