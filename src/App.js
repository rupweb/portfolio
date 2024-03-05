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

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <Left />
    <Middle />
    <Right />
  </>
);

export default App;

