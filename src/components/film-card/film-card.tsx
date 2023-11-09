import { Film } from '../../mocks/films';
import { MouseEventHandler, useEffect, useState } from 'react';
import { VideoPlayer } from '../video-player/video-player';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmProps = {
  film: Film;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
  isHovered?: boolean;
};

function FilmCard({ film, onMouseEnter, onMouseLeave, isHovered }: FilmProps): JSX.Element {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const delay = setTimeout(() => setActive(true), 1000);
      return () => clearTimeout(delay);
    } else {
      setActive(false);
    }
  }, [isHovered]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        {active ?
          <VideoPlayer src={film.videoSrc} poster={film.image} muted autoPlay width={280} height={175} /> :
          <img src={film.image} width="280" height="175" alt={film.filmName} />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{film.filmName}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
