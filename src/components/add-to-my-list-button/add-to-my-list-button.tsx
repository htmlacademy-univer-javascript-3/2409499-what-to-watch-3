import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectFavoriteFilmsCount } from '../../store/data-process/data-process.selectors';
import { setFavorite } from '../../store/api-actions';

type AddToMyListButtonProps = {
  filmId: string;
  isFavorite: boolean;
}

function AddToMyListButton({ filmId, isFavorite }: AddToMyListButtonProps): JSX.Element {
  const favoriteFilmsCount = useAppSelector(selectFavoriteFilmsCount);
  const dispatch = useAppDispatch();

  const handleSetFavorite = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(setFavorite({status: !isFavorite, filmId: filmId}));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleSetFavorite}>
      {
        isFavorite ?
          (<svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#in-list" data-testid="in-list"/></svg>) :
          (<svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add" data-testid="add"/></svg>)
      }
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
}

export default AddToMyListButton;
