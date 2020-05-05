import * as React from "react";
import {useCallback} from "react";
import {City} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data";
import {ActionCreator as AppActionCreator} from "../../reducer/application/application";
import {getSelectedCity} from "../../reducer/application/selectors";
import {getSelectedCity as getSelectedCityFromData} from "../../reducer/data/selectors";

import {getCities} from "../../reducer/data/selectors";

interface Props {
  cities: City[];
  activeCity: City;
  handleCityClick: (city: City) => void;
}

export const CitiesList: React.FunctionComponent<Props> = (props: Props) => {
  const {cities, activeCity, handleCityClick} = props;

  if (!cities.length || !activeCity) {
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
