import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const PortfolioCard = ({ name, image, description, delay, link }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", delay: delay, duration: 1 }}
    >
      <div className="portfolio-card">
        <img src={image} alt={name} loading="lazy"/>
        <hr />
        <h1>{name}</h1>
        <h2>{description}</h2>
        <NavLink
          exact="true"
          activeclassname="active"
          className={link + "-link"}
          to={"/" + link}
        >
          <motion.button
            className="main-button"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            style={{ fontSize: "0.8rem" }}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "0.5rem" }} />
            Plus d'infos
          </motion.button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
