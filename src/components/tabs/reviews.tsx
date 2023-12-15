import { Review } from '../../types/types';

type ReviewCardProps = {
  reviewDetails: Review;
};

function ReviewCard({ reviewDetails }: ReviewCardProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewDetails.reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewDetails.author}</cite>
          <time className="review__date" dateTime="2016-12-24">{reviewDetails.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewDetails.reviewRating}</div>
    </div>
  );
}

type ReviewsProps = {
  reviews: Review[];
};

export function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((item) => (<ReviewCard reviewDetails={item} key={null}/>))}
      </div>
    </div>
  );
}
