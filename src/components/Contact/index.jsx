import AnimatedLetters from "../AnimatedLetters";
import TransitionEffect from "../TransitionEffect";
import { motion } from "framer-motion";
import "./index.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CardHoverEffect from "../CardHoverEffect";
import shapeCircle from "../../assets/images/shape-circle.png";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionEffect from "../MotionEffect";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ce4rv9p",
        "contact_form_portfolio",
        refForm.current,
        "v4GCkQI2Di5wYTZx-"
      )
      .then(
        () => {
          alert("Le message a été envoyé !");
        },
        () => {
          alert("Echec de l'envoi, veuillez réessayer");
        }
      );
  };
  return (
    <>
      <TransitionEffect>
        <div className="container contact-page">
          <CardHoverEffect shape={shapeCircle}>
            <div className="text-zone">
              <MotionEffect delay={1}>
                <h1>
                  <AnimatedLetters
                    letterClass={"text-animate-bouncy"}
                    str="Contact"
                    index={15}
                  />
                </h1>
              </MotionEffect>
              <MotionEffect delay={1.2}>
                <p>
                  Si tu veux me contacter ou juste me dire bonjour c'est ici que
                  ça se passe ! Tu peux remplir simplement le formulaire
                  ci-dessous j'essayerai d'y répondre au plus vite 😉
                </p>
              </MotionEffect>
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <MotionEffect delay={1.4}>
                      <li className="half">
                        <input
                          type="text"
                          name="nom"
                          placeholder="Nom"
                          required
                        />
                      </li>
                      <li className="half">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </li>
                    </MotionEffect>
                    <MotionEffect delay={1.6}>
                      <li>
                        <input
                          type="text"
                          name="objet"
                          placeholder="Objet"
                          required
                        />
                      </li>
                    </MotionEffect>
                    <MotionEffect delay={1.8}>
                      <li>
                        <textarea
                          name="message"
                          placeholder="Message"
                          required
                        ></textarea>
                      </li>
                    </MotionEffect>
                    <MotionEffect delay={2}>
                      <li>
                        <motion.button
                          type="submit"
                          className="contact-button"
                          value="Envoyer"
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{ marginRight: "0.5rem" }}
                          />
                          Envoyer
                        </motion.button>
                      </li>
                    </MotionEffect>
                  </ul>
                </form>
              </div>
            </div>
            <div className="map-wrap">
              <div className="info-map">
                Cyril Pierron
                <br />
                France,
                <br />
                10 rue Gosselet, 59000 <br />
                Lille <br />
                <span>cyril.pierron@outlook.fr</span>
              </div>
              <MapContainer center={[50.6260357, 3.0655712]} zoom={13}>
                {/* <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap ©CartoDB</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"
                /> */}
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.6260357, 3.0655712]}>
                  <Popup>
                    Cyril Pierron
                    <br />
                    France,
                    <br />
                    10 rue Gosselet, 59000
                    <br />
                    Lille
                    <br />
                    cyril.pierron@outlook.fr
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </CardHoverEffect>
        </div>
      </TransitionEffect>
    </>
  );
};

export default Contact;
