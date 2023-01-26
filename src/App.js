import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
