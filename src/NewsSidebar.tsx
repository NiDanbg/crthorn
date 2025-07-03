// src/NewsSidebar.tsx

import React, { useState, useEffect } from 'react';
import './NewsSidebar.css'; // Ще създадем и този CSS файл

// Дефинираме как изглежда един обект "новина"
interface NewsItem {
  date: string;
  title: string;
  content: string;
  link?: string;
}

function NewsSidebar() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Взимаме файла от public папката
    fetch('/novini.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: NewsItem[]) => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Грешка при зареждане на новините:", error);
        setLoading(false);
      });
  }, []);

  return (
    // Използваме Tailwind класове за стил
    <aside className="w-full md:w-80 flex-shrink-0 bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-display text-primary mb-4 border-b pb-2">News</h2>
      <div className="space-y-6">
        {loading && <p>Loading news...</p>}
        {!loading && news.length === 0 && <p>Няма налични новини.</p>}
        {news.map((item, index) => (
          <article key={index} className="news-item">
            <p className="text-sm text-gray-500 mb-1">{new Date(item.date).toLocaleDateString('bg-BG')}</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {item.link && item.link !== '#' ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-turkishBlue transition-colors">{item.title}</a>
              ) : (
                item.title
              )}
            </h3>
            <p className="text-gray-600 mt-1">{item.content}</p>
          </article>
        ))}
      </div>
    </aside>
  );
}

export default NewsSidebar;