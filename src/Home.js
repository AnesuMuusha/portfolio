import React,{useState} from "react";
import "./Home.css";
// import logo from './images/logoWeb.png';
const Home = () => {
  //fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
    const [show, setShow] = useState(false);
  return (

    
    <div className="home__bg" id="Home">
      <div className="home">
        <div className="navigation.pxy__30">
          {/* <div className='logo'>
    <img src={logo} alt=""/>
</div> */}

          <ul className="navbar d__flex">
            <a href="#Home">
              <li className="nav__items mx__15">Home</li>
            </a>
            <a href="#About">
              <li className="nav__items mx__15">About</li>
            </a>
            <a href="#Services">
              <li className="nav__items mx__15">Services</li>
            </a>
            <a href="#Portfolio">
              <li className="nav__items mx__15">Portfolio</li>
            </a>
            <a href="#Contact">
              <li className="nav__items mx__15">Contact</li>
            </a>
          </ul>
        </div>

        <div className="toggle__menu"
          style={{
            position: "absolute"
          }}
        >
          <svg 
          onClick={()=>setShow(!show)}
          style={{position: "relative", zIndex: 1000}}
          // onClick={()=>console.log("clicked")} 
          xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi.bi-justify white pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
      
        {show?(
        <div className="sideNavbar">
        <ul className="sidebar d__flex">
          <li className="sideNavbar">
            <a href="#Home">Home</a>
          </li>
          <li className="sideNavbar">
            <a href="#About">About</a>
          </li>
          <li className="sideNavbar">
            <a href="#Services">Services</a>
          </li>
          <li className="sideNavbar">
            <a href="#Portfolio">Portfolio</a>
          </li>

          <li className="sideNavbar">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      ):null}
  </div>

      </div>
      <div className="container">
        <div className="home__content">
          <div className="hom__meta">
            <h1 className="home__text pz__10">Welcome to my Developer World</h1>

            <h2 className="home__text pz__10">Hi, Im Anesu Muusha</h2>

            <h3 className="home__text sweet">Js Developer.</h3>

            <h4 className="home__text pz__10">
              Based In Cape Town SouthAfrica.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;