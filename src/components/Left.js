// Left.js
import React from 'react';
import Ticker from './Ticker.js'; // Import the Ticker component
import '../styles/left.css';

const Left = () => {
  return (
    <div className="two-columns-left">
      <div className="column left-column-left">
        <img src="/images/left.jpg" alt="Left Image" />
      </div>
      <div className="column right-column-left">
        <img src="/images/cyber1.jpg" alt="Cyber Image" />
        <div>
          {/* QQQ Stock Chart */}
          <Ticker />
        </div>
        <img src="/images/cyber2.jpg" alt="Cyber Image" />
      </div>
    </div>
  );
};

export default Left;
