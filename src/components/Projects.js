import React from "react";
import "./Projects.css";
import Projects1 from "../images/food7.jpg"; 
import Projects2 from "../images/p2.jpg";
import Projects3 from "../images/myCvImage7.jpg";
import Projects4 from "../images/todo.jpg";
import Projects5 from "../images/calculator-icon.png";
import Projects6 from "../images/tic.jpg";

const Projects = () => {
  return (
    <div className="projects component___space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">A glimpse into my project management style</p>
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
                  <h5 className="project__text">Food Order</h5>
                  <h4 className="project__text">Delivers food to consumers</h4>
                  <a href="https://food-order-1212.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
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
                  <h5 className="project__text">Todo List</h5>
                  <h4 className="project__text">
                    Measure your progress
                  </h4>
                  <a href="https://my-todo-list1212.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
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
                  <h5 className="project__text">Calculator</h5>
                  <h4 className="project__text">Be good with numbers</h4>
                  <a href="https://calculator-1212.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
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
                  <h5 className="project__text">Tic tac toe</h5>
                  <h4 className="project__text">Tic tac toe app</h4>
                  <a href="https://tic-tac-toe1212.netlify.app/" target="_blank" rel="noopener noreferrer" className="project__btn">
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
