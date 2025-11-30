export interface Chapter {
  id: string;
  title: string;
  content: string;
  isSeparator?: boolean;
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

export interface LoreItem {
  id: string;
  term: string;
  definition: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface Download {
  id: string;
  title: string;
  type: string;
  size: string;
}