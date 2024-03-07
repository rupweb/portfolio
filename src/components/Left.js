import React from 'react';
import Ticker from './Ticker.js'; // Import the Ticker component
import '../styles/left.css';

const Left = () => {
  return (
    <div className="two-columns-left">
      <div className="column right-column-left">
        <img src="/images/cyber1.jpg" alt="Cyber Image" />
        <div className="ticker-container">
          {/* QQQ Stock Chart */}
          <Ticker />
        </div>
        <img src="/images/cyber2.jpg" alt="Cyber Image" />
      </div>
    </div>
  );
};

export default Left;
