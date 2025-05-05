export interface Book {
  id: string;
  title: string;
  coverImage: string;
  longDescription: string;
  previewFileName: string;
  epubFileName: string;
  price: number;
  genre: string;
  is_latest: boolean;
  type: 'series' | 'novel' | 'short';
  language: string;
  seriesId?: string;
  languages?: string[];
}

export interface Series {
  id: string;
  languages: string[];
  data: Array<{
    title: string;
    shortDescription: string;
    genre: string;
    language: string;
    books: Book[];
  }>;
}

export interface Novel {
  id: string;
  languages: string[];
  data: Array<{
    title: string;
    coverImage: string;
    longDescription: string;
    previewFileName: string;
    epubFileName: string;
    price: number;
    genre: string;
    is_latest: boolean;
    language: string;
  }>;
}

export interface ShortStory {
  id: string;
  languages: string[];
  data: Array<{
    title: string;
    coverImage: string;
    longDescription: string;
    previewFileName: string;
    epubFileName: string;
    price: number;
    genre: string;
    is_latest: boolean;
    language: string;
  }>;
} 