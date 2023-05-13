import Hero from "../components/home/Hero";
import Header from "../components/header";
import Section1 from "../components/home/section1";
import Services from "../components/home/services";
import ServicesSlider from "../components/home/ServicesSlider";
import Footer from "../components/Footer";

import React, { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  }, []);
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Services></Services>
      <ServicesSlider></ServicesSlider>
      <Footer></Footer>
    </div>
  );
}
