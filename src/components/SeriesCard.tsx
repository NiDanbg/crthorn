import React from 'react';
import { Link } from 'react-router-dom';
import { Series } from '../types';

interface SeriesCardProps {
  series: Series;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
  // Get the first language data for the title and description
  const firstLangData = series.data[0];

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="flex-shrink-0">
          <div className="aspect-[3/4] w-[200px]">
            <img
              src={`/books/series/${series.id}/cover.jpg`}
              alt={firstLangData.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-display text-primary mb-4">{firstLangData.title}</h3>
          <p className="text-text/80 mb-6">{firstLangData.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {series.languages.map((language) => (
              <Link
                key={language}
                to={`/series/${series.id}/${language}`}
                className="btn btn-secondary text-sm"
              >
                {language.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard; 