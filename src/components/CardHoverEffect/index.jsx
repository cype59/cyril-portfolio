import React from "react";
import "./index.scss";

const CardHoverEffect = (props) => {
  const hoverHandler = (e) => {
    if (document.querySelector(".hover-effect")) {
      let hoverElement = document.querySelector(".hover-effect");
      console.log(e)

      let hoverElementRect = hoverElement.getBoundingClientRect();
      let x = e.clientX - hoverElementRect.x;
      let y = e.clientY - hoverElementRect.y;
      let midCardWidth = hoverElementRect.width / 2;
      let midCardHeight = hoverElementRect.height / 2;

      let angleY = (x - midCardWidth) / 100;
      let angleX = (y - midCardHeight) / 100;

      hoverElement.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
  };

  return (
    <div className="hover-effect">
      <div className="container-effect" onMouseMove={hoverHandler}>
        {props.children}
      </div>
    </div>
  );
};

export default CardHoverEffect;
