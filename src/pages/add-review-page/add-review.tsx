import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import UserBlock from '../../components/user-block/user-block';
import { useEffect } from 'react';
import { fetchFilmByID } from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';
import { selectFilm } from '../../store/film-process/film-process.selectors';
import { selectIsLoading } from '../../store/data-process/data-process.selectors';
import Spinner from '../../components/spinner/spinner';
import Logo from '../../components/logo/logo';

function AddReview(): JSX.Element {
  const id = useParams().id;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmByID(id));
    }
  }, [dispatch, id]);

  const film = useAppSelector(selectFilm);
  const isLoading = useAppSelector(selectIsLoading);

  if (!film || !id) {
    return <PageNotFound />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Добавить ревью</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Film} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="review" className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm filmId={id}/>
        </div>

      </section>
    </>
  );
}

export default AddReview;
