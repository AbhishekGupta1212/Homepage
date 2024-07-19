import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfe2e2cc9aaa6d6e4121863a34bd5e55adeb1f99ef5ed1878d0a35d53e75b2dc?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt="Hero Image 1"
          className={styles.heroImage1}
        />
        <div className={styles.heroTextContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5afa94fdd72d41bd5c36005d34450f9d3e4afa75522c29c8c78754a2fa27af?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt=""
            className={styles.decorativeImage}
          />
          <h1 className={styles.heroTitle}>
            WELCOME TO
            <span className={styles.heroTitleHighlight}>
              ARASI
              <br />
              ARTS
            </span>
          </h1>
          <button className={styles.ctaButton}>Buy Now</button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c2efef80eccf00cce30eb0c1c5e3adc9bc482b55cd1067616fe4e9b952a1c98?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt=""
            className={styles.decorativeImage}
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f711cfd241755ec654a0f4bc6b921687c0a653eb936837fd61610be94e589526?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt="Hero Image 2"
          className={styles.heroImage2}
        />
      </div>
    </section>
  );
};

export default Hero;
