
import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import FeaturedCollection from "./Components/FeaturedCollection/FeaturedCollection";
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import ArtistFeature from "./Components/ArtistFeature/ArtistFeature";
import Features from "./Components/Features/Features";
import ArtClasses from "./Components/ArtClasses/ArtClasses";
import ContactForm from "./Components/ContactForm/ContactForm";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <NewArrivals />
        <ArtistFeature />
        <Features />
        <ArtClasses />
        <ContactForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
