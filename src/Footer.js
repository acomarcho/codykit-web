import React from "react";
import LogoText from "./images/logo-text.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <img src={LogoText} alt="" className="footer-logo" />
            <p className="footer-text">
              The first coding based learning toy in Indonesia.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-link">
              <HashLink to="/#home">Beranda</HashLink>
            </div>
            <div className="footer-link">
              <HashLink to="/#products">Produk</HashLink>
            </div>
            <div className="footer-link">
              <Link to="/downloads">Downloads</Link>
            </div>
            <div className="footer-link">
              <Link to="/video">Video</Link>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="footer-copyright">Copyright &copy; 2021</p>
          <div className="footer-btn-container">
            <a
              href="https://www.instagram.com/codykit.id/"
              target="_blank"
              rel="noreferrer"
              className="footer-instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCuxsr6RxDFnEd8mxNRb-5Hw"
              target="_blank"
              rel="noreferrer"
              className="footer-instagram"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
