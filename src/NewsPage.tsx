import React, { useState, useEffect } from 'react';

interface NewsItem {
  date: string;
  title: string;
  content: string;
  link?: string;
}

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/novini.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: NewsItem[]) => {
        // Sort by date descending (newest first)
        const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setNews(sorted);
        setLoading(false);
      })
      .catch(error => {
        console.error('Грешка при зареждане на новините:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-display text-primary text-center mb-12">News</h1>
      {loading && <p className="text-center">Зареждам новини...</p>}
      {!loading && news.length === 0 && <p className="text-center">Няма налични новини.</p>}
      <div className="w-full flex flex-col items-center space-y-10">
        {news.map((item, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-2 text-center">{new Date(item.date).toLocaleDateString('bg-BG')}</p>
            <h2 className="font-bold text-2xl text-black mb-2 text-center">
              {item.link && item.link !== '#' ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-turkishBlue transition-colors">{item.title}</a>
              ) : (
                item.title
              )}
            </h2>
            <p className="text-gray-700 text-lg text-center">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 