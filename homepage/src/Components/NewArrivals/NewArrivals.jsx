
import React from "react";
import styles from "./NewArrivals.module.css";

const categories = [
  "Tanjore Painting",
  "Finger Painting",
  "Resin Painting",
  "Relief Art",
  "Mossaic painting",
];

const products = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a6853dd09b466fddfafcfa2b408f79a7720acfbca26b1a7aa464b681a89421bf?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "Finger Painting",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39161383d659c2cbd4f7f42ed3260c005e5df6cb362f11986a7eae5bb59ac1d5?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "Finger Painting",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55061b0025921c0419e0899d3b22a879bce80eb5cac5314dde7909bcc0343dcd?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "Finger Painting",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c19f697145305188f1026b8b75fe030a540cf01d5b80a035e010cd794e23a9d0?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "Finger Art",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3430fa43d7496c3819c0891c03f9491fb997d72042ac9464a6d969fe50647b08?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "finger Painting",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/05e51719ebef84f0eb720be3ca809dc784f6ce0329f729d06eb7c868d7846182?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "Finger Painting",
  },
];

const NewArrivals = () => {
  return (
    <section className={styles.newArrivals}>
      <h2 className={styles.title}>New Arrivals</h2>
      <p className={styles.subtitle}>
        Check out our extensive product collection and buy them now!
      </p>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryButton} ${
              index === 1 ? styles.active : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c61eec141392ff354bf8f3b4dbdf5c9655fdba9bed43b3e2db05468c7cfe956?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
              alt=""
              className={styles.productRating}
            />
          </div>
        ))}
      </div>
      <button className={styles.viewMoreButton}>View More</button>
    </section>
  );
};

export default NewArrivals;
