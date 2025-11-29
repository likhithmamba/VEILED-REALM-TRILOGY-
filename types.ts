export interface Chapter {
  id: string;
  title: string;
  content: string;
}

export interface Book {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverUrl: string;
  excerpt: string;
  buyUrl: string;
  chapters: Chapter[];
}

export interface Epoch {
  id: number;
  title: string;
  year: string;
  description: string;
  icon?: string;
}