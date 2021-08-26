import React from "react";
import LogoText from "./images/logo-text.png";
import GambarProduk from "./images/gambarProduk.png";
import ScrollAnimation from "react-animate-on-scroll";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <ScrollAnimation animateIn="fadeInLeft">
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-image">
            <img src={GambarProduk} alt="gambar produk" />
          </div>
          <div className="hero-info">
            <img src={LogoText} alt="logo" className="hero-title" />
            <p className="hero-subtitle">
              The first coding based learning toy in Indonesia.
            </p>
            <p className="hero-sub-subtitle">
              Cody Kit merupakan mainan edukasi berupa kit proyek yang dirakit
              dan di program sendiri oleh anak sesuai keinginannya. Cody Kit
              dapat diprogram dengan bahasa pemrograman berbasis visual blok
              sehingga mudah dipahami oleh anak. Cody Kit dapat melatih
              computational thinking juga emotional intelligence.
            </p>
            <HashLink to="/#products" className="hero-btn">
              Lihat Produk
            </HashLink>
          </div>
        </div>
        <div className="mouse"></div>
      </section>
    </ScrollAnimation>
  );
};

export default Hero;
