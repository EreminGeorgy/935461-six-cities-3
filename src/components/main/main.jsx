import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list.jsx";
import {PlacesList} from "../places-list/places-list.jsx";
import {CityMap} from "../city-map/city-map.jsx";
import {MainEmpty} from "../main-empty/main-empty.jsx";
import Header from "../header/header.jsx";

import {connect} from "react-redux";
import {getSelectedCity, getSelectedOffers, getAppState} from "../../reducer/data/selectors";

export const Main = (props) => {

  const {offersInActiveCity, handleTitleClick, city} = props;

  if (!offersInActiveCity.length) {
    return (
      <MainEmpty
        city={city}
      />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
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
              offers={offersInActiveCity}
              handleTitleClick={handleTitleClick}
              city={city}
            />
            <div className="cities__right-section">
              <CityMap
                offers={offersInActiveCity}
                city={city}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offersInActiveCity: getSelectedOffers(state),
  city: getSelectedCity(state),
  appState: getAppState(state),
});

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  appState: PropTypes.string,
  offersInActiveCity: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })),
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  handleTitleClick: PropTypes.func,
};
