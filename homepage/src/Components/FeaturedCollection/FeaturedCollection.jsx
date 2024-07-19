import React from "react";
import styles from "./FeaturedCollection.module.css";

const FeaturedCollection = () => {
  return (
    <section className={styles.featuredCollection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Check out our
            <br />
            modern collections
          </h2>
          <p className={styles.description}>
            "Explore our collection of exquisite artwork, featuring diverse
            styles and mediums from renowned and emerging artists."
          </p>
          <button className={styles.ctaButton}>Buy Now</button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c611442c8bbf7563843ba7fed51faa4979431228bbd6e102cae49ce1f824924c?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt=""
            className={styles.decorativeImage}
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7674007f4724d2b03b54dbfefbf4e98f5c1892ac268bd8c7a7add15c1461c56?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Pencil Portrait"
            className={styles.mainImage}
          />
          <div className={styles.imageLabel}>
            Pencil
            <br />
            Portrait
          </div>
        </div>
        <div className={styles.additionalImages}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52caa06f94e6668aa4bb364512851331c2e259aea1820ad809005a3a5e8c38a5?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Additional Artwork 1"
            className={styles.additionalImage1}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3417a034a508960e659642d21622f85c94393e9409967c8b2ee953be6340fba1?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Additional Artwork 2"
            className={styles.additionalImage2}
          />
          <div className={styles.imageDots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
