import './index.scss'
import React from 'react'
import {Link, NavLink} from "react-router-dom"
import LogoCP from "../../assets/images/logo-cp.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons"


const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={LogoCP} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/cyril-pierron/'>
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/cyril-pierron/'>
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/cyril-pierron/'>
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar