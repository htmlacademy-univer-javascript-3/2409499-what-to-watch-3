import { Link } from 'react-router-dom';
import PageNotFound from '../../pages/page-not-found/page-not-found';

type PlayButtonProps = {
  filmId: string | undefined;
};

function PlayButton({filmId}: PlayButtonProps): JSX.Element {
  if (!filmId) {
    return <PageNotFound />;
  }
  return (
    <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default PlayButton;
