import React from 'react';
import '../styles/left.css';

const Left = () => (
  <div className="two-columns-left">
    <div className="column left-column">
      <img src="/images/left.jpg" alt="Left Image" />
    </div>
    <div className="column right-column">
      <img src="/images/cyber1.jpg" alt="Cyber Image" />
      <div>Row 2</div>
      <img src="/images/cyber2.jpg" alt="Cyber Image" />
    </div>
  </div>
);

export default Left;
