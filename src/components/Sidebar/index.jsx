import "./index.scss";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoCP from "../../assets/images/logo-cp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faGear,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoCP} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/a-propos"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/competences"
          >
            <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/cyril-pierron/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/cype59"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@baptetcycy"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <NavbarBurger>
        <Link className="logo" to="/">
          <img src={LogoCP} alt="logo" />
        </Link>
        <StyledMenu open={open}>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon
              icon={faHome}
              color="#4d4d4e"
              style={{ marginRight: "0.5rem" }}
            />
            Accueil
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/a-propos"
          >
            <FontAwesomeIcon
              icon={faUser}
              color="#4d4d4e"
              style={{ marginRight: "0.5rem" }}
            />
            À-propos
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/competences"
          >
            <FontAwesomeIcon
              icon={faGear}
              color="#4d4d4e"
              style={{ marginRight: "0.5rem" }}
            />
            Compétences
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon
              icon={faEye}
              color="#4d4d4e"
              style={{ marginRight: "0.5rem" }}
            />
            Portfolio
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              style={{ marginRight: "0.5rem" }}
            />
            Contact
          </NavLink>
          <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/cyril-pierron/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/cype59"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@baptetcycy"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        </StyledMenu>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </NavbarBurger>
      {/* <div className="nav-bar burger">
        <div className="burger-menu">
          <span></span>
        </div>
        <Link className="logo" to="/">
          <img src={LogoCP} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            Accueil
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/a-propos"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            À-propos
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/competences"
          >
            <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
            Compétences
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
            Portfolio
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            Contact
          </NavLink>
        </nav>
      </div> */}
    </>
  );
};

export default Sidebar;

const NavbarBurger = styled.div`
  display: none;
  @media screen and (max-width: 830px) {
    background: #181818;

    display: flex;
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 20%;
      z-index: 5;
      img {
        display: block;
        margin: 15px 15px;
        width: 60px;
        height: auto;
      }
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  background: #181818;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  top:0;
  padding-top: 15px;
  padding-left: 10px;

  a {
    font-size: 22px;
    color: #fff;
    display: block;
    line-height: 51px;
    height: 51px;
    position: relative;
    text-decoration: none;
    font-family: "Arial Rounded MT Bold";
    font-weight: 300;

    &:hover {
      color: #ffd700;
      svg {
        color: #ffd700;
      }
    }
  }

  a.active {
    color: #ffd700;
    svg {
      color: #ffd700;
    }
  }

  ul {
    width: 60px;
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 10px;
    margin-block-start: 0;
    padding-inline-start: 5px;

    li {
      a {
        padding: 0px 0;
        font-size: 15px;

        &:hover svg {
          color: #ffd700;
        }
      }
    }
  }
`;

const StyledBurger = styled.button`
  display: flex;
  float: right;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 15px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#ffd700" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
