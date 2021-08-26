import React from "react";
import { Link } from "react-router-dom";
import Arm from "./images/arm.png";
import Mobile from "./images/mobile.png";
import ColorSorter from "./images/colorsorter.png";
import ScrollAnimation from "react-animate-on-scroll";

const Products = () => {
  return (
    <ScrollAnimation animateIn="fadeInRight">
      <section className="products-section" id="products">
        <div className="products-container">
          <div className="section-title">
            <h1>Produk Kami</h1>
          </div>
          <div className="product-cards-container">
            <Link to="/colorsorter" className="download-card">
              <div className="product-card">
                <img src={ColorSorter} alt="arm" class="product-img" />
                <div className="product-overlay">
                  <div className="product-button">Cek Produk</div>
                </div>
              </div>
              <h3 className="download-title">Color Sorter</h3>
            </Link>
            <Link to="/mobilerobot" className="download-card">
              <div className="product-card">
                <img src={Mobile} alt="arm" class="product-img" />
                <div className="product-overlay">
                  <div className="product-button">Cek Produk</div>
                </div>
              </div>
              <h3 className="download-title">Mobile Robot</h3>
            </Link>
            <Link to="/armrobot" className="download-card">
              <div className="product-card">
                <img src={Arm} alt="arm" class="product-img" />
                <div className="product-overlay">
                  <div className="product-button">Cek Produk</div>
                </div>
              </div>
              <h3 className="download-title">Arm Robot</h3>
            </Link>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Products;
