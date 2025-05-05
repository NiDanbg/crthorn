import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';
import { Book } from '../types';
import { loadSeries } from '../utils/dataLoader';

const SeriesLanguagePage: React.FC = () => {
  const { seriesId, language } = useParams<{ seriesId: string; language: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [seriesTitle, setSeriesTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seriesData = await loadSeries();
        const series = seriesData.find(s => s.id === seriesId);
        if (series) {
          const langData = series.data.find(d => d.language === language);
          if (langData) {
            setSeriesTitle(langData.title);
            const seriesBooks: Book[] = langData.books.map(book => ({
              ...book,
              type: 'series' as const,
              seriesId: series.id,
              language: langData.language,
              coverImage: `/books/series/${series.id}/${language}/${book.id}/cover.jpg`,
              longDescription: `/books/series/${series.id}/${language}/${book.id}/description.md`,
              previewFileName: `/books/series/${series.id}/${language}/${book.id}/preview.md`
            }));
            setBooks(seriesBooks);
          }
        }
      } catch (error) {
        console.error('Error loading series books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [seriesId, language]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display text-primary text-center mb-8">
        {seriesTitle}
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map(book => (
            <BookCard key={`${book.id}-${book.language}`} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SeriesLanguagePage; 