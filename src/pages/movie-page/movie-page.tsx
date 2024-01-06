import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Tabs } from '../../components/tabs/tabs';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { fetchComments, fetchFilmByID, fetchSimilarFilms } from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { setActiveFilm } from '../../store/action';

function MoviePage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const activeFilm = useAppSelector((state) => state.activeFilm);

  useEffect(() => {
    if (id && !activeFilm) {
      dispatch(fetchFilmByID(id));
    } else {
      dispatch(setActiveFilm(null));
    }
  }, [id, dispatch]);

  const film = useAppSelector((state) => state.activeFilm);
  const authStatus = useAppSelector((state) => state.authStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilarFilms(id));
      dispatch(fetchComments(id));
    }
  }, [id, dispatch]);

  const similarFilms = useAppSelector((state) => state.similarFilms);
  const comments = useAppSelector((state) => state.comments);

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
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
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
            <Tabs reviews={comments} film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={similarFilms}/>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
