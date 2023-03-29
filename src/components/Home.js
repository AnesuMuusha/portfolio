import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home__bg" id="Home">
      <div className="container">
        <div className="home__content">
          <div className="hom__meta">
            <h1 className="home__text pz__10">
              Hello and welcome to my portfolio!
            </h1>

            <h2 className="home__text pz__10">Hi, Im Anesu Muusha</h2>

            <h3 className="home__text sweet">Software Developer.</h3>

            <h4 className="home__text pz__10">
              Based In Cape Town South Africa.
            </h4>
            <h3 className="home__text1">
              Excited to share my experience and continue growing my career.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
