import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-c.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "yril";
  const jobArray = "web developer.";

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass("text-animate-bouncy");
    }, 4000);

    return () => clearTimeout(idTimeOut);
  }, []);

  const hoverHandler = (e) => {
    if (document.querySelector(`.text-animate-bouncy._${e}`)) {
      const bouncy = document.querySelector(`.text-animate-bouncy._${e}`);
      bouncy.classList.add("text-animate-bouncing");
      bouncy.addEventListener("animationend", () => {
        bouncy.classList.remove("text-animate-bouncing");
      });
    }
  };

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span
            className={`${letterClass} _11`}
            onMouseEnter={() => hoverHandler("11")}
          >
            H
          </span>
          <span
            className={`${letterClass} _12`}
            onMouseEnter={() => hoverHandler("12")}
          >
            i,
          </span>
          <br />
          <span
            className={`${letterClass} _13`}
            onMouseEnter={() => hoverHandler("13")}
          >
            I
          </span>
          <span
            className={`${letterClass} _14`}
            onMouseEnter={() => hoverHandler("14")}
          >
            'm
          </span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            str={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            str={jobArray}
            index={22}
          />
        </h1>
        <h2>Frontend Developer / Javascript Expert / Youtuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
