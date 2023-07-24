import "./index.scss";
import React, { useState, useEffect } from "react";

const AnimatedLetters = ({ letterClass, str, index }) => {
  
  const strArray = str.split("");
  const [isBouncing, setIsBouncing] = useState(false);
  const [indexBouncing, setIndexBouncing] = useState(null);

  const hoverHandler = (e) => {
    setIsBouncing(true);
    setIndexBouncing(e);
  };

  useEffect(() => {
    if (
      isBouncing &&
      document.querySelector(`.text-animate-bouncy._${indexBouncing}`)
    ) {
      const timeout = setTimeout(() => {
        setIsBouncing(false);
      }, 1000); // Set the duration to match the CSS animation duration (0.5s in this case)
      const bouncy = document.querySelector(
        `.text-animate-bouncy._${indexBouncing}`
      );
      bouncy.classList.add("text-animate-bouncing");
      bouncy.addEventListener("animationend", () => {
        bouncy.classList.remove("text-animate-bouncing");
        setIndexBouncing(null);
      });

      return () => clearTimeout(timeout);
    }
  }, [isBouncing, indexBouncing]);

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + index}`}
          onMouseEnter={() => hoverHandler(i + index)}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
