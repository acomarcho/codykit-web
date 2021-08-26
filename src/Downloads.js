import React from "react";
import Arm from "./images/arm.png";
import Mobile from "./images/mobile.png";
import ColorSorter from "./images/colorsorter.png";
import PetunjukUSB from "./images/petunjuk-usbdriver.png";
import PetunjukArdublockly from "./images/petunjuk-ardublockly.png";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Downloads = ({ dispatch }) => {
  return (
    <>
      <ScrollAnimation animateIn="zoomIn">
        <section className="downloads-section">
          <div className="downloads-container">
            <div className="section-title">
              <h1>Modul</h1>
            </div>
            <div className="product-cards-container">
              <Link
                to="/downloads"
                className="download-card"
                onClick={() => {
                  dispatch({
                    type: "SHOW_ALERT",
                    payload: {
                      alertText: "Produk masih dalam masa pengembangan.",
                    },
                  });
                }}
              >
                <div className="product-card">
                  <img src={ColorSorter} alt="arm" class="product-img" />
                </div>
                <h3 className="download-title">Modul Color Sorter</h3>
              </Link>
              <Link
                to="/downloads"
                className="download-card"
                onClick={() => {
                  dispatch({
                    type: "SHOW_ALERT",
                    payload: {
                      alertText: "Produk masih dalam masa pengembangan.",
                    },
                  });
                }}
              >
                <div className="product-card">
                  <img src={Mobile} alt="arm" class="product-img" />
                </div>
                <h3 className="download-title">Modul Mobile Robot</h3>
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1492KVqIJSxROBaYd3NqXdpkFUreLnkuU?usp=sharing "
                className="download-card"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-card">
                  <img src={Arm} alt="arm" class="product-img" />
                </div>
                <h3 className="download-title">Modul Arm Robot</h3>
              </a>
            </div>
          </div>
          <div className="mouse"></div>
        </section>
      </ScrollAnimation>
      <section className="softwares-section">
        <div className="softwares-container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="section-title">
              <h1>Software</h1>
            </div>
            <p className="softwares-subtitle">
              Cody Core pada Cody Kit menggunakan board Arduino sehingga untuk
              dapat memprogram Cody Core kamu harus menginstall software dan
              driver berikut.
            </p>
          </ScrollAnimation>
          <div className="software-cards-container">
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="software-card">
                <h1 className="sc-title">Arduino IDE</h1>
                <div className="sc-contents">
                  <p>
                    Arduino IDE adalah software untuk mengkompilasi dan
                    mengupload kode program ke board Arduino.
                  </p>
                  <p>
                    Download Arduino IDE pada tombol di bawah kemudian install
                    seperti biasa.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1UGAV61MAcuuKneFEjWyizPcSuB29ABLZ/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="sc-download-btn"
                >
                  Download
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight">
              <div className="software-card">
                <h1 className="sc-title">USB Driver</h1>
                <div className="sc-contents">
                  <p>
                    Agar board Arduino pada Cody Core kamu dapat terbaca oleh
                    port USB pada komputer atau laptop, kamu harus menginstall
                    USB driver.
                  </p>
                  <p>
                    Download USB driver pada tombol di bawah. Setelah selesai,
                    ekstrak file yang sudah kamu download dan jalankan file
                    setup.exe.
                  </p>
                  <p>
                    Installer USB driver akan terbuka kemudian tekan tombol
                    install.
                  </p>
                  <img
                    src={PetunjukUSB}
                    alt="Petunjuk USB Driver"
                    className="usb-img"
                  />
                </div>
                <a
                  href="https://drive.google.com/file/d/1JIxaAdrUtUBxW8j4YRKfopK6VjGuKsYT/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="sc-download-btn"
                >
                  Download
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="software-card">
                <h1 className="sc-title">Ardublockly</h1>
                <div className="sc-contents">
                  <p>
                    Ardublockly adalah software visual programming untuk Arduino
                    yang akan kamu gunakan untuk memprogram Cody Core kamu.
                    Dengan software ini kamu dapat memprogram Cody Core dengan
                    cara memindahkan balok-balok seperti puzzle tanpa menulis
                    kode program.
                  </p>
                  <p>
                    Download Ardublockly pada tombol di bawah. Setelah selesai,
                    ekstrak file ardublockly yang sudah kamu download.
                  </p>
                  <p>
                    Untuk membuka software Ardublockly, jalankan file
                    ardublockly_run.bat dengan cara klik dua kali pada file
                    tersebut
                  </p>
                  <img
                    src={PetunjukArdublockly}
                    alt="Petunjuk Ardublockly"
                    className="ardublockly-img"
                  />
                </div>
                <a
                  href="https://drive.google.com/file/d/12SpUfLF6TaJ8Vd7g1WlWuJF2y-QU8Qf1/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="sc-download-btn"
                >
                  Download
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Downloads;
