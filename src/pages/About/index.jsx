import React, { useRef } from "react";
import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import TransitionEffect from "../../components/TransitionEffect";
import CardHoverEffect from "../../components/CardHoverEffect";
import shapeTriangle from "../../assets/images/shape-triangle.png";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieFile from "../../assets/lotties/surf.json";
import MotionEffect from "../../components/MotionEffect";

const About = () => {
  const refLottie = useRef(null);

  return (
    <>
      <TransitionEffect>
        <div className="container about-page">
          <CardHoverEffect shape={shapeTriangle}>
            <div className="text-zone">
              <MotionEffect delay={1}>
                <h1>
                  <AnimatedLetters
                    letterClass="text-animate-bouncy"
                    str="À propos de moi"
                    index={15}
                  />
                </h1>
              </MotionEffect>
              <MotionEffect delay={1.2}>
                <p>
                  Curieux, perfectionniste et rigoureux, j'ai un goût prononcé
                  pour le sens du détail. Ayant une forte sensibilité UI et UX,
                  j'adore concevoir des interfaces visuellement beaux et bien
                  pensés !
                </p>
              </MotionEffect>
              <MotionEffect delay={1.4}>
                <p>
                  J'aime sortir de ma zone de confort et mon voyage d'un an à
                  travers le monde en est certainement la preuve la plus
                  parlante. Celui-ci m'a permis de découvrir pleins de cultures
                  et inspirations différentes puisées aux 4 coins du monde.
                </p>
              </MotionEffect>
              <MotionEffect delay={1.6}>
                <p>
                  Si je devais me définir, je dirais que je suis un passionné de
                  voyage, de sport en tout genre (escalade, foot, surf...), un
                  Youtuber à mes heures perdues et un développeur en devenir 😉
                </p>
              </MotionEffect>
            </div>
            <div className="lottie-zone">
              <Player ref={refLottie} autoplay loop src={lottieFile}></Player>
            </div>
          </CardHoverEffect>
        </div>
      </TransitionEffect>
    </>
  );
};

export default About;
