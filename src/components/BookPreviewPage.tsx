import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadSeries, loadNovels, loadShortStories } from '../utils/dataLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BookPreviewPage: React.FC = () => {
  const { type, id, seriesId, language } = useParams<{ type?: string; id: string; seriesId?: string; language?: string }>();
  const navigate = useNavigate();
  const [previewMarkdown, setPreviewMarkdown] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        let previewFile = '';
        let bookTitle = '';
        if (seriesId && language) {
          const series = await loadSeries();
          const seriesData = series.find(s => s.id === seriesId);
          if (seriesData) {
            const langData = seriesData.data.find(d => d.language === language);
            if (langData) {
              const book = langData.books.find(b => b.id === id);
              if (book) {
                previewFile = `/books/series/${seriesId}/${language}/${book.id}/preview.md`;
                bookTitle = book.title;
              }
            }
          }
        } else if (type === 'novels') {
          const novels = await loadNovels();
          const novel = novels.find(n => n.id === id);
          if (novel) {
            previewFile = `/books/novels/${novel.data[0].language}/${novel.id}/preview.md`;
            bookTitle = novel.data[0].title;
          }
        } else if (type === 'shorts') {
          const shorts = await loadShortStories();
          const short = shorts.find(s => s.id === id);
          if (short) {
            previewFile = `/books/shorts/${short.data[0].language}/${short.id}/preview.md`;
            bookTitle = short.data[0].title;
          }
        }
        if (previewFile) {
          const resp = await fetch(previewFile);
          if (!resp.ok) throw new Error('Preview not found');
          const md = await resp.text();
          setPreviewMarkdown(md);
          setTitle(bookTitle);
        } else {
          setError('Preview not found');
        }
      } catch (err) {
        setError('Error loading preview');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();
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
      <div className="prose prose-lg prose-justify text-justify max-w-none prose-headings:font-display prose-headings:text-primary prose-h1:mb-4 prose-h2:mb-2 prose-h3:mb-2 prose-p:leading-relaxed prose-p:mb-4 prose-li:my-1">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{previewMarkdown}</ReactMarkdown>
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