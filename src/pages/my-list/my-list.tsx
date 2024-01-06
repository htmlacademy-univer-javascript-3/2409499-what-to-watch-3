import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { selectFilms } from '../../store/data-process/data-process.selectors';

function MyList(): JSX.Element {
  const films = useAppSelector(selectFilms);
  return (
    <>
      <Helmet>
        <title>Мой список фильмов</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <Header />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList films={films}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
