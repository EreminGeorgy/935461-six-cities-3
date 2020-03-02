import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list.jsx";
import {PlacesList} from "../places-list/places-list.jsx";
import {CityMap} from "../city-map/city-map.jsx";

export const Main = (props) => {
  const {proposalsNumber, offers, handleTitleClick, city} = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <CitiesList />
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <PlacesList
            proposalsNumber={proposalsNumber}
            offers={offers}
            handleTitleClick={handleTitleClick}
          />
          <div className="cities__right-section">
            <CityMap
              offers={offers}
              city={city}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  proposalsNumber: PropTypes.number,
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
