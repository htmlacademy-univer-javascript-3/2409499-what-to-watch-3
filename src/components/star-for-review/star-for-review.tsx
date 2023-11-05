import { useState, SetStateAction } from 'react';

export type StarProps = {
  score: string;
}

export function StarForReview({score}: StarProps): JSX.Element {
  const [rating, setRating] = useState('');
  const handleRatingChange = (evt: {target: {value: SetStateAction<string>}}) => {
    setRating(evt.target.value);
  };

  return (
    <>
      <input className="rating__input" id={`star-${score}`} type="radio" name="rating"
        checked={score === rating}
        onChange={handleRatingChange}
      />
      <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
    </>
  );
}
