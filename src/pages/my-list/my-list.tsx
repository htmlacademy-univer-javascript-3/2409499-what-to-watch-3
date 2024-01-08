import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import { selectFavoriteFilms } from '../../store/data-process/data-process.selectors';
import Logo from '../../components/logo/logo';
import { useEffect } from 'react';
import { fetchFavoriteFilms } from '../../store/api-actions';

function MyList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  return (
    <>
      <Helmet>
        <title>Мой список фильмов</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
          <UserBlock />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList films={favoriteFilms}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
