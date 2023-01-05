import React from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Home/>
    <About/>
    <Service/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
