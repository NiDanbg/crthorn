import React, { useEffect, useState, useRef } from 'react';
import ePub from 'epubjs';

interface EpubViewerProps {
  previewFile: string;
  title: string;
  coverImageUrl: string;
  className?: string;
}

const EpubViewer: React.FC<EpubViewerProps> = ({ previewFile, title, coverImageUrl, className = "" }) => {
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
    const initEpubViewer = async () => {
      try {
        if (!previewFile) {
          return;
        }

        // Simple delay to let the DOM render
        await new Promise(resolve => setTimeout(resolve, 100));

        if (!viewerRef.current) {
          setError('Failed to initialize viewer');
          setLoading(false);
          return;
        }

        setLoading(true);
        setError(null);

        // Load cover dimensions first
        try {
          const dimensions = await loadCoverDimensions(coverImageUrl);
          setCoverDimensions({ width: 200, height: 400 });
        } catch (err) {
          setCoverDimensions({ width: 2, height: 3 }); // Default book aspect ratio
        }

        // Clean up previous book if it exists
        if (bookRef.current) {
          bookRef.current.destroy();
        }
        
        // Try to fetch the file first, then create epub from blob
        const response = await fetch(previewFile);
        if (!response.ok) {
          throw new Error(`Failed to fetch epub file: ${response.status} ${response.statusText}`);
        }
        
        const arrayBuffer = await response.arrayBuffer();
        
        bookRef.current = ePub(arrayBuffer);
        
        // Add error handling for book loading
        bookRef.current.ready.catch((err: any) => {
          setError('Failed to load epub file');
          setLoading(false);
        });
        
        // Render with proper settings to maintain aspect ratio
        renditionRef.current = bookRef.current.renderTo(viewerRef.current, {
          width: '100%',
          height: '100%',
          spread: 'none',
          allowScriptedContent: true,
          resizeOnOrientationChange: true,
          snap: true
        });
        
        // Add error handling for rendition
        renditionRef.current.on('error', (err: any) => {
          setError('Failed to render epub content');
          setLoading(false);
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
        
        await renditionRef.current.display();
        setLoading(false);
      } catch (err) {
        setError('Error loading preview');
        setLoading(false);
      }
    };

    initEpubViewer();

    // Cleanup function
    return () => {
      if (bookRef.current) {
        bookRef.current.destroy();
      }
    };
  }, [previewFile, coverImageUrl]);

  // Calculate viewer style
  const getViewerStyle = () => {
    return {
      width: '100%',
      height: '700px',
      maxHeight: '800px',
      minHeight: '600px'
    };
  };

  return (
    <div className={`${className} relative`}>
      {/* Epub Viewer Container - Always rendered so ref is available */}
      <div 
        ref={viewerRef}
        className="w-full rounded-lg shadow-lg border border-gray-200 bg-white"
        style={getViewerStyle()}
      >
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <p className="text-gray-600">Loading preview...</p>
            </div>
          </div>
        )}
        
        {/* Error Overlay */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <p className="text-red-600 mb-2">{error}</p>
              <p className="text-gray-600 text-sm">Preview not available</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Navigation Controls - Only show when loaded successfully */}
      {!loading && !error && (
        <>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`px-4 py-2 rounded-lg transition-colors ${
                canGoPrev
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              ← Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`px-4 py-2 rounded-lg transition-colors ${
                canGoNext
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EpubViewer; 