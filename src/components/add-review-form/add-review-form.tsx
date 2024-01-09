import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { commentPost } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';

export type AddReviewFormProps = {
  filmId: string;
};

const MAX_LEN_REVIEW = 400;
const MIN_LEN_REVIEW = 50;

const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export function AddReviewForm({ filmId }: AddReviewFormProps): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const textChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!isDisabled) {
      if (event.target.value.length < 50 || event.target.value.length > 400) {
        setErrorMessage('Comment should contain from 50 to 400 characters');
      } else {
        setErrorMessage('');
      }
    }
    setReview(event.target.value);
  };
  const ratingChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value));

  const postEventHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(commentPost({ filmId: filmId, commentRequest: { rating: rating, comment: review } }))
      .unwrap()
      .then(() => {
        setIsDisabled(false);
        navigate(`/films/${filmId}`);
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };

  return (
    <>
      {errorMessage ? (<p>{errorMessage}</p>) : null}
      <form action="#" className="add-review__form" onSubmit={postEventHandler}>
        <div className="rating">
          <div className="rating__stars">
            {ratings.map((num) => (
              <Fragment key={num}>
                <input
                  className="rating__input"
                  id={`star-${num}`}
                  type="radio"
                  name="rating"
                  value={num}
                  onChange={ratingChangeHandler}
                />
                <label className="rating__label" htmlFor={`star-${num}`}>
                  Rating {num}
                </label>
              </Fragment>)
            )}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={review}
            onChange={textChangeHandler}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit"
              disabled={review.length < MIN_LEN_REVIEW || review.length > MAX_LEN_REVIEW || isDisabled || rating === 0}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </>
  );
}
