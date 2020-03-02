import {offers} from '../mocks/offers';
// import {citiesData} from '../mocks/cities-data';
import {extend, getCities, getOffersByCity} from '../utils/utils.js';

const citiesList = getCities(offers);
const initialOffers = getOffersByCity(offers, citiesList[0]);

const initialState = {
  activeCity: citiesList[0],
  offersInActiveCity: initialOffers,
  cities: citiesList,
  proposalNumber: initialOffers.length,
};

const ActionCreator = {
  newCity: (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),
  getOffers: (offers) => ({
    type: `GET_OFFERS`,
    payload: offers,
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
