import React from 'react';
import './styles/bootstrap.min.css';
import './styles/app.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Testimonials from './components/Testimonials.js';

const LeftColumn = () => (
  <div className="column">
    <div>Row 1</div>
    <div>Row 2</div>
    <div>Row 3</div>
  </div>
);

const MiddleColumn = () => (
  <div className="column">

    {/* Routing */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>

    <div>Top Half</div>
    <div>Bottom Half</div>
  </div>
);

const RightColumn = () => (
  <div className="column">
    <div>Row 1</div>
    <div>Row 2</div>
    <div>Row 3</div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
          <div className="content">
            <LeftColumn />
            <MiddleColumn />
            <RightColumn />
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;