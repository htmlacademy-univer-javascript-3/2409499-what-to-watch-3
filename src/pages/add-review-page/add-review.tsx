import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../hooks/hooks';
import Header from '../../components/header/header';

function AddReview(): JSX.Element {
  const {id} = useParams();
  const films = useAppSelector((state) => state.films);
  const film = films.find((item) => item.id === id) ?? films[0];

  return (
    <>
      <Helmet>
        <title>Добавить ревью</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Film} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <Header />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm filmId={film.id}/>
        </div>

      </section>
    </>
  );
}

export default AddReview;
