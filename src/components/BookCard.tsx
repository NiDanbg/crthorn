import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const getBookPath = (lang?: string) => {
    switch (book.type) {
      case 'series':
        return `/series/${book.seriesId}/${book.language}/book/${book.id}`;
      case 'novel':
        return `/novels/${book.id}/${lang || book.language}`;
      case 'short':
        return `/shorts/${book.id}/${lang || book.language}`;
      default:
        return '/';
    }
  };

  const getCoverImagePath = () => {
    switch (book.type) {
      case 'series':
        return `/books/series/${book.seriesId}/${book.language}/${book.id}/cover.jpg`;
      case 'novel':
        return `/books/novels/${book.language}/${book.id}/cover.jpg`;
      case 'short':
        return `/books/shorts/${book.language}/${book.id}/cover.jpg`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <Link to={getBookPath()}>
        <div className="relative aspect-[2/3]">
          <img
            src={getCoverImagePath()}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-display text-primary mb-2">{book.title}</h3>
          <p className="text-text text-sm">{book.genre}</p>
          {(book.type === 'novel' || book.type === 'short') && (
            <div className="flex flex-wrap gap-2 mt-4">
              {book.languages?.map((language: string) => (
                <Link
                  key={language}
                  to={getBookPath(language)}
                  className="px-3 py-1 bg-secondary text-white rounded hover:bg-secondary-dark transition-colors text-sm"
                >
                  {language.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BookCard; 