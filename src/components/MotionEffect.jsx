import React from "react";
import { motion } from "framer-motion";

const MotionEffect = (props) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeOut", delay: props.delay, duration: 0.75 }}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionEffect;
