import React, {useRef} from "react";
import "./home.css";
import Explore from "../components/Explore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { header } from "../assets/assets";
import BirthdayComp from "../components/BirthdayComp";
import AnnivComp from "../components/AnnivComp";
import WeddingComp from "../components/WeddingComp";
import PageTransition from "../components/PageTransition";


const Home = () => {
  const homeRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(homeRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
      .from("img", {
        y: 100,
        opacity: 0,
        duration: 0.5,
      })
      .from("h1", {
        y: 50,
        opacity: 0,
      })
      .from("button", {
        opacity: 0,
        duration: 1,
        scale: 0,
      });
  }, []);

  return (
    <PageTransition>
      <div className="homepage">
        <div className="home" ref={homeRef}>
          <div className="content">
            <div className="main-content">
              <h1>Every Flower tells a Story and a Token of love</h1>
              <img src={header} alt="" />
            </div>
            <div className="butn">
              <button className="butnele">
                <a href="#explore-section">Explore</a>
              </button>
            </div>
          </div>
        </div>
        <Explore />
        <BirthdayComp />
        <WeddingComp />
        <AnnivComp />
      </div>
    </PageTransition>
  );
};

export default Home;
