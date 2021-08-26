import React, { useState, useRef } from "react";
import LogoKecil from "./images/logo-kecil.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const openNav = () => {
    linksContainerRef.current.style.height = `${
      linksRef.current.getBoundingClientRect().height
    }px`;
    setNavToggle(true);
  };

  const closeNav = () => {
    setNavToggle(false);
    linksContainerRef.current.style.height = 0;
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-header">
          <HashLink to="/#home" onClick={() => closeNav()}>
            <div className="nav-logo">
              <img src={LogoKecil} alt="logo" />
            </div>
          </HashLink>
          <button
            className="nav-toggle"
            onClick={() => (navToggle ? closeNav() : openNav())}
          >
            <FaBars />
          </button>
        </div>
        <div className="nav-links-container" ref={linksContainerRef}>
          <div className="nav-links" ref={linksRef}>
            <div className="nav-link">
              <HashLink to="/#products" onClick={() => closeNav()}>
                Produk
              </HashLink>
            </div>
            <div className="nav-link">
              <Link to="/downloads" onClick={() => closeNav()}>
                Downloads
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/video" onClick={() => closeNav()}>
                Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
