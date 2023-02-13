import React from "react";
import "./About.css";
import myCvImage5 from "../images/myCvImage5.jpg";
const About = () => {
  //up to top Btn
  window.addEventListener("scroll", function() {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={myCvImage5} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a driven and eager software developer with a passion for
                learning and growth. I am currently on a journey to expand my
                skills and knowledge in the tech industry, and I am constantly
                seeking new challenges to help me grow.
                 My current tech stack
                includes React.js, HTML, CSS, JavaScript, PHP, C++, and VB, and
                I am excited to continue exploring and mastering new
                technologies. As a junior developer, I am committed to
                delivering high-quality, user-friendly applications and to
                continuously improving my skills and expertise.
              </p>

              <div className="about__button d__flex align__items__center">
                <a href="ANESU_MUUSHA_CV.pdf" download="ANESU_MUUSHA_CV.pdf">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*up tp top button*/}
      <div className="up__to__top__btn">
      <a href="#Home"
          className="bottom__to__top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-compact-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default About;
