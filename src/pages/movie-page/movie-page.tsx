import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { Tabs } from '../../components/tabs/tabs';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { fetchComments, fetchFilmByID, fetchSimilarFilms } from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { selectComments, selectFilm, selectSimilarFilms } from '../../store/film-process/film-process.selectors';
import { selectAuthStatus } from '../../store/user-process/user-process.selectors';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/play-button/play-button';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';

function MoviePage(): JSX.Element {
  const id = useParams().id; // Fix this
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmByID(id));
    }
  }, [id, dispatch]);

  const film = useAppSelector(selectFilm);
  const authStatus = useAppSelector(selectAuthStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilarFilms(id));
      dispatch(fetchComments(id));
    }
  }, [id, dispatch]);

  const similarFilms = useAppSelector(selectSimilarFilms);
  const comments = useAppSelector(selectComments);

  if (!film) {
    return <PageNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>Фильм</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <Header />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={id} />
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <>
                    <AddToMyListButton filmId={film.id} isFavorite={film.isFavorite}/>
                    <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                  </>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>
            <Tabs reviews={comments} film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={similarFilms} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
