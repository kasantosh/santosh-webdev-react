import React from 'react';
import Main from './video/main.mp4';
import Poster from './video/main.jpeg';

const Home = () => {
  /*eslint-disable*/
  return (
    <div className="home">
      <div className="video">
        <video className="video-main" autoPlay loop muted poster={Poster}> 
          <source src={Main} type="video/mp4"/>
        </video>
      </div>
      <div id="home-overlay">
        &nbsp;
      </div>
      <div id="home-content">
        <div id="home-content-inner" className="text-center">
          <div id="home-heading">
            <h1 id="home-heading-1">Santosh Nair</h1><br />
            <h4 id="home-heading-2">Full Stack Web Developer / Designer</h4>
          </div>
          <div id="home-text">
            <p>Designing and developing web applications is one of the best <br />personal experiences I've ever had!</p>
          </div>

          <div className="header_social">
          <ul className="header_social_ul">
            <li>
              <a href="https://www.linkedin.com/in/santosh-nair-0109976/" target="_blank"><i
                  className="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://github.com/kasantosh" target="_blank"><i className="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
        </div>
      </div>  

    </div>
  )
}

export default Home;