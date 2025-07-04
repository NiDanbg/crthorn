import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BookCard from './components/BookCard';
import SeriesCard from './components/SeriesCard';
import BookDetail from './components/BookDetail';
import { Book, Series } from './types';
import { loadLatestBooks, loadSeries, loadNovels, loadShortStories } from './utils/dataLoader';
import SeriesLanguagePage from './components/SeriesLanguagePage';
import BookPreviewPage from './components/BookPreviewPage';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieManager from './utils/cookieManager';
import NotFound from './components/NotFound';
// НОВО: Импортираме нашия нов компонент за новини
import NewsSidebar from './NewsSidebar';
import NewsPage from './NewsPage';
import SEOHead from './components/SEOHead';

const App: React.FC = () => {
  const [latestBooks, setLatestBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const cookieManager = CookieManager.getInstance();

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

  const handleCookieAccept = () => {
    cookieManager.setConsent(true);
  };

  const handleCookieDecline = () => {
    cookieManager.setConsent(false);
    cookieManager.clearAllCookies();
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <nav className="bg-turkishBlue shadow-md border-b border-turkishBlue/20 fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 text-2xl font-display text-white hover:text-accent transition-colors group">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-300"
                  >
                    <path d="M20 4L20 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8L32 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 16C16 16 20 12 24 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
                    <path d="M16 24C16 24 20 20 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-30"/>
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Crispin Thorn</span>
                </Link>
              </div>
              <div className="flex space-x-8">
                <NavLink to="/series" className="text-white/90 hover:text-yellow-300 font-medium">Series</NavLink>
                <NavLink to="/novels" className="text-white/90 hover:text-yellow-300 font-medium">Novels</NavLink>
                <NavLink to="/shorts" className="text-white/90 hover:text-yellow-300 font-medium">Short Stories</NavLink>
                <NavLink to="/news" className="text-white/90 hover:text-yellow-300 font-medium">News</NavLink>
                <NavLink to="/about" className="text-white/90 hover:text-yellow-300 font-medium">About</NavLink>
                <NavLink to="/contact" className="text-white/90 hover:text-yellow-300 font-medium">Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* ПРОМЕНЕНО: Структурата на main е променена, за да има двуколонна подредба */}
        <main className="pt-20">
          {/* НОВО: Този div създава двуколонната подредба и я центрира */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12 items-start">
            
            {/* НОВО: Колона 2 - Основното съдържание, което заема останалото място */}
            {/* 'min-w-0' е важен трик, за да работи flexbox правилно с overflow */}
            <div className="flex-1 min-w-0">
              <Routes>
                {/* Всички твои Routes са тук, непроменени, но вече са в дясната колона */}
                <Route path="/" element={
                  <>
                    <SEOHead 
                      title="Crispin Thorn - Author Page"
                      description="Krasimir Tenev (Crispin Thorn) - Bulgarian speculative fiction author. Explore his unique worlds through the Blood and Stardust series, Boria novels, and short stories."
                    />
                    <div>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                              {latestBooks.map(book => (
                                <BookCard key={book.id} book={book} />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                } />
                <Route path="/series" element={
                  <>
                    <SEOHead 
                      title="Book Series - Crispin Thorn"
                      description="Explore the complete book series by Crispin Thorn including Blood and Stardust, Boria, and The Age of the Fallen. Available in multiple languages."
                    />
                    <CategoryPage type="series" />
                  </>
                } />
                <Route path="/series/:seriesId/:language" element={<SeriesLanguagePage />} />
                <Route path="/series/:seriesId/:language/book/:id" element={<BookDetail />} />
                <Route path="/series/:seriesId/:language/book/:id/preview" element={<BookPreviewPage />} />
                <Route path="/novels" element={
                  <>
                    <SEOHead 
                      title="Novels - Crispin Thorn"
                      description="Discover standalone novels by Crispin Thorn including Love 2.0, The Bus of the Lost, and The Circle of the Old Mill. Speculative fiction at its finest."
                    />
                    <CategoryPage type="novels" />
                  </>
                } />
                <Route path="/novels/:id/:language" element={<BookDetail />} />
                <Route path="/novels/:id/:language/preview" element={<BookPreviewPage />} />
                <Route path="/shorts" element={
                  <>
                    <SEOHead 
                      title="Short Stories - Crispin Thorn"
                      description="Read short stories by Crispin Thorn including The Requiem for the World That Chose Me and Whisper of a Stranger. Compact fiction with powerful impact."
                    />
                    <CategoryPage type="shorts" />
                  </>
                } />
                <Route path="/shorts/:id/:language" element={<BookDetail />} />
                <Route path="/shorts/:id/:language/preview" element={<BookPreviewPage />} />
                <Route path="/news" element={
                  <>
                    <SEOHead 
                      title="News - Crispin Thorn"
                      description="Latest news and updates from Crispin Thorn. New releases, events, and announcements about upcoming books and projects."
                    />
                    <NewsPage />
                  </>
                } />
                <Route path="/about" element={
                  <>
                    <SEOHead 
                      title="About the Author - Crispin Thorn"
                      description="Learn about Krasimir Tenev (Crispin Thorn), Bulgarian speculative fiction author. Background, education, and the inspiration behind his unique worlds."
                    />
                    <div>
                      <h1 className="text-3xl font-display text-primary text-center mb-8">About the Author</h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                          <img src="/author.jpg" alt="Krasimir Tenev" className="w-full rounded-lg shadow-lg"/>
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
                  </>
                } />
                <Route path="/contact" element={
                  <>
                    <SEOHead 
                      title="Contact - Crispin Thorn"
                      description="Get in touch with Crispin Thorn. Contact information and ways to reach the author for questions, feedback, or collaboration."
                    />
                    <div>
                      <h1 className="text-3xl font-display text-primary text-center mb-8">Contact</h1>
                      <Contact />
                    </div>
                  </>
                } />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </main>

        <footer className="bg-turkishBlue shadow-md border-t border-turkishBlue/20 mt-12 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <p>Krasimir Tenev | Copyright © 2024</p>
              <Link to="/privacy-policy" className="text-white/90 hover:text-yellow-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>

        <CookieConsent onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      </div>
    </Router>
  );
};

// ... останалата част от файла (NavLink, CategoryPage) остава непроменена ...
const NavLink: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${className} transition-colors ${
        isActive ? 'text-accent font-semibold' : ''
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
              const firstLangData = novel.data[0];
              if (firstLangData) {
                data.push({ ...firstLangData, id: novel.id, type: 'novel', language: firstLangData.language, languages: novel.languages });
              }
            });
          } else if (type === 'shorts') {
            const shorts = await loadShortStories();
            shorts.forEach(short => {
              const firstLangData = short.data[0];
              if (firstLangData) {
                data.push({ ...firstLangData, id: short.id, type: 'short', language: firstLangData.language, languages: short.languages });
              }
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
    // ЗАБЕЛЕЖКА: И оттук премахнахме 'max-w-7xl mx-auto py-12 px-4...'
    <div>
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
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;