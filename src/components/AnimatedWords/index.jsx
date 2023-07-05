import "../AnimatedLetters/index.scss";
import React from "react";

const AnimatedWords = ({ wordsArray, index }) => {

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
      {wordsArray.map((word, i) => (
        <span
          key={word + i}
          className={`text-animate-bouncy _${i + index}`}
          onMouseEnter={() => hoverHandler(i + index)}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default AnimatedWords;