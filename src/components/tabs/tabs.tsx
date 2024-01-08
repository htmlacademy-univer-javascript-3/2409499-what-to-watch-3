import { Overview } from './overview';
import { Reviews } from './reviews';
import { Details } from './details';
import { Comment } from '../../types/types';
import { useState } from 'react';
import { Film } from '../../types/types';

type TabsProps = {
  reviews: Comment[];
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
            <button onClick={() => setActiveTab('Overview')} className="film-nav__link" type="button">Overview</button>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <button onClick={() => setActiveTab('Details')} className="film-nav__link" type="button">Details</button>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <button onClick={() => setActiveTab('Reviews')} className="film-nav__link" type="button">Reviews</button>
          </li>
        </ul>
      </nav>
      {currentTab(activeTab)}
    </div>
  );
}
