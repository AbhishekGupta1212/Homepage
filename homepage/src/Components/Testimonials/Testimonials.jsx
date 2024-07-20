import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>This Is What Our Customers Say</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
      </p>
      <div className={styles.testimonialSlider}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62340f46f4cdd285aad0a27dd9e1095aa6ad3aad0a70da1e3899e377e49c4c42?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
          alt="Customer Testimonial"
          className={styles.testimonialImage}
        />
      </div>
      {/* <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/01aa3ebf3c241dae702c706c5e8e33d450bcf90046b873302b62882f8901cea5?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
        alt=""
        className={styles.decorativeImage}
      /> */}
    </section>
  );
};

export default Testimonials;
