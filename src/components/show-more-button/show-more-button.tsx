import { MouseEventHandler } from 'react';

export type ShowMoreButtonProps = {
  setFilmsCount: MouseEventHandler;
};

function ShowMoreButton({setFilmsCount}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={setFilmsCount}>
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
