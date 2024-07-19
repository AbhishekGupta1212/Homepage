
import React from "react";
import styles from "./Features.module.css";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8e8febb5d731912446c2692d5850ff5e9cfe8cf46d8aad34dccdc27ce3d0516?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "High Quality",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3cd87d578ec5a02ce18d7a345c575adb2e0a5f27c65fdafd2bfb403ab97f8e9?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "Warrany Protection",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00081759b220495bc5cb45890a0f93fb22d65e4a793c776a3fdff8d6b0893e9a?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
    title: "24 / 7 Support",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <img
            src={feature.icon}
            alt={feature.title}
            className={styles.featureIcon}
          />
          <span className={styles.featureTitle}>{feature.title}</span>
        </div>
      ))}
    </section>
  );
};

export default Features;
