import React from "react";
import "./index.scss";
import TransitionEffect from "../TransitionEffect";
import CardHoverEffect from "../CardHoverEffect";
import shapeTriangle from "../../assets/images/shape-triangle.png";
import MotionEffect from "../MotionEffect";
import AnimatedWords from "../AnimatedWords";
import imgCv from "../../assets/images/cv-pierron-cyril.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cyrilPdf from "../../assets/images/cv-pierron-cyril.pdf";
import LogoList from "../LogoList";
import logoReact from "../../assets/images/react.png";
import logoRedux from "../../assets/images/redux.png";
import logoHtml from "../../assets/images/html.png";
import logoCss from "../../assets/images/css.png";
import logoJs from "../../assets/images/javascript.png";
import logoTs from "../../assets/images/typescript.png";
import logoNode from "../../assets/images/node.png";
import logoNext from "../../assets/images/nextjs.png";
import logoExpress from "../../assets/images/expressjs.png";
import logoStrapi from "../../assets/images/strapi.png";
import logoSql from "../../assets/images/sql.png";
import logoPhotoshop from "../../assets/images/photoshop.png";
import logoAdobexd from "../../assets/images/adobexd.png";

const Skills = () => {
  const onDownloadPdf = () => {
    // using Java Script method to get PDF file
    fetch(cyrilPdf).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = cyrilPdf;
        alink.setAttribute("download", `cv-cyril-pierron.pdf`);
        alink.click();
      });
    });
  };
  return (
    <>
      <TransitionEffect>
        <div className="container skills-page">
          <CardHoverEffect shape={shapeTriangle}>
            <div className="text-zone">
              <MotionEffect delay={1}>
                <h1>
                  <AnimatedWords
                    wordsArray={["Mes", " ", "compétences"]}
                    index={15}
                  />
                </h1>
              </MotionEffect>
              <MotionEffect delay={1.2}>
                <h2>Frontend : </h2>
              </MotionEffect>
              <ul className="logo-list">
                <LogoList logo={logoHtml} name="Html" delay={1.4} />
                <LogoList logo={logoCss} name="Css" delay={1.5} />
                <LogoList logo={logoReact} name="React" delay={1.6} />
                <LogoList logo={logoRedux} name="Redux" delay={1.7} />
                <LogoList logo={logoNext} name="Nextjs" delay={1.8} />
                <LogoList logo={logoJs} name="Javascript" delay={1.9} />
                <LogoList logo={logoTs} name="Typescript" delay={2} />
              </ul>
              <MotionEffect delay={2.1}>
                <h2>Backend : </h2>
              </MotionEffect>
              <ul className="logo-list">
                <LogoList logo={logoNode} name="Nodejs" delay={2.2} />
                <LogoList logo={logoExpress} name="Express" delay={2.3} />
                <LogoList logo={logoStrapi} name="Strapi" delay={2.4} />
                <LogoList logo={logoSql} name="SQL" delay={2.5} />
              </ul>
              <MotionEffect delay={2.6}>
                <h2>Graphisme : </h2>
              </MotionEffect>
              <ul className="logo-list">
                <LogoList logo={logoPhotoshop} name="Photoshop" delay={2.7} />
                <LogoList logo={logoAdobexd} name="Adobe XD" delay={2.8} />
              </ul>
            </div>
            <div className="cv-zone">
              <img src={imgCv} alt="cv"></img>
              <motion.button
                className="main-button"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={onDownloadPdf}
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ marginRight: "0.5rem" }}
                />
                Télécharger
              </motion.button>
            </div>
          </CardHoverEffect>
        </div>
      </TransitionEffect>
    </>
  );
};

export default Skills;
