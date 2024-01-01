export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const Setting = {
  FilmName: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  FilmYear: 2014
} as const;

export const TIMEOUT_SHOW_ERROR = 2000;
