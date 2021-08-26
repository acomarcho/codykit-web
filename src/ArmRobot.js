import React, { useState } from "react";
import armRobot from "./images/arm.png";
import armRobot2 from "./images/arm-2.png";
import armRobot3 from "./images/arm-3.png";
import shopee from "./images/shopee.png";
import bukalapak from "./images/bukalapak.png";
import tokopedia from "./images/tokopedia.png";
import ScrollAnimation from "react-animate-on-scroll";

const ArmRobot = ({ dispatch }) => {
  let img1 = armRobot;
  let img2 = armRobot2;
  let img3 = armRobot3;

  const [beli, setBeli] = useState(false);
  const [tab, setTab] = useState(0);

  const [prevLarge, setPrevLarge] = useState(img1);

  return (
    <ScrollAnimation animateIn="zoomIn">
      <section className="product-section">
        <div className="product-container">
          <div className="product-preview-container arm-robot-preview-container">
            {prevLarge === img1 && (
              <div
                className="product-preview-large"
                onClick={() =>
                  dispatch({ type: "SHOW_MODAL", payload: { img: prevLarge } })
                }
              >
                <img src={prevLarge} alt="arm robot" />
              </div>
            )}
            {prevLarge === img2 && (
              <div
                className="product-preview-large"
                onClick={() =>
                  dispatch({ type: "SHOW_MODAL", payload: { img: prevLarge } })
                }
              >
                <img src={prevLarge} alt="arm robot" />
              </div>
            )}
            {prevLarge === img3 && (
              <div
                className="product-preview-large"
                onClick={() =>
                  dispatch({ type: "SHOW_MODAL", payload: { img: prevLarge } })
                }
              >
                <img src={prevLarge} alt="arm robot" />
              </div>
            )}
            <div className="product-preview-small-container">
              <div
                className="product-preview-small"
                onClick={() => setPrevLarge(img1)}
              >
                <img src={img1} alt="arm robot" />
              </div>
              <div
                className="product-preview-small"
                onClick={() => setPrevLarge(img2)}
              >
                <img src={img2} alt="color sorter" />
              </div>
              <div
                className="product-preview-small"
                onClick={() => setPrevLarge(img3)}
              >
                <img src={img3} alt="mobile container" />
              </div>
            </div>
            <button
              className="btn-video"
              onClick={() => dispatch({ type: "SHOW_ARM_VIDEO" })}
            >
              Lihat Video
            </button>
          </div>
          <div className="product-info-container">
            <div className="section-title">
              <h1>Seri Arm Robot</h1>
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
                  Arm robot merupakan lengan mekanis yang berfungsi seperti
                  tangan dan dapat mengendalikan gerakannya untuk mengambil
                  barang dan memindahkannya.
                </p>
              )}
              {tab === 1 && (
                <p>
                  Kit Arm Robot ini disusun dari serbuk kayu yang dipadatkan
                  sehingga ramah lingkungan, berkualitas tinggi, tidak mudah
                  patah, dan mudah dibentuk.
                </p>
              )}
              {tab === 2 && (
                <p>
                  Untuk petunjuk lebih lanjut mengenai penggunaan Kit Arm Robot,
                  silakan cek halaman Downloads.
                </p>
              )}
            </div>
            <div className="product-button-container">
              <div className="product-button-relative">
                <div className={`shop-icon-container ${beli ? "show" : null}`}>
                  <a
                    href="https://www.tokopedia.com/akubahagiashop/mainan-edukasi-anak-arm-lengan-tangan-robot-cody-kit"
                    target="_blank"
                    rel="noreferrer"
                    className="shop-icon"
                  >
                    <img src={tokopedia} alt="tokopedia" />
                  </a>
                  <a
                    href="https://shopee.co.id/product/166602376/10128093532/"
                    target="_blank"
                    rel="noreferrer"
                    className="shop-icon"
                  >
                    <img src={shopee} alt="shopee" />
                  </a>
                  <a
                    href="https://www.bukalapak.com/p/hobi-koleksi/mainan/mainan-lainnya/4gcc5km-jual-mainan-edukasi-anak-arm-atau-lengan-robot-cody-kit"
                    target="_blank"
                    rel="noreferrer"
                    className="shop-icon"
                  >
                    <img src={bukalapak} alt="bukalapak" />
                  </a>
                </div>
                <button
                  className={`btn-beli ${beli ? "hide" : null}`}
                  onClick={() => setBeli(true)}
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ArmRobot;
