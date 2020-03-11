import {getCities, extend} from "../../utils/utils.js";
import {ModelOffer} from "../../utils/adapters.js";


const initialState = {
  offers: [],
  cities: [],
  activeCity: null,
  offersInActiveCity: [],
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: `LOAD_OFFERS`,
      payload: offers,
    };
  },
  updateCity: (newCity) => {
    return {
      type: `UPDATE_CITY`,
      payload: newCity,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
    .then((response) => response.data)
      .then(ModelOffer.parseOffers)
      .then((response) => {
        dispatch(ActionCreator.updateCity(response[0]));
        dispatch(ActionCreator.loadOffers(response));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_OFFERS`:
      let cities = getCities(action.payload);
      let activeCity = cities[0];
      return extend(state, {
        offers: action.payload,
        cities,
        activeCity,
      });
    case `UPDATE_CITY`:
      return extend(state, {
        activeCity: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionCreator};
