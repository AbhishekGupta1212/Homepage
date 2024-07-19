import React from "react";
import styles from "./ArtistFeature.module.css";

const ArtistFeature = () => {
  return (
    <section className={styles.artistFeature}>
      <div className={styles.imageContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80105262776a77c97a6289eecf693c35dfdb12c99f89434c44c1c26f0e9db9f7?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt="Artist Background"
          className={styles.backgroundImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0e419dfa1401850f0bd78bdac735eca6f55dbca1ad9f27f6a8c1348afc6a79?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt="Artist Logo"
          className={styles.artistLogo}
        />
      </div>
      <div className={styles.contentContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f63359ea1ab3b0be6d910036b4ab3c385a389a7b38cf95fd636c9e61d6007992?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt=""
          className={styles.decorativeBackground}
        />
        <h2 className={styles.title}>about the artist</h2>
        <p className={styles.description}>
          meet our artist mrs. elavarasi chokkar. she has been an artist since
          childhood has learned various painting techniques. she has also
          conducted art classes for the past 33 years. in the past five years,
          she has helped numerous women in virudhunagar learn art for free.
          sound inspiring right? from tanjore painting to contemporary art ,
          elavarasi has created various art piece with utmost care and
          attention. check out her collection now!
        </p>
        <button className={styles.ctaButton}>Buy Now</button>
      </div>
    </section>
  );
};

export default ArtistFeature;
