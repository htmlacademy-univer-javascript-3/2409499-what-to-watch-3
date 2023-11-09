import { Film } from '../../mocks/films';

type OverviewProps = {
  film: Film;
};

export function Overview({film}: OverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.details.ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.details.ratingLevel}</span>
          <span className="film-rating__count">{film.details.ratingCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.details.description}</p>

        <p className="film-card__director"><strong>Director: {film.details.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.details.starring.slice(0, 3).join(', ')} and other</strong></p>
      </div>
    </>
  );
}
