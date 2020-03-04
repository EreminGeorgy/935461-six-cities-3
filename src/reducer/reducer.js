import {offers} from '../mocks/offers';
import {extend, getCities, getOffersByCity} from '../utils/utils.js';

const citiesList = getCities(offers);
const initialOffers = getOffersByCity(offers, citiesList[0]);

const initialState = {
  activeCity: citiesList[0],
  offersInActiveCity: initialOffers,
  cities: citiesList,
};

const ActionCreator = {
  newCity: (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),
  getOffers: (newCity) => ({
    type: `GET_OFFERS`,
    payload: newCity,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return extend(state, {
        activeCity: action.payload,
      });
    case `GET_OFFERS`:
      return extend(state, {
        offersInActiveCity: getOffersByCity(offers, action.payload),
      });
  }
  return state;
};

export {reducer, ActionCreator};
