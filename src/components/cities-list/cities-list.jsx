import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

export const CitiesList = (props) => {
  const {cities, activeCity, handleCityClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => {
        return <li key={`city-${i}`} className="locations__item">
          <a onClick={(city) => handleCityClick(city)} className={`locations__item-link tabs__item ${city.name === activeCity.name ? ` tabs__item--active` : ``}`} href="#">
            <span>{city.name}</span>
          </a>
        </li>
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick: (city) => {
    dispatch(ActionCreator.newCity(city));
    dispatch(ActionCreator.getOffers(city.name));
  },
});

export default connect(mapStateToProps)(CitiesList);

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};
