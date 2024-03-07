import React from 'react';
import '../styles/home.css';
import Ticker from './Ticker.js';

function Home() {
  return (
    <div className="home">
      <h1>Rupert St John Webster</h1>
      <img src="/images/mugshot.jpg" alt="Rupert St John Webster" />
      <h2>Web Engineering</h2>
      <p />
      <div className="ticker-container">
          {/* QQQ Stock Chart */}
          <Ticker />
        </div>
    </div>
  );
}

export default Home;
