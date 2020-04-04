import {extend} from '../../utils/utils.js';
import {ActionCreator as UserActionCreator, AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoute} from "../../utils/const.js";
import {ModelOffer} from "../../utils/adapters.js";
import {ActionCreator as OffersCreator} from "../data/data.js";
import {getOffers, getNearOffers} from "../data/selectors";
import {ApplicationApi} from "../../application-api.js";

const UNAUTHORIZED = 401;

const FavoriteOperationStatus = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
  REQUEST: `REQUEST`,
};

const FavoriteActions = {
  SUCCESS: `FAVORITES_SUCCESS`,
  REQUEST: `FAVORITES_REQUEST`,
  FAILURE: `FAVORITES_FAILURE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

const initialState = {
  favoriteOperationStatus: ``,
  favorites: [],
};

const replaceOffer = (editedOffer, offers) => {
  const index = offers.findIndex((offer) => offer.id === editedOffer.id);
  const newOffers = [...offers];
  newOffers[index] = editedOffer;
  return newOffers;
};

const applyEditedOffer = (offer, dispatch, getState) => {
  const offers = getOffers(getState());
  dispatch(OffersCreator.loadOffers(replaceOffer(offer, offers)));
};

const applyEditedOfferToClosest = (offer, dispatch, getState) => {
  const offers = getNearOffers(getState());
  dispatch(OffersCreator.loadOffersClosest(replaceOffer(offer, offers)));
};

const ActionCreator = {
  loadFavorites: (offers) => {
    return {
      type: FavoriteActions.LOAD_FAVORITES,
      payload: offers,
    };
  },
  success: () => {
    return {
      type: FavoriteActions.SUCCESS,
      payload: FavoriteOperationStatus.SUCCESS,
    };
  },
  request: () => {
    return {
      type: FavoriteActions.REQUEST,
      payload: FavoriteOperationStatus.REQUEST,
    };
  },
  failure: () => {
    return {
      type: FavoriteActions.FAILURE,
      payload: FavoriteOperationStatus.ERROR,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FavoriteActions.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
    case FavoriteActions.SUCCESS:
      return extend(state, {
        favoriteOperationStatus: action.payload,
      });
    case FavoriteActions.REQUEST:
      return extend(state, {
        favoriteOperationStatus: action.payload,
      });
    case FavoriteActions.FAILURE:
      return extend(state, {
        favoriteOperationStatus: action.payload,
      });
  }

  return state;
};

/*eslint-disable */
const Operation = {
  changeStatus: (cardData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.request());
    return ApplicationApi.addToFavorite(cardData)
      .then(ModelOffer.parseSingleOffer)
      .then((response) => {
        if (response.status !== UNAUTHORIZED) {
          dispatch(ActionCreator.success());
          applyEditedOffer(response, dispatch, getState);
          applyEditedOfferToClosest(response, dispatch, getState);
        }
      })
      .catch((err) => {
        dispatch(ActionCreator.failure());
        const {response} = err;

        if (response && response.status === UNAUTHORIZED) {
          dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
          window.location.pathname = AppRoute.AUTH;
        }
        throw err;
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.request());
    return ApplicationApi.getFavorites()
    .then(ModelOffer.parseOffers)
    .then((response) => {
      dispatch(ActionCreator.loadFavorites(response));
    })
    .then(dispatch(ActionCreator.success()))
    .catch((err) => {
      dispatch(ActionCreator.failure());
      throw err;
    });
  },
  /*eslint-disable */
};


export {
  ActionCreator,
  FavoriteActions,
  Operation,
  reducer,
};
