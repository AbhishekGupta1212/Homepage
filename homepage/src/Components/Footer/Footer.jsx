import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4561e28c79947fffc90cc1a1e427943a7fbc2494d70a8acdeccaac1d09c5040?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Arasi Arts Logo"
            className={styles.logo}
          />
          <h2 className={styles.companyName}>Arasi arts</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc5d5b09b10c62d902cbfbee98680d13bc16eb07edf5327952fe014bc015000?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt=""
            className={styles.decorativeImage}
          />
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Products</h3>
            <ul className={styles.linkList}>
              <li>Categories</li>
              <li>Purchase</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Classes</h3>
            <ul className={styles.linkList}>
              <li>Our Classes</li>
              <li>Enroll</li>
              <li>Students Art</li>
            </ul>
          </div>
        </div>
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <div className={styles.contactItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b892d910b27019280fe8a4ec28ca79cc3262d97d5326101f0b1427bfaee15b8b?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
              alt="Phone"
              className={styles.contactIcon}
            />
            <span>+91 93451 41877</span>
          </div>
          <div className={styles.contactItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5985dbc28b47489cffd5e64db91f9eb28b591c4f0c4e377a988c01684fff171a?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
              alt="Location"
              className={styles.contactIcon}
            />
            <span>virudhunagar/ chennai (vadapalani)</span>
          </div>
          <div className={styles.contactItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0991870dcb11968590ec2a0ddf341fff4ca5aa9790353c92669ea9c2375e9f6?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
              alt="Email"
              className={styles.contactIcon}
            />
            <span>Arasiarts@gmail.com</span>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          Copyright © 2024 Arasi Arts. All Rights Reseved.
        </p>
        <div className={styles.socialIcons}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f000fd77c54c01801ab0b6d670198e114f0c4c4f5798b56ca6dc91ddbc5cfe4e?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Social Icon 1"
            className={styles.socialIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1f56137dadadfdd633c22e505ec0d25ef65f58d0f5b98fde91a553e12964650?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Social Icon 2"
            className={styles.socialIcon}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
