// src/NewsSidebar.js

import React, { useState, useEffect } from 'react';
import './NewsSidebar.css'; // Ще създадем този CSS файл след малко

function NewsSidebar() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // useEffect се изпълнява веднъж, когато компонентът се зареди
    fetch('/novini.json') // Взимаме файла от public папката
      .then(response => response.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []); // Празният масив [] означава "изпълни само веднъж"

  return (
    <aside className="news-sidebar">
      <h2>Новини</h2>
      <div id="news-container">
        {loading && <p>Зареждам новини...</p>}
        {news.map((item, index) => (
          <article key={index} className="news-item">
            <p className="news-date">{new Date(item.date).toLocaleDateString('bg-BG')}</p>
            <h3 className="news-title">
              {item.link && item.link !== '#' ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
              ) : (
                item.title
              )}
            </h3>
            <p className="news-content">{item.content}</p>
          </article>
        ))}
      </div>
    </aside>
  );
}

export default NewsSidebar;