import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-c.png";
import imgProfil from "../../assets/images/img-profil.png";
import { NavLink } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import TransitionEffect from "../../components/TransitionEffect";
import CardHoverEffect from "../../components/CardHoverEffect";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import shapePolygon from "../../assets/images/shape-polygon.png";

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
          <CardHoverEffect shape={shapePolygon}>
            <div className="image-zone">
              <img src={imgProfil} alt="profil" loading="lazy"></img>
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
              <h2>Développement Frontend / UX & UI Design </h2>
              <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
              >
                <motion.button
                  className="main-button"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "0.5rem" }}
                  />
                  Contact
                </motion.button>
              </NavLink>
            </div>
          </CardHoverEffect>
        </div>
      </TransitionEffect>
    </>
  );
};

export default Home;
