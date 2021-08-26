import React, { useState } from "react";
import colorSorter from "./images/colorsorter.png";
import shopee from "./images/shopee.png";
import bukalapak from "./images/bukalapak.png";
import tokopedia from "./images/tokopedia.png";
import ScrollAnimation from "react-animate-on-scroll";

const ColorSorter = ({ dispatch }) => {
  const [beli, setBeli] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <ScrollAnimation animateIn="zoomIn">
      <section className="product-section">
        <div className="product-container">
          <div className="product-preview-container">
            <div
              className="product-preview-large"
              onClick={() =>
                dispatch({ type: "SHOW_MODAL", payload: { img: colorSorter } })
              }
            >
              <img src={colorSorter} alt="arm robot" />
            </div>
          </div>
          <div className="product-info-container">
            <div className="section-title">
              <h1>Seri Color Sorter</h1>
            </div>
            <div className="product-tabs">
              <button
                className={`product-tab ${tab === 0 ? "active" : null}`}
                onClick={() => setTab(0)}
              >
                Deskripsi
              </button>
              <button
                className={`product-tab ${tab === 1 ? "active" : null}`}
                onClick={() => setTab(1)}
              >
                Detail
              </button>
              <button
                className={`product-tab ${tab === 2 ? "active" : null}`}
                onClick={() => setTab(2)}
              >
                Petunjuk
              </button>
            </div>
            <div className="product-info">
              {tab === 0 && (
                <p>
                  Color Sorter merupakan permainan menyortir benda berdasarkan
                  warna. Pada CodyKit Color Sorter, anak dapat memisahkan permen
                  warna warni sesuai warnanya yang diatur dengan pemrograman
                  sederhana.
                </p>
              )}
              {tab === 1 && (
                <p>
                  Produk Color Sorter ini masih dalam tahap pengembangan.
                  Silakan untuk mengecek di lain waktu.
                </p>
              )}
              {tab === 2 && (
                <p>
                  Produk Color Sorter ini masih dalam tahap pengembangan.
                  Silakan untuk mengecek di lain waktu.
                </p>
              )}
            </div>
            <div className="product-button-container">
              <div className="product-button-relative">
                <div className={`shop-icon-container ${beli ? "show" : null}`}>
                  <a href="/" className="shop-icon">
                    <img src={tokopedia} alt="tokopedia" />
                  </a>
                  <a href="/" className="shop-icon">
                    <img src={shopee} alt="shopee" />
                  </a>
                  <a href="/" className="shop-icon">
                    <img src={bukalapak} alt="bukalapak" />
                  </a>
                </div>
                <button
                  className={`btn-beli ${beli ? "hide" : null}`}
                  onClick={() => setBeli(false)}
                >
                  Produk belum dijual
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ColorSorter;
