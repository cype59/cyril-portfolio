import React from "react";
import "./index.scss";
import shapeBg from "../../assets/images/shape1.png";

const CardHoverEffect = (props) => {
  const hoverHandler = (e) => {
    console.log(window.innerWidth);
    if (document.querySelector(".hover-effect")) {
      let hoverElement = document.querySelector(".hover-effect");
      if (window.innerWidth > 830) {
        let hoverElementRect = hoverElement.getBoundingClientRect();
        let x = e.clientX - hoverElementRect.x;
        let y = e.clientY - hoverElementRect.y;
        let midCardWidth = hoverElementRect.width / 2;
        let midCardHeight = hoverElementRect.height / 2;
  
        let angleY = (x - midCardWidth) / 100;
        let angleX = (y - midCardHeight) / 100;
  
        hoverElement.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      } else {
        hoverElement.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
      
    }
  };

  return (
    <div className="hover-effect">
      <div className="container-effect" onMouseMove={hoverHandler}>
        <img src={shapeBg} alt="shape-1" className="shape-background" />
        {props.children}
      </div>
    </div>
  );
};

export default CardHoverEffect;
