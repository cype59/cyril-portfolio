import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-c.png";
import imgProfil from "../../assets/images/img-profil.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import TransitionEffect from "../TransitionEffect";
import CardHoverEffect from "../CardHoverEffect";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const word1 = "Hey,";
  const word2 = "je suis";
  const word3 = "yril";
  const word4 = "développeur web.";

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass("text-animate-bouncy");
    }, 4000);

    return () => clearTimeout(idTimeOut);
  }, []);

  return (
    <>
      <TransitionEffect>
        <div className="container home-page">
          {/* <CardHoverEffect> */}
            <div className="image-zone">
              <img src={imgProfil} alt="profil"></img>
            </div>
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  str={word1}
                  index={0}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  str={word2}
                  index={word1.length}
                />
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters
                  letterClass={letterClass}
                  str={word3}
                  index={word1.length + word2.length}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  str={word4}
                  index={word1.length + word2.length + word3.length}
                />
              </h1>
              <h2>Frontend Developer / Javascript Expert / Youtuber</h2>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
          {/* </CardHoverEffect> */}
        </div>
      </TransitionEffect>
    </>
  );
};

export default Home;
