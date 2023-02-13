import React from "react";
import "./Projects.css";
import Projects1 from "../images/iconiMessiAndCristiano.jpeg"; 
import Projects2 from "../images/ExpenseTracker2.jpg";
import Projects3 from "../images/myCvImage7.jpg";
import Projects4 from "../images/logistics_twitter.jpg";
import Projects5 from "../images/StockPrediction.jpeg";
import Projects6 from "../images/AI shopping system.jpg";

const Projects = () => {
  return (
    <div className="projects component___space" id="Portfolio">
      <div className="heading">
        <button>test button</button>
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">Placed in ascending order.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projects1} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Chess Bet</h5>
                  <h4 className="project__text">Online betting site #Chess</h4>
                  <a href="https://anesu-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projects2} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Expenses</h5>
                  <h4 className="project__text">
                    Click here to track your expenses
                  </h4>
                   <a href="https://my-expence-tracker1212.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projects3} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Portfolio</h5>
                  <h4 className="project__text">
                    Click here to view my Portfolio
                  </h4>
                  <a href="https://anesu-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projects4} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Transport and Logistics</h5>
                  <h4 className="project__text">
                    Movement and storage of goods
                  </h4>
                  <a href="https://anesu-portfolio.netlify.app" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projects5} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Stock analysis</h5>
                  <h4 className="project__text">stock Future value</h4>
                  <a href="https://anesu-portfolio.netlify.app" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projects6} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">AI shopping system</h5>
                  <h4 className="project__text">AI shopping assistant</h4>
                  <a href="https://anesu-portfolio.netlify.app" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
