import "./index.scss";
import React from "react";

const AnimatedLetters = ({ letterClass, str, index }) => {

  const strArray = str.split("");
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
