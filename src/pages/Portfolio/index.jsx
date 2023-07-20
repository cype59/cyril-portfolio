import React from "react";
import "./index.scss";
import TransitionEffect from "../../components/TransitionEffect";
import CardHoverEffect from "../../components/CardHoverEffect";
import shapeCircle from "../../assets/images/shape-circle.png";
import MotionEffect from "../../components/MotionEffect";
import PortfolioCard from "../../components/PortfolioCard";
import StoryImage from "../../assets/images/portfolio-images/3dstory-image.png";
import FollowMyTripImage from "../../assets/images/portfolio-images/followmytrip-image.png";
import NiloImage from "../../assets/images/portfolio-images/nilo-image.png";
import IotImage from "../../assets/images/portfolio-images/iot-image.png";
import EceAmazonImage from "../../assets/images/portfolio-images/ece-amazon-image.png";

const Portfolio = () => {
  return (
    <>
      <TransitionEffect>
        <div className="container portfolio-page">
          <CardHoverEffect shape={shapeCircle}>
            <div className="text-zone">
              <MotionEffect delay={1}>
                <h1>Portfolio</h1>
              </MotionEffect>
            </div>
            <div className="portfolio-grid">
              <PortfolioCard
                name="FollowMyTrip"
                image={FollowMyTripImage}
                description="Fullstack / Freelance / 2022"
                delay={1.2}
                link="followmytrip"
              />
              <PortfolioCard
                name="3DStory"
                image={StoryImage}
                description="Frontend / Stage / 2021"
                delay={1.3}
              />
              <PortfolioCard
                name="NIL'O"
                image={NiloImage}
                description="Fullstack / Freelance / 2020 et 2021"
                delay={1.4}
              />
              <PortfolioCard
                name="IOT Dashboard"
                image={IotImage}
                description="Fullstack / Projet d'école / 2020"
                delay={1.5}
              />
              <PortfolioCard
                name="ECE Amazon"
                image={EceAmazonImage}
                description="Fullstack / Projet d'école / 2019"
                delay={1.6}
              />
            </div>
          </CardHoverEffect>
        </div>
      </TransitionEffect>
    </>
  );
};

export default Portfolio;
