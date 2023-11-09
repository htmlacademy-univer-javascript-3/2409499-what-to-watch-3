import { Overview } from './overview';
import { Reviews } from './reviews';
import { Details } from './details';
import { Review } from '../../mocks/reviews';
import { useState } from 'react';
import { Film } from '../../mocks/films';

type TabsProps = {
  reviews: Review[];
  film: Film;
};

export function Tabs({ reviews, film }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const currentTab = (tabType: string) => {
    if (tabType === 'Overview') {
      return <Overview film={film}/>;
    } else if (tabType === 'Details') {
      return <Details film={film}/>;
    } else {
      return <Reviews reviews={reviews}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <a onClick={() => setActiveTab('Overview')} className="film-nav__link">Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <a onClick={() => setActiveTab('Details')} className="film-nav__link">Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <a onClick={() => setActiveTab('Reviews')} className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {currentTab(activeTab)}
    </div>
  );
}
