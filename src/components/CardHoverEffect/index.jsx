import React from "react";
import "./index.scss";

const CardHoverEffect = (props) => {
  return (
    <div className="hover-effect">
      <div className="container-effect">{props.children}</div>
    </div>
  );
};

export default CardHoverEffect;
