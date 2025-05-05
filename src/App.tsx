import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BookCard from './components/BookCard';
import SeriesCard from './components/SeriesCard';
import BookDetail from './components/BookDetail';
import { Book, Series } from './types';
import { loadLatestBooks, loadSeries, loadNovels, loadShortStories } from './utils/dataLoader';
import SeriesLanguagePage from './components/SeriesLanguagePage';
import BookPreviewPage from './components/BookPreviewPage';

const App: React.FC = () => {
  const [latestBooks, setLatestBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(latestBooks);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await loadLatestBooks();
        setLatestBooks(books);
      } catch (error) {
        console.error('Error loading latest books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <nav className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-display text-primary hover:text-accent transition-colors">
                  CRTHORN
                </Link>
              </div>
              <div className="flex space-x-8">
                <NavLink to="/series">Series</NavLink>
                <NavLink to="/novels">Novels</NavLink>
                <NavLink to="/shorts">Short Stories</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-8 animate-fade-in">
                  <h1 className="text-4xl font-display text-primary">Krasimir Tenev</h1>
                  <p className="text-xl text-secondary">Writing as Crispin Thorn</p>
                  <div className="max-w-2xl mx-auto mt-8">
                    <p className="text-text text-lg">
                      A speculative fiction author who creates unique worlds and characters, 
                      pushing the boundaries of the genre with a deep interest in history 
                      and psychological nuance.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h2 className="text-3xl font-display text-primary mb-8">Latest Releases</h2>
                    {loading ? (
                      <div className="text-center">Loading...</div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestBooks.map(book => (
                          <BookCard key={`${book.id}-${book.language}${book.seriesId ? `-${book.seriesId}` : ''}`} book={book} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            } />
            <Route path="/series" element={<CategoryPage type="series" />} />
            <Route path="/series/:seriesId/:language" element={<SeriesLanguagePage />} />
            <Route path="/series/:seriesId/:language/book/:id" element={<BookDetail />} />
            <Route path="/series/:seriesId/:language/book/:id/preview" element={<BookPreviewPage />} />
            <Route path="/novels" element={<CategoryPage type="novels" />} />
            <Route path="/novels/:id" element={<BookDetail />} />
            <Route path="/novels/:id/preview" element={<BookPreviewPage />} />
            <Route path="/shorts" element={<CategoryPage type="shorts" />} />
            <Route path="/shorts/:id" element={<BookDetail />} />
            <Route path="/shorts/:id/preview" element={<BookPreviewPage />} />
            <Route path="/about" element={
              <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-display text-primary text-center mb-8">About the Author</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <img
                      src="/author.jpg"
                      alt="Krasimir Tenev"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="prose mx-auto">
                    <p>
                      Krasimir Tenev (often publishes under the pen name Crispin Thorn) is a Bulgarian author of science fiction, born and raised in the city of Burgas. Growing up, he was an avid reader of authors like Stanislaw Lem and Isaac Asimov, and devoured classics like The Lord of the Rings and The Belgariad. He found joy in the adventures of Star Wars, Indiana Jones, and many others.
                    </p>
                    <p>
                      He graduated from the Law Faculty of Burgas Free University. After earning his degree in 2002, he moved to Sofia, where he began his career as a lawyer and started sketching the world of Boria.
                    </p>
                    <p>
                      The "Blood and Star Dust" series has been translated into five languages and continues to captivate readers.
                    </p>
                  </div>
                </div>
              </div>
            } />
            <Route path="/contact" element={
              <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-display text-primary text-center mb-8">Contact</h1>
                <div className="prose mx-auto text-center">
                  <p>For inquiries, please reach out through the following channels:</p>
                  <p className="mt-4">
                    <a href="mailto:contact@crthorn.com" className="text-secondary hover:text-accent transition-colors">
                      contact@crthorn.com
                    </a>
                  </p>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-primary/10 backdrop-blur-sm border-t border-primary/20 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text">
            <p>Krasimir Tenev | Copyright © 2024</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-text hover:text-accent transition-colors ${
        isActive ? 'text-accent' : ''
      }`}
    >
      {children}
    </Link>
  );
};

const CategoryPage: React.FC<{ type: 'series' | 'novels' | 'shorts' }> = ({ type }) => {
  const [series, setSeries] = useState<Series[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'series') {
          const seriesData = await loadSeries();
          setSeries(seriesData);
        } else {
          let data: Book[] = [];
          if (type === 'novels') {
            const novels = await loadNovels();
            novels.forEach(novel => {
              novel.data.forEach(langData => {
                data.push({
                  ...langData,
                  id: novel.id,
                  type: 'novel',
                  language: langData.language
                });
              });
            });
          } else if (type === 'shorts') {
            const shorts = await loadShortStories();
            shorts.forEach(short => {
              short.data.forEach(langData => {
                data.push({
                  ...langData,
                  id: short.id,
                  type: 'short',
                  language: langData.language
                });
              });
            });
          }
          setBooks(data);
        }
      } catch (error) {
        console.error(`Error loading ${type}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display text-primary text-center mb-8">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : type === 'series' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {series.map(series => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map(book => (
            <BookCard key={`${book.id}-${book.language}${book.seriesId ? `-${book.seriesId}` : ''}`} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
