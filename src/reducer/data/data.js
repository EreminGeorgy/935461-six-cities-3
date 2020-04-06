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
  offersClosest: [],
  activeOffer: null,
};

const OffersActions = {
  LOAD_OFFERS_CLOSEST: `LOAD_OFFERS_CLOSEST`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  UPDATE_CITY: `UPDATE_CITY`,
  GET_CITIES: `GET_CITIES`,
  APPLY_ACTIVE_OFFER: `APPLY_ACTIVE_OFFER`,
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
  applyActiveOffer: (offer) => {
    return {
      type: OffersActions.APPLY_ACTIVE_OFFER,
      payload: offer,
    };
  },
  getCities: (cities) => {
    return {
      type: OffersActions.GET_CITIES,
      payload: cities,
    };
  },
  loadOffersClosest: (offers) => {
    return {
      type: OffersActions.LOAD_OFFERS_CLOSEST,
      payload: offers,
    };
  },
  loadOffersRequest: () => {
    return {
      type: OffersActions.LOAD_OFFERS_REQUEST,
      payload: LoadOffersStatus.REQUEST,
    };
  },
  loadOffersFailure: () => {
    return {
      type: OffersActions.LOAD_OFFERS_FAILURE,
      payload: LoadOffersStatus.ERROR,
    };
  },
  loadOffersSuccess: () => {
    return {
      type: OffersActions.LOAD_OFFERS_SUCCESS,
      payload: LoadOffersStatus.SUCCESS,
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
      dispatch(ActionCreator.loadOffers(response));
      let cities = getCities(response);
      dispatch(ActionCreator.getCities(cities));
      dispatch(ActionCreator.updateCity(cities[0]));
    })
    .then(dispatch(ActionCreator.loadOffersSuccess()))
    .catch((err) => {
      dispatch(ActionCreator.loadOffersFailure());
      throw err;
    });
  },

  loadOffersClosest: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadOffersRequest());
    return ApplicationApi.getClosestOffers(id)
    .then(ModelOffer.parseOffers)
    .then((response) => {
      dispatch(ActionCreator.loadOffersClosest(response));
    })
    .then(dispatch(ActionCreator.loadOffersSuccess()))
    .catch((err) => {
      dispatch(ActionCreator.loadOffersFailure());
      throw err;
    });
  },
};
/*eslint-disable */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OffersActions.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case OffersActions.GET_CITIES:
      return extend(state, {
        cities: action.payload,
      });
    case OffersActions.LOAD_OFFERS_CLOSEST:
      return extend(state, {
        offersClosest: action.payload,
      });
    case OffersActions.UPDATE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case OffersActions.APPLY_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
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
