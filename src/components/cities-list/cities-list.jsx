import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

export const CitiesList = (props) => {
  const {cities, activeCity, handleCityClick} = props;

  const memoCityClick = useCallback(handleCityClick, []);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => {
        return <li key={`city-${i}`} className="locations__item">
          <a
            onClick={() => memoCityClick(city)}
            className={`locations__item-link tabs__item ${city.name === activeCity.name ? ` tabs__item--active` : ``}`} href="#">
            <span>{city.name}</span>
          </a>
        </li>;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(city) {
    dispatch(ActionCreator.newCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

CitiesList.propTypes = {
  activeCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.array.isRequired,
  }),
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  handleCityClick: PropTypes.func,
};
