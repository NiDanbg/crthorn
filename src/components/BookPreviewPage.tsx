import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadSeries, loadNovels, loadShortStories } from '../utils/dataLoader';
import ePub from 'epubjs';

const BookPreviewPage: React.FC = () => {
  const { type, id, seriesId, language } = useParams<{ type?: string; id: string; seriesId?: string; language?: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        let previewFile = '';
        let bookTitle = '';
        
        // Determine the type from the URL path
        const pathType = window.location.pathname.split('/')[1]; // 'novels', 'shorts', or 'series'
        console.log('Path type:', pathType);

        if (pathType === 'series' && seriesId && language) {
          const series = await loadSeries();
          const seriesData = series.find(s => s.id === seriesId);
          if (seriesData) {
            const langData = seriesData.data.find(d => d.language === language);
            if (langData) {
              const book = langData.books.find(b => b.id === id);
              if (book) {
                previewFile = `/books/series/${seriesId}/${language}/${book.id}/preview.epub`;
                bookTitle = book.title;
              }
            }
          }
        } else if (pathType === 'novels' && language) {
          console.log('Loading novel preview...');
          const novels = await loadNovels();
          const novel = novels.find(n => n.id === id);
          console.log('Found novel:', novel);
          if (novel) {
            const langData = novel.data.find(d => d.language === language);
            console.log('Found language data:', langData);
            if (langData) {
              previewFile = `/books/novels/${language}/${novel.id}/preview.epub`;
              bookTitle = langData.title;
            }
          }
        } else if (pathType === 'shorts' && language) {
          console.log('Loading short story preview...');
          const shorts = await loadShortStories();
          const short = shorts.find(s => s.id === id);
          console.log('Found short:', short);
          if (short) {
            const langData = short.data.find(d => d.language === language);
            console.log('Found language data:', langData);
            if (langData) {
              previewFile = `/books/shorts/${language}/${short.id}/preview.epub`;
              bookTitle = langData.title;
            }
          }
        }

        console.log('Preview file:', previewFile);
        if (previewFile) {
          if (viewerRef.current) {
            // Clean up previous book if it exists
            if (bookRef.current) {
              bookRef.current.destroy();
            }
            
            // Create new book instance
            bookRef.current = ePub(previewFile);
            const rendition = bookRef.current.renderTo(viewerRef.current, {
              width: '100%',
              height: '100%',
              spread: 'none'
            });
            
            rendition.display();
            setTitle(bookTitle);
          }
        } else {
          setError('Preview not found');
        }
      } catch (err) {
        console.error('Error loading preview:', err);
        setError('Error loading preview');
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();

    // Cleanup function
    return () => {
      if (bookRef.current) {
        bookRef.current.destroy();
      }
    };
  }, [type, id, seriesId, language]);

  if (loading) {
    return <div className="text-center py-12">Loading preview...</div>;
  }
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Back
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-display text-primary mb-6">Preview: {title}</h1>
      <div className="h-[800px] w-full border border-gray-200 rounded-lg shadow-lg">
        <div ref={viewerRef} className="h-full w-full" />
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Back to Book
        </button>
      </div>
    </div>
  );
};

export default BookPreviewPage; 