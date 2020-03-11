import NameSpace from "../name-space";
import {createSelector} from 'reselect';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getSelectedCity = (state) => {
  return state[NAME_SPACE].activeCity;
};

export const getSelectedOffers = createSelector(
    [getOffers, getSelectedCity],
    (offers, activeCity) => offers.filter((offer) => offer.city.name === activeCity.name)
);

