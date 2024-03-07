import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import '../styles/right.css';

const Right = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'e70f3d20bd0a4c33a84b06e3dc660505';

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=business&language=en&country=us&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          setArticles(data.articles);
        }
      })
      .catch(error => {
        console.error('Error fetching news', error);
      });
  }, []);

  return (
    <div className="two-columns-right">
      <div className="column left-column-right">
        <div>
          {/* Clock component */}
          <h1>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </h1>
        </div>
        <div>
          <img src="/images/cyber3.jpg" alt="Cyber Image" />
        </div>
        <div>
          {/* News articles list */}
          <ul>
            {articles.map((article, index) => (
              <li key={index}>{article.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Right;
