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
        console.log('Fetching book with params:', { type, id, seriesId, language });
        let bookData: Book | null = null;

        // Determine the type from the URL path
        const pathType = window.location.pathname.split('/')[1]; // 'novels', 'shorts', or 'series'
        console.log('Path type:', pathType);

        if (pathType === 'series' && seriesId && language) {
          console.log('Loading series book...');
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
        } else if (pathType === 'novels') {
          console.log('Loading novel...');
          const novels = await loadNovels();
          console.log('Loaded novels:', novels);
          const novel = novels.find(n => n.id === id);
          console.log('Found novel:', novel);
          if (novel) {
            const langData = novel.data.find(d => d.language === language);
            console.log('Found language data:', langData);
            if (langData) {
              bookData = {
                ...langData,
                id: novel.id,
                type: 'novel',
                language: langData.language,
                coverImage: `/books/novels/${langData.language}/${novel.id}/cover.jpg`,
                longDescription: `/books/novels/${langData.language}/${novel.id}/description.md`,
                previewFileName: `/books/novels/${langData.language}/${novel.id}/preview.md`
              };
            }
          }
        } else if (pathType === 'shorts') {
          console.log('Loading short story...');
          const shorts = await loadShortStories();
          const short = shorts.find(s => s.id === id);
          if (short) {
            const langData = short.data.find(d => d.language === language);
            if (langData) {
              bookData = {
                ...langData,
                id: short.id,
                type: 'short',
                language: langData.language,
                coverImage: `/books/shorts/${langData.language}/${short.id}/cover.jpg`,
                longDescription: `/books/shorts/${langData.language}/${short.id}/description.md`,
                previewFileName: `/books/shorts/${langData.language}/${short.id}/preview.md`
              };
            }
          }
        }

        console.log('Final book data:', bookData);

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
        console.error('Error in fetchBook:', err);
        setError('Error loading book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [type, id, seriesId, language]);

  const handlePreview = async () => {
    if (book && book.previewFileName) {
      const previewFile = book.previewFileName.replace('.md', '.epub');
      const resp = await fetch(previewFile);
      if (!resp.ok) throw new Error('Preview not found');
      setShowPreview(true);
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'amazon':
        return '/platform/amazon.png';
      case 'laterpress':
        return '/platform/laterpress.svg';
      case 'draft2digital':
        return '/platform/draft2digital.png';
      default:
        return '/platform/' + platform + '.png';
    }
  };

  const capitalizePlatform = (platform: string) => {
    switch (platform) {
      case 'laterpress':
        return 'LaterPress';
      case 'amazon':
        return 'Amazon';
      case 'draft2digital':
        return 'Draft2Digital';
      default:
        return platform.charAt(0).toUpperCase() + platform.slice(1);
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
          
          <div className="prose max-w-none mb-8">
            <div className="text-text">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>

          <div className="space-y-4">
            {/* Preview Button */}
            <div>
              {book.type === 'series' ? (
                <Link
                  to={`/series/${book.seriesId}/${book.language}/book/${book.id}/preview`}
                  className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
                >
                  Preview
                </Link>
              ) : book.type === 'novel' ? (
                <Link
                  to={`/novels/${book.id}/${book.language}/preview`}
                  className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
                >
                  Preview
                </Link>
              ) : book.type === 'short' ? (
                <Link
                  to={`/shorts/${book.id}/${book.language}/preview`}
                  className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
                >
                  Preview
                </Link>
              ) : null}
            </div>

            {/* Platform Links */}
            {/* <div>
              <h3 className="text-lg font-display text-primary mb-3">Available on:</h3>
              <div className="flex gap-3">
                {book.platforms?.map((platform) => (
                  <a
                    key={platform.platform}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors inline-flex items-center justify-center"
                    title={`Buy via ${capitalizePlatform(platform.platform)}`}
                  >
                    <img
                      src={getPlatformIcon(platform.platform)}
                      alt={`Buy via ${capitalizePlatform(platform.platform)}`}
                      className="w-24 h-10 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div> */}
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