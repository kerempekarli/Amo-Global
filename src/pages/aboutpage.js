import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Hero from "../components/about/hero";
import Section1 from "../components/about/section1";
export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  }, []);
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Footer></Footer>
    </div>
  );
}
