import React from 'react'
import { Link } from 'react-router-dom';
import homeIcon from './img/home-icon.png'

const Navigation = () => {
  return (
      /*eslint-disable*/
    <div className="control">
      <Link to='/'>
        <div className="control-button-icon">
          {/* <i className="fas fa-eject"></i> */}
          <img src={homeIcon} alt="home icon"/>
      </div>
      </Link>
      
      <div className="main-menu">
        <ul className="main-menu-list">
          <li className="main-menu-list-item" id="about-link"><Link to="/about">About</Link></li>
          <li className="main-menu-list-item" id="projects-link"><Link to="/projects">Projects</Link></li>
          <li className="main-menu-list-item" id="contact-link"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;