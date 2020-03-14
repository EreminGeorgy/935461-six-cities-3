import {getCities, extend} from "../../utils/utils.js";
import {ModelOffer} from "../../utils/adapters.js";
import {ApplicationApi} from "../../application-api.js";

const LoadOffersStatus = {
  ERROR: `ERROR`,
  REQUEST: `REQUEST`,
  SUCCESS: `SUCCESS`,
};

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
  LOAD_OFFERS_REQUEST: `LOAD_OFFERS_REQUEST`,
  LOAD_OFFERS_FAILURE: `LOAD_OFFERS_FAILURE`,
  LOAD_OFFERS_SUCCESS: `LOAD_OFFERS_SUCCESS`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: OffersActions.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadOffersRequest: (status) => {
    return {
      type: OffersActions.LOAD_OFFERS_REQUEST,
      payload: status,
    };
  },
  loadOffersFailure: (status) => {
    return {
      type: OffersActions.LOAD_OFFERS_FAILURE,
      payload: status,
    };
  },
  loadOffersSuccess: (status) => {
    return {
      type: OffersActions.LOAD_OFFERS_SUCCESS,
      payload: status,
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
    dispatch(ActionCreator.loadOffersRequest());
    return ApplicationApi.getOffers()
    .then(ModelOffer.parseOffers)
    .then((response) => {
      dispatch(ActionCreator.updateCity(response[0]));
      dispatch(ActionCreator.loadOffers(response));
    })
    .then(dispatch(ActionCreator.loadOffersSuccess()))
    .catch((err) => {
      dispatch(ActionCreator.loadOffersFailure(err));
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
    case OffersActions.LOAD_OFFERS_REQUEST:
      return extend(state, {
        appState: action.payload,
      });
    case OffersActions.LOAD_OFFERS_FAILURE:
      return extend(state, {
        appState: action.payload,
      });
    case OffersActions.LOAD_OFFERS_SUCCESS:
      return extend(state, {
        appState: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionCreator};
