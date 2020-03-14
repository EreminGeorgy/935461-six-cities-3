import {getCities, extend} from "../../utils/utils.js";
import {ModelOffer} from "../../utils/adapters.js";
import {ApplicationApi} from "../../application-api.js";
// const ApplicationApi = require('../../application-api.js')

const initialState = {
  offers: [],
  cities: [],
  activeCity: null,
  offersInActiveCity: [],
  appState: ``,
};

const OffersActions = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  UPDATE_CITY: `UPDATE_CITY`,
  LOAD_FAILURE: `LOAD_FAILURE`
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: OffersActions.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadFailure: (error) => {
    return {
      type: OffersActions.LOAD_FAILURE,
      payload: error,
    };
  },
  updateCity: (newCity) => {
    return {
      type: OffersActions.UPDATE_CITY,
      payload: newCity,
    };
  },
};
/*eslint-disable */
const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return ApplicationApi.getOffers()
    .then(ModelOffer.parseOffers)
    .then((response) => {
      dispatch(ActionCreator.updateCity(response[0]));
      dispatch(ActionCreator.loadOffers(response));
    })
    .catch((err) => {
      dispatch(ActionCreator.loadFailure(err));
      console.log(err);
    });
  },
};
/*eslint-disable */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OffersActions.LOAD_OFFERS:
      let cities = getCities(action.payload);
      let activeCity = cities[0];
      return extend(state, {
        offers: action.payload,
        cities,
        activeCity,
      });
    case OffersActions.UPDATE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case OffersActions.LOAD_FAILURE:
      return extend(state, {
        appState: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionCreator};
