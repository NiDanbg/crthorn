import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const getBookPath = () => {
    switch (book.type) {
      case 'series':
        return `/series/${book.seriesId}/${book.language}/${book.id}`;
      case 'novel':
        return `/novels/${book.language}/${book.id}`;
      case 'short':
        return `/shorts/${book.language}/${book.id}`;
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
          <p className="text-accent text-lg font-bold mt-2">${book.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard; 