import { Comment } from '../../types/types';

type ReviewCardProps = {
  reviewDetails: Comment;
};

function getDateString(date: Date) {
  return `${date.toLocaleString('eng', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`;
}

function ReviewCard({ reviewDetails }: ReviewCardProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewDetails.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewDetails.user}</cite>
          <time className="review__date" dateTime={reviewDetails.date}>{getDateString(new Date(reviewDetails.date))}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewDetails.rating}</div>
    </div>
  );
}

type ReviewsProps = {
  reviews: Comment[];
};

export function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((item) => (<ReviewCard reviewDetails={item} key={item.id}/>))}
      </div>
    </div>
  );
}
