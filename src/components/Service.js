import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div className="service-component__space" id="Services">
      <div className="heading">
        <h1 className="heading">My Services</h1>
        <p className="heading p__color">
          Different types of websites call for their own unique style of web
          design.
        </p>
        <p className="heading p__color">Website categories.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <a
              href="https://anesu-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                    <line x1="2" y1="20" x2="2" y2="20"></line>
                  </svg>
                </div>
                <div className="service__meta"></div>
                <h1 className="service__text">Portfolio websites</h1>
                <p className="p service__text p__color">
                  All about showcasing your professional work with the goal of
                  winning clients.The design of a portfolio website is usually
                  focused on presenting the work in an appealing and organized
                  way, with attention to details such as typography, color
                  scheme, and layout. The website should be user-friendly and
                  easy to navigate, with clear and concise information.
                </p>
              </div>
            </a>
          </div>

          <div className="col__3">
            <a
              href="https://food-order-1212.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                    <line x1="2" y1="20" x2="2" y2="20"></line>
                  </svg>
                </div>
                <div className="service__meta"></div>
                <h1 className="service__text">Small business websites</h1>
                <p className="p service__text p__color">
                  Small business websites are websites designed specifically for
                  small businesses that provide an online presence and enable
                  them to showcase their products or services to potential
                  customers. Small business websites can serve as a powerful
                  marketing tool and help businesses establish credibility and
                  trust with their target audience.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
