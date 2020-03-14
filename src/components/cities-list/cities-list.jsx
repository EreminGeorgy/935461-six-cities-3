import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import {ActionCreator as AppActionCreator} from "../../reducer/application/application.js";
import {getSelectedCity} from "../../reducer/application/selectors";
import {getSelectedCity as getSelectedCityFromData} from "../../reducer/data/selectors";

import {getCities} from "../../reducer/data/selectors";

export const CitiesList = (props) => {
  const {cities, activeCity, handleCityClick} = props;

  if (!cities.length) {
    return <p>No data loaded</p>;
  }

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

const mapStateToProps = (state) => {
  return {
    cities: getCities(state),
    activeCity: getSelectedCity(state) === null ? getSelectedCityFromData(state) : getSelectedCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(city) {
    dispatch(AppActionCreator.newCity(city));
    dispatch(ActionCreator.updateCity(city));
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
