
import React from "react";
import styles from "./ArtClasses.module.css";

const artStyles = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/151a55ded49e461e05be1fa43f7826c86e2bbf259a95ec1d53dce04bc72abddb?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/4759a8a21201351831f919ce4f5d7906ab46d1c3e5243da176161e632b915cc3?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a7f86b93440b865e2db25dee1857b33752b28a1bc309e3b0e280ebd5059e5a9f?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
  // "https://cdn.builder.io/api/v1/image/assets/TEMP/b74f81741e77da933e26a297edc9fa8ea33a7f25972562ea89e78755d54d5e77?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
  // "https://cdn.builder.io/api/v1/image/assets/TEMP/f958f29d1643c0a4df2878c86104a0e8ca64180034488947164901e887948423?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
  // "https://cdn.builder.io/api/v1/image/assets/TEMP/451abec2c5c885904062d07c901e315ffde43e9b47e6ba93410f5c2c830fe887?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
  // "https://cdn.builder.io/api/v1/image/assets/TEMP/672257bf90ede9dc7b70551d09d58db437ab74c59aaf738a0444e51bd9b893e2?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&",
];

const ArtClasses = () => {
  return (
    <section className={styles.artClasses}>
      <h2 className={styles.title}>are you an aspiring artist</h2>
      <p className={styles.description}>
        learn Tanjore Painting , Relief Art , Kerala Mural , fridge Magnet ,
        single store painting , Knife Painting and various other techniques.
        Enroll in a class today
      </p>
      <div className={styles.artStylesGrid}>
        {artStyles.map((style, index) => (
          <img
            key={index}
            src={style}
            alt={`Art Style ${index + 1}`}
            className={styles.artStyleImage}
          />
        ))}
      </div>
    </section>
  );
};

export default ArtClasses;
