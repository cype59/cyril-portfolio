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


const Skills = () => {
  const onDownloadPdf = () => {
    // using Java Script method to get PDF file
    fetch(cyrilPdf).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = cyrilPdf;
            alink.setAttribute(
              'download',
              `cv-cyril-pierron.pdf`,
            );
            alink.click();
        })
    })
}
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
