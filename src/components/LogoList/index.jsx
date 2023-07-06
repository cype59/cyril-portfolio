import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import MotionEffect from "../MotionEffect";

const LogoList = ({ name, logo, delay }) => {
  return (
    <MotionEffect delay={delay}>
      <li>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={logo} alt="logo-react"></img>
          <div className="logo-name">{name}</div>
        </motion.div>
      </li>
    </MotionEffect>
  );
};

export default LogoList;
