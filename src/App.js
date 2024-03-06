import React from 'react';
import './styles/bootstrap.min.css';
import './styles/app.css';
import './styles/images.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Left from './components/Left.js';
import Right from './components/Right.js';
import Middle from './components/Middle.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Testimonials from './components/Testimonials.js';
import NotFound from './components/NotFound.js';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<LayoutWithSides><Testimonials /></LayoutWithSides>} />
            <Route path="/contact" element={<LayoutWithSides><Contact /></LayoutWithSides>} />
            <Route path="*" element={<LayoutWithSides><NotFound /></LayoutWithSides>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <div className="left-column"><Left /></div>
    <div className="middle-column"><Middle /></div>
    <div className="right-column"><Right /></div>
  </>
);

const LayoutWithSides = ({ children }) => (
  <>
    <div className="left-column"><Left /></div>
    <div className="middle-column">{children}</div>
    <div className="right-column"><Right /></div>
  </>
);

export default App;

