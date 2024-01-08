import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import GenreList from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import { selectFilms, selectGenre, selectPromo } from '../../store/data-process/data-process.selectors';
import { Film } from '../../types/types';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/play-button/play-button';
import { fetchPromo } from '../../store/api-actions';
import { selectAuthStatus } from '../../store/user-process/user-process.selectors';
import Spinner from '../../components/spinner/spinner';
import { AuthorizationStatus } from '../../const';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';

function filterFilms(films: Film[], genre: string): Film[] {
  return genre === 'All genres' ? films : films.filter((film) => film.genre === genre);
}

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);

  const currentGenre = useAppSelector(selectGenre);
  const promoFilm = useAppSelector(selectPromo);
  const films = useAppSelector(selectFilms);
  const authStatus = useAppSelector(selectAuthStatus);

  const filteredFilms = useMemo(() => filterFilms(films, currentGenre), [films, currentGenre]);

  const [filmsCount, setFilmsCount] = useState(8);

  const setFilmsCountCallback = useCallback((count: number) => setFilmsCount(count + 8), []);

  useEffect(() => {
    setFilmsCount(8);
  }, [currentGenre, films, dispatch]);

  if (!promoFilm) {
    return <Spinner />;
  }

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
          <Logo />
          <UserBlock />
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
                <PlayButton filmId={promoFilm?.id} />
                {
                  authStatus === AuthorizationStatus.Auth && (
                    <AddToMyListButton filmId={promoFilm.id} isFavorite={promoFilm.isFavorite}/>
                  )
                }
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
          {filteredFilms.length > filmsCount && <ShowMoreButton setFilmsCount={() => setFilmsCountCallback(filmsCount)} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
