import React from 'react';
import './styles/bootstrap.min.css';
import './styles/app.css';
import './styles/images.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Left from './components/Left.js';
import Right from './components/Right.js';
import LeftSide from './components/LeftSide.js';
import RightSide from './components/RightSide.js';
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
            <Route path="/" element={<Layout><Middle /></Layout>} />
            <Route path="/projects" element={<Project />} />
            <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const Layout = ({ children }) => (
  <>
    <div className="left-side-column"><LeftSide /></div>
    <div className="left-column"><Left /></div>
    <div className="middle-column">{children}</div>
    <div className="right-column"><Right /></div>
    <div className="right-side-column"><RightSide /></div>
  </>
);

const Project = () => (
  <>
    <div className="left-side-column"><LeftSide /></div>
    <div className="middle-column"><Projects /></div>
    <div className="right-side-column"><RightSide /></div>
  </>
);

export default App;

