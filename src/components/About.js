import React from 'react'
import aboutImg from './img/pencil-about.png';

const About = () => {
  return (
    <div className="section">
      <div className="about">
        <div className="about-details">
         
          <div className="row">
            {/* Left Column */}
              <div className="col-xl-6 col-lg-12 d-flex align-items-center">
                <img className="img-responsive" src={aboutImg} alt="About-img"/>
              </div>
              {/* Right Column */}
              <div className="col-xl-6 col-lg-12 mb-5">
                <h1>What I do best</h1>
                <p id="about-para">
                I am a Creative web developer dedicated to building and optimizing the performance of user-centric, high-impact websites. My goal is to leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms. <br/>
                I love designing/developing web applications and building Functional/Responsive websites. I have advanced knowledge in both front end and back end technologies. <br /><br />
                My goal is to become a dynamic part of an organization and use my front end / back end skills for personal and organizational growth and revenue. I have been working tirelessly for the last three years or more to develop apps and learn new technologies by the hour. <br /><br />
                I have successfully completed a coding bootcamp at the University of Toronto in 2019 in full stack development with MERN stack. <br /><br />
                <span>FrontEnd:</span> <br />
                HTML5, CSS3, SASS(SCSS), Javascript ES(6+), JQuery, Bootstrap, PUG, REACT/REDUX <br /><br />
                <span>BackEnd:</span> <br />
                Node, Express, MySql, MongoDB <br /><br />
                <span>Design Skills: </span> 
                Adobe CC: Photoshop, Indesign, Illustrator, Acrobat <br />
                </p>
              </div>
          </div>
          <div className="row">
              <div className="skills_box">
                <div className="skills_icon-box"><i className="fab fa-html5"></i> HTML</div>
                <div className="skills_icon-box"><i className="fab fa-css3-alt"></i> CSS3</div>
                <div className="skills_icon-box"><i className="fab fa-sass"></i> SASS</div>
                <div className="skills_icon-box"><i className="fab fa-js-square"></i> JAVASCRIPT</div>
                <div className="skills_icon-box"><i className="fab fa-js"></i> JQUERY</div>
                <div className="skills_icon-box"><i className="fab fa-bootstrap"></i> BOOTSTRAP</div>
                <div className="skills_icon-box"><i className="fab fa-react"></i> REACTjs</div>
                <div className="skills_icon-box"><i className="fab fa-git-square"></i> GIT</div>
                <div className="skills_icon-box"><i className="fab fa-node"></i> NODEjs</div>
                <div className="skills_icon-box"><i className="fas fa-database"></i> MySQL</div>
                <div className="skills_icon-box"><i className="fas fa-database"></i> MONGODB</div>
                <div className="skills_icon-box"><i className="fas fa-exchange-alt"></i> API/JSON</div>
                <div className="skills_icon-box"><i className="fab fa-artstation"></i> PHOTOSHOP</div>
                <div className="skills_icon-box"><i className="fab fa-artstation"></i> ILLUSTRATOR</div>
                <div className="skills_icon-box"><i className="fab fa-artstation"></i> INDESIGN</div>
                <div className="skills_icon-box"><i className="fab fa-artstation"></i> ACROBAT</div>
              </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default About;
