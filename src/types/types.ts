export type Film = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  released: number;
  isFavorite: boolean;
};

export type Review = {
  author: string;
  date: string;
  reviewRating: number;
  reviewText: string;
};

export type Promo = {
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
};
