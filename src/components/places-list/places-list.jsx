import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {Sort} from "../sort/sort.jsx";

const SORT_TYPE = {
  LOW_TO_HIGH: `lowToHigh`,
  HIGHT_TO_LOW: `highToLow`,
  TOP_RATED: `topRated`,
};

export const PlacesList = (props) => {

  const {onTitleClick, offers, city, setActiveCard} = props;

  const memoizedCard = useCallback(setActiveCard, []);

  const [item, setItem] = useState(null);
  const memoizedItem = useCallback(setItem, []);

  const sortLowToHigh = (elements) => {
    return elements.slice().sort((a, b) => {
      return a.price - b.price;
    });
  };

  const sortHighToLow = (elements) => {
    return elements.slice().sort((a, b) => {
      return b.price - a.price;
    });
  };

  const sortTopRatedFirst = (elements) => {
    return elements.slice().sort((a, b) => {
      return b.rating - a.rating;
    });
  };

  const onMenuClick = (elements) => {
    if (!item) {
      return elements;
    } else {
      switch (item.id) {
        case SORT_TYPE.LOW_TO_HIGH:
          return sortLowToHigh(elements);
        case SORT_TYPE.HIGHT_TO_LOW:
          return sortHighToLow(elements);
        case SORT_TYPE.TOP_RATED:
          return sortTopRatedFirst(elements);
        default: return elements;
      }
    }
  };

  let sortedOffers = onMenuClick(offers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city.name}</b>
      <Sort
        setItem={memoizedItem}
      />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => {
          return <PlaceCard
            key={offer.id}
            onCardHover={memoizedCard}
            onTitleClick={onTitleClick}
            offer={offer}
          />;
        })}
      </div>
    </section>
  );
};

PlacesList.propTypes = {
  setActiveCard: PropTypes.func,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
  }),
  onTitleClick: PropTypes.func,
  offers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })).isRequired,
};
