import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Book } from '../types';
import { loadSeries, loadNovels, loadShortStories } from '../utils/dataLoader';
import ReactMarkdown from 'react-markdown';

const BookDetail: React.FC = () => {
  const { type, id, seriesId, language } = useParams<{ type: string; id: string; seriesId?: string; language?: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [previewMarkdown, setPreviewMarkdown] = useState<string>('');
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        let bookData: Book | null = null;

        if (seriesId && language) {
          const series = await loadSeries();
          const seriesData = series.find(s => s.id === seriesId);
          if (seriesData) {
            const langData = seriesData.data.find(d => d.language === language);
            if (langData) {
              const bookFound = langData.books.find(b => b.id === id);
              if (bookFound) {
                bookData = {
                  ...bookFound,
                  type: 'series',
                  seriesId,
                  language: langData.language,
                  coverImage: `/books/series/${seriesId}/${language}/${bookFound.id}/cover.jpg`,
                  longDescription: `/books/series/${seriesId}/${language}/${bookFound.id}/description.md`,
                  previewFileName: `/books/series/${seriesId}/${language}/${bookFound.id}/preview.md`
                };
              }
            }
          }
        } else if (type === 'novels') {
          const novels = await loadNovels();
          const novel = novels.find(n => n.id === id);
          if (novel) {
            bookData = {
              ...novel.data[0],
              id: novel.id,
              type: 'novel',
              language: novel.data[0].language
            };
          }
        } else if (type === 'shorts') {
          const shorts = await loadShortStories();
          const short = shorts.find(s => s.id === id);
          if (short) {
            bookData = {
              ...short.data[0],
              id: short.id,
              type: 'short',
              language: short.data[0].language
            };
          }
        }

        if (bookData) {
          setBook(bookData);
          // Fetch markdown content
          if (bookData.longDescription) {
            const resp = await fetch(bookData.longDescription);
            const md = await resp.text();
            setMarkdown(md);
          } else {
            setMarkdown('');
          }
        } else {
          setError('Book not found');
        }
      } catch (err) {
        setError('Error loading book details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [type, id, seriesId, language]);

  const handlePreview = async () => {
    if (book && book.previewFileName) {
      const resp = await fetch(book.previewFileName);
      const md = await resp.text();
      setPreviewMarkdown(md);
      setShowPreview(true);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-display text-primary mb-4">{book.title}</h1>
          <p className="text-text text-lg mb-4">{book.genre}</p>
          <p className="text-accent text-2xl font-bold mb-6">${book.price.toFixed(2)}</p>
          
          <div className="prose max-w-none mb-8">
            <div className="text-text">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => alert('Buy functionality coming soon!')}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Buy
            </button>
            {book.type === 'series' ? (
              <Link
                to={`/series/${book.seriesId}/${book.language}/book/${book.id}/preview`}
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
              >
                Preview
              </Link>
            ) : book.type === 'novel' ? (
              <Link
                to={`/novels/${book.id}/preview`}
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
              >
                Preview
              </Link>
            ) : book.type === 'short' ? (
              <Link
                to={`/shorts/${book.id}/preview`}
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
              >
                Preview
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-8 relative">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-primary text-2xl"
              aria-label="Close preview"
            >
              &times;
            </button>
            <h2 className="text-xl font-display text-primary mb-4">Preview</h2>
            <div className="prose max-w-none">
              <ReactMarkdown>{previewMarkdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail; 