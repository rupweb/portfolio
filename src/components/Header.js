import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css'; // Ensure you import the navigation CSS

function Header() {
  return (
    <nav>
      <div className="nav-group">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </div>
      <div className="nav-group">
        <ul>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
