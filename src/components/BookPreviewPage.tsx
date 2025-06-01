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
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [canGoNext, setCanGoNext] = useState(false);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [coverDimensions, setCoverDimensions] = useState<{ width: number; height: number } | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);
  const renditionRef = useRef<any>(null);

  const handleNext = () => {
    if (renditionRef.current && canGoNext) {
      renditionRef.current.next();
    }
  };

  const handlePrev = () => {
    if (renditionRef.current && canGoPrev) {
      renditionRef.current.prev();
    }
  };

  const loadCoverDimensions = (coverImageUrl: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.onerror = () => {
        reject(new Error('Failed to load cover image'));
      };
      img.src = coverImageUrl;
    });
  };

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        let previewFile = '';
        let bookTitle = '';
        let coverImageUrl = '';
        
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
                coverImageUrl = `/books/series/${seriesId}/${language}/${book.id}/cover.jpg`;
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
              coverImageUrl = `/books/novels/${language}/${novel.id}/cover.jpg`;
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
              coverImageUrl = `/books/shorts/${language}/${short.id}/cover.jpg`;
              bookTitle = langData.title;
            }
          }
        }

        console.log('Preview file:', previewFile);
        console.log('Cover image URL:', coverImageUrl);

        if (previewFile && coverImageUrl) {
          // Load cover dimensions first
          try {
            const dimensions = await loadCoverDimensions(coverImageUrl);
            console.log('Cover dimensions:', dimensions);
            // setCoverDimensions(dimensions);
            setCoverDimensions({ width: 200, height: 400 });
            console.log('Cover dimensions:', dimensions);
          } catch (err) {
            console.warn('Could not load cover dimensions, using default aspect ratio');
            setCoverDimensions({ width: 2, height: 3 }); // Default book aspect ratio
          }

          if (viewerRef.current) {
            // Clean up previous book if it exists
            if (bookRef.current) {
              bookRef.current.destroy();
            }
            
            // Create new book instance
            bookRef.current = ePub(previewFile);
            
            // Render with proper settings to maintain aspect ratio
            renditionRef.current = bookRef.current.renderTo(viewerRef.current, {
              width: '100%',
              height: '100%',
              spread: 'none',
              allowScriptedContent: true,
              resizeOnOrientationChange: true,
              snap: true
            });
            
            // Set up event listeners for navigation state
            renditionRef.current.on('relocated', (location: any) => {
              setCurrentLocation(location.start.cfi);
              
              // Update navigation state
              if (location.atStart) {
                setCanGoPrev(false);
              } else {
                setCanGoPrev(true);
              }
              
              if (location.atEnd) {
                setCanGoNext(false);
              } else {
                setCanGoNext(true);
              }
            });

            // Set up keyboard navigation
            renditionRef.current.on('keyup', (event: KeyboardEvent) => {
              if (event.key === 'ArrowLeft') {
                handlePrev();
              } else if (event.key === 'ArrowRight') {
                handleNext();
              }
            });
            
            renditionRef.current.display();
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

  // Calculate aspect ratio from cover dimensions
  const getViewerStyle = () => {
    console.log('Cover dimensions:', coverDimensions);
    return {
          width: '50vh',
          height: '80vh',
          maxHeight: '900px',
          minHeight: '600px'
    };
    // if (!coverDimensions) {
    //   return {
    //     height: '80vh',
    //     maxHeight: '900px',
    //     minHeight: '600px'
    //   };
    // }

    // const aspectRatio = coverDimensions.width / coverDimensions.height;
    // const maxWidth = 800; // Maximum width for the viewer
    // const calculatedHeight = maxWidth / aspectRatio;
    
    // return {
    //   width: `${maxWidth}px`,
    //   height: `${Math.min(calculatedHeight, 900)}px`, // Cap at 900px height
    //   minHeight: '400px',
    //   aspectRatio: `${coverDimensions.width} / ${coverDimensions.height}`
    // };
  };

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
    <div className="max-w-2xl mx-auto py-12 px-2">
      <div className="flex justify-between items-center mb-6">
        <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back
          </button>
        <h1 className="text-2xl font-display text-primary">{title}</h1>
      </div>
      
      {/* Epub Viewer Container with Side Navigation */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`p-3 rounded-full transition-all duration-200 shadow-lg ${
            canGoPrev
              ? 'bg-secondary text-white hover:bg-secondary-dark hover:scale-110 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Previous page"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        {/* Book Viewer */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div 
            ref={viewerRef} 
            className="w-full"
            style={getViewerStyle()}
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`p-3 rounded-full transition-all duration-200 shadow-lg ${
            canGoNext
              ? 'bg-secondary text-white hover:bg-secondary-dark hover:scale-110 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Next page"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookPreviewPage; 