import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import GenreList from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Footer from '../../components/footer/footer';
import { selectFilms, selectGenre, selectPromo } from '../../store/data-process/data-process.selectors';
import { Film } from '../../types/types';

function filterFilms(films: Film[], genre: string): Film[] {
  return genre === 'All genres' ? films : films.filter((film) => film.genre === genre);
}

function MainPage(): JSX.Element {
  const currentGenre = useAppSelector(selectGenre);
  const promoFilm = useAppSelector(selectPromo);
  const films = useAppSelector(selectFilms);
  const filteredFilms = useMemo(() => filterFilms(films, currentGenre), [films, currentGenre]);
  const [filmsCount, setFilmsCount] = useState(8);

  const dispatch = useDispatch();

  const setFilmsCountCallback = useCallback((filmsCount: number) => setFilmsCount(filmsCount + 8), []);

  useEffect(() => {
    setFilmsCount(8);
  }, [currentGenre, films, dispatch]);

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
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
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsList films={filteredFilms.slice(0, filmsCount)} />
          {filteredFilms.length > filmsCount && <ShowMoreButton setFilmsCount={() => setFilmsCountCallback(filmsCount)}/>}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
