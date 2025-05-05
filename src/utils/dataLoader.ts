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
    console.log('Loading novels metadata...');
    const response = await fetch('/books/novels/metadata.json');
    const novelsMetadata = await response.json();
    console.log('Novels metadata:', novelsMetadata);
    
    const novels: Novel[] = [];
    
    for (const meta of novelsMetadata) {
      console.log('Processing novel:', meta.id);
      const novelData = await Promise.all(
        meta.languages.map(async (lang: string) => {
          console.log(`Loading novel data for ${meta.id} in ${lang}...`);
          const response = await fetch(`/books/novels/${lang}/novels.json`);
          const data = await response.json();
          console.log(`Novel data for ${meta.id} in ${lang}:`, data);
          const novel = data.find((book: any) => book.id === meta.id);
          console.log(`Found novel:`, novel);
          if (novel) {
            return {
              ...novel,
              language: lang,
              coverImage: `/books/novels/${lang}/${novel.id}/cover.jpg`,
              longDescription: `/books/novels/${lang}/${novel.id}/description.md`,
              previewFileName: `/books/novels/${lang}/${novel.id}/preview.md`,
              epubFileName: novel.epubFileName
            };
          }
          return null;
        })
      );
      
      const validData = novelData.filter((data): data is NonNullable<typeof data> => data !== null);
      console.log('Valid data for novel:', validData);
      
      if (validData.length > 0) {
        novels.push({
          id: meta.id,
          languages: meta.languages,
          data: validData
        });
      }
    }
    
    console.log('Final novels array:', novels);
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