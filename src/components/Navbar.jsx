import React, { useContext, useEffect, useRef, useState } from "react";
import { logo } from "../assets/assets.js";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navRef = useRef();
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setActiveLink(path || "home");
    setMenuOpen(false); // close menu on page change
  }, [location.pathname]);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const handleNavClick = (page) => {
    setActiveLink(page);
    navigate(`/${page === "home" ? "" : page}`);
    setMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="navbar">
  {/* Left: Hamburger (mobile only) */}
  <div className="left-nav">
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </div>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  </div>

  {/* Center: Nav Links */}
  <div className={`links ${menuOpen ? "mobile-show" : ""}`}>
    {["home", "birthday", "wedding", "anniversary", "flowers"].map((page) => (
      <a
        key={page}
        href="#"
        className={activeLink === page ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(page);
        }}
      >
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </a>
    ))}
  </div>

  {/* Right: Cart */}
  <div className="nav-right">
    <div
      className={`cart ${activeLink === "cart" ? "cart-active" : ""}`}
      onClick={() => handleNavClick("cart")}
    >
      <FaCartShopping
        className={`icon ${activeLink === "cart" ? "icon-active" : ""}`}
      />
      <div className="circle">{cart.length}</div>
    </div>
  </div>
</nav>


  );
};

export default Navbar;
