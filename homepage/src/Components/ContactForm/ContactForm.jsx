import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>collect your piece of inspiration</h2>
          <p className={styles.description}>
            "Discover your piece of inspiration within our curated collection,
            showcasing captivating works from both renowned and emerging
            artists."
          </p>
          <form className={styles.form}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Mail Id"
              className={styles.input}
            />
            <textarea
              placeholder="Comment Here"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Register Here
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eba514860599edd9d29688699b93abc1b95cdba45c9fad86e3385aee53d68cc9?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            alt="Inspirational Artwork"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
