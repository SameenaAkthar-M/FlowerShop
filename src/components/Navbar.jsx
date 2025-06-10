import React, { useContext, useEffect, useRef, useState } from "react";
import { logo } from "../assets/assets.js";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TiHeartOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navRef = useRef();
  const iconsRef = useRef();
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setActiveLink(path || "home");
  }, [location.pathname]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      .from(".logo", {
        opacity: 0,
        scale: 0,
      })
      .from(".links a", {
        opacity: 0,
        y: -20,
        stagger: 0.15,
      })
      .from(
        gsap.utils.toArray(".nav-right > *:not(.cart)"),
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
        },
        "-=0.2"
      )
      .from(
        ".cart",
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <a
          href="#"
          className={activeLink === "home" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("home");
            navigate("/");
          }}
        >
          Home
        </a>
        <div className="birthday">
          <a
            href="#"
            className={activeLink === "birthday" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActiveLink("birthday");
              navigate("/birthday");
            }}
          >
            Birthday
          </a>
        </div>
        <a
          href="#"
          className={activeLink === "wedding" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("wedding");
            navigate("/wedding");
          }}
        >
          Wedding
        </a>
        <a
          href="#"
          className={activeLink === "anniversary" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("anniversary");
            navigate("/anniversary");
          }}
        >
          Anniversary
        </a>
        <a
          href="#"
          className={activeLink === "flowers" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("flowers");
            navigate("/flowers");
          }}
        >
          Flowers
        </a>
      </div>
      <div className="nav-right" ref={iconsRef}>
        <div
          className={`cart ${activeLink === "cart" ? "cart-active" : ""}`}
          onClick={() => {
            setActiveLink("cart");
            navigate("/cart");
          }}
        >
          <FaCartShopping
            className={`icon ${activeLink === "cart" ? "icon-active" : ""}`}
          />
          <div className="circle">{cart.length}</div>
        </div>
        <CgProfile className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
