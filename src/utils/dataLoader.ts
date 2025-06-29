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
          const response = await fetch(`/books/novels/${lang}/novels.json`);
          const data = await response.json();
          const novel = data.find((book: any) => book.id === meta.id);
          if (novel) {
            return {
              ...novel,
              language: lang,
              coverImage: `/books/novels/${lang}/${novel.id}/cover.jpg`,
              longDescription: `/books/novels/${lang}/${novel.id}/description.md`,
              previewFileName: `/books/novels/${lang}/${novel.id}/preview.epub`,
              epubFileName: novel.epubFileName
            };
          }
          return null;
        })
      );
      
      const validData = novelData.filter((data): data is NonNullable<typeof data> => data !== null);
      
      if (validData.length > 0) {
        novels.push({
          id: meta.id,
          languages: meta.languages,
          data: validData
        });
      }
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
          const response = await fetch(`/books/shorts/${lang}/shorts.json`);
          const data = await response.json();
          const short = data.find((book: any) => book.id === meta.id);
          if (short) {
            return {
              ...short,
              language: lang,
              coverImage: `/books/shorts/${lang}/${short.id}/cover.jpg`,
              longDescription: `/books/shorts/${lang}/${short.id}/description.md`,
              previewFileName: `/books/shorts/${lang}/${short.id}/preview.md`
            };
          }
          return null;
        })
      );
      
      const validData = shortData.filter((data): data is NonNullable<typeof data> => data !== null);
      
      if (validData.length > 0) {
        shorts.push({
          id: meta.id,
          languages: meta.languages,
          data: validData
        });
      }
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
            language: langData.language,
            languages: series.languages
          });
        }
      });
    });
  });

  // Add novels - create one entry per novel
  novels.forEach(novel => {
    const latestLangData = novel.data.find((langData: Novel['data'][0]) => langData.is_latest);
    if (latestLangData) {
      allBooks.push({
        id: novel.id,
        ...latestLangData,
        type: 'novel',
        language: latestLangData.language,
        languages: novel.languages
      });
    }
  });

  // Add short stories - create one entry per short story
  shorts.forEach(short => {
    const latestLangData = short.data.find((langData: ShortStory['data'][0]) => langData.is_latest);
    if (latestLangData) {
      allBooks.push({
        id: short.id,
        ...latestLangData,
        type: 'short',
        language: latestLangData.language,
        languages: short.languages
      });
    }
  });

  return allBooks;
}; 