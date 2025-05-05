import { Series, Book, Novel, ShortStory } from '../types';

export const loadSeries = async (): Promise<Series[]> => {
  try {
    const response = await fetch('/books/series/metadata.json');
    const seriesMetadata = await response.json();
    
    const series: Series[] = [];
    
    for (const meta of seriesMetadata) {
      const seriesData = await Promise.all(
        meta.languages.map(async (lang: string) => {
          const response = await fetch(`/books/series/${meta.id}/${lang}/${meta.id}.json`);
          const data = await response.json();
          return {
            ...data,
            language: lang
          };
        })
      );
      
      series.push({
        id: meta.id,
        languages: meta.languages,
        data: seriesData
      });
    }
    
    return series;
  } catch (error) {
    console.error('Error loading series:', error);
    return [];
  }
};

export const loadNovels = async (): Promise<Novel[]> => {
  try {
    const response = await fetch('/books/novels/metadata.json');
    const novelsMetadata = await response.json();
    
    const novels: Novel[] = [];
    
    for (const meta of novelsMetadata) {
      const novelData = await Promise.all(
        meta.languages.map(async (lang: string) => {
          // Load description from markdown
          const descriptionResponse = await fetch(`/books/novels/${lang}/${meta.id}/description.md`);
          const longDescription = await descriptionResponse.text();
          
          // Load preview from markdown
          const previewResponse = await fetch(`/books/novels/${lang}/${meta.id}/preview.md`);
          const previewContent = await previewResponse.text();
          
          return {
            title: meta.id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            coverImage: 'cover.jpg',
            longDescription,
            previewFileName: 'preview.md',
            epubFileName: `${meta.id}_${lang}.epub`,
            price: 9.99, // Default price, should be configurable
            genre: 'Science Fiction', // Default genre, should be configurable
            is_latest: true, // Default to true, should be configurable
            language: lang
          };
        })
      );
      
      novels.push({
        id: meta.id,
        languages: meta.languages,
        data: novelData
      });
    }
    
    return novels;
  } catch (error) {
    console.error('Error loading novels:', error);
    return [];
  }
};

export const loadShortStories = async (): Promise<ShortStory[]> => {
  try {
    const response = await fetch('/books/shorts/metadata.json');
    const shortsMetadata = await response.json();
    
    const shorts: ShortStory[] = [];
    
    for (const meta of shortsMetadata) {
      const shortData = await Promise.all(
        meta.languages.map(async (lang: string) => {
          // Load description from markdown
          const descriptionResponse = await fetch(`/books/shorts/${lang}/${meta.id}/description.md`);
          const longDescription = await descriptionResponse.text();
          
          // Load preview from markdown
          const previewResponse = await fetch(`/books/shorts/${lang}/${meta.id}/preview.md`);
          const previewContent = await previewResponse.text();
          
          return {
            title: meta.id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            coverImage: 'cover.jpg',
            longDescription,
            previewFileName: 'preview.md',
            epubFileName: `${meta.id}_${lang}.epub`,
            price: 4.99, // Default price, should be configurable
            genre: 'Science Fiction', // Default genre, should be configurable
            is_latest: true, // Default to true, should be configurable
            language: lang
          };
        })
      );
      
      shorts.push({
        id: meta.id,
        languages: meta.languages,
        data: shortData
      });
    }
    
    return shorts;
  } catch (error) {
    console.error('Error loading short stories:', error);
    return [];
  }
};

export const loadLatestBooks = async (): Promise<Book[]> => {
  const [series, novels, shorts] = await Promise.all([
    loadSeries(),
    loadNovels(),
    loadShortStories()
  ]);

  const allBooks: Book[] = [];

  // Extract books from series
  series.forEach(series => {
    series.data.forEach(langData => {
      langData.books.forEach((book: Book) => {
        if (book.is_latest) {
          allBooks.push({
            ...book,
            type: 'series',
            seriesId: series.id,
            language: langData.language
          });
        }
      });
    });
  });

  // Add novels
  novels.forEach(novel => {
    novel.data.forEach((langData: Novel['data'][0]) => {
      if (langData.is_latest) {
        allBooks.push({
          id: novel.id,
          ...langData,
          type: 'novel',
          language: langData.language
        });
      }
    });
  });

  // Add short stories
  shorts.forEach(short => {
    short.data.forEach((langData: ShortStory['data'][0]) => {
      if (langData.is_latest) {
        allBooks.push({
          id: short.id,
          ...langData,
          type: 'short',
          language: langData.language
        });
      }
    });
  });

  return allBooks;
}; 