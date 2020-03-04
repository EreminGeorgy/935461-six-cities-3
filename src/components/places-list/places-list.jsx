import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";


export const PlacesList = (props) => {
  const [activeCard, setActiveCard] = useState(null);
  const memoizedCard = useCallback(setActiveCard, []);
  const {handleTitleClick, offers, city} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city.name}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return <PlaceCard
            key={offer.id}
            activeCard={activeCard}
            handleCardHover={memoizedCard}
            handleTitleClick={handleTitleClick}
            offer={offer}
          />;
        })}
      </div>
    </section>
  );
};

PlacesList.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.array.isRequired,
  }),
  handleTitleClick: PropTypes.func,
  offers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })).isRequired,
};
