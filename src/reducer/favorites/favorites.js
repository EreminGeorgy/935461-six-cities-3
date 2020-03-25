import {extend} from '../../utils/utils.js';
import {ActionCreator as UserActionCreator, AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoute} from "../../utils/const.js";
import {ModelOffer} from "../../utils/adapters.js";
import {ActionCreator as OffersCreator} from "../data/data.js";
import {getOffers} from "../data/selectors";
import {ApplicationApi} from "../../application-api.js";
// import {ApplicationApi} from "../../application-api.js";

const UNAUTHORIZED = 401;

const FavoriteOperationStatus = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
  REQUEST: `REQUEST`,
};

const FavoriteActions = {
  SUCCESS: `SUCCESS`,
  REQUEST: `REQUEST`,
  FAILURE: `FAILURE`,
};

const initialState = {
  favoriteOperationStatus: ``,
};

const replaceOffer = (editedOffer, offers) => {
  const index = offers.findIndex((offer) => offer.id === editedOffer.id);
  const newOffers = [...offers];
  newOffers[index] = editedOffer;
  return newOffers;
  // return [].concat(offers.slice(0, index), editedOffer, offers.slice(index + 1, offers.length));
};

const applyEditedOffer = (offer, dispatch, getState) => {
  const offers = getOffers(getState());
  dispatch(OffersCreator.loadOffers(replaceOffer(offer, offers)));
};

const ActionCreator = {
  Success: () => {
    return {
      type: FavoriteActions.SUCCESS,
      payload: FavoriteOperationStatus.SUCCESS,
    };
  },
  Request: () => {
    return {
      type: FavoriteActions.REQUEST,
      payload: FavoriteOperationStatus.REQUEST,
    };
  },
  Failure: () => {
    return {
      type: FavoriteActions.FAILURE,
      payload: FavoriteOperationStatus.ERROR,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    dispatch(ActionCreator.Request());
    return ApplicationApi.addToFavorite(cardData)
      .then(ModelOffer.parseSingleOffer)
      .then((response) => {
        dispatch(ActionCreator.Success());
        applyEditedOffer(response, dispatch, getState);
      })
      .catch((err) => {
        dispatch(ActionCreator.Failure());
        const {response} = err;

        if (response && response.status === UNAUTHORIZED) {
          dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
          window.location.pathname = AppRoute.AUTH;
        }
        throw err;
      });
  },
  /*eslint-disable */
};


export {
  ActionCreator,
  FavoriteActions,
  AuthorizationStatus,
  Operation,
  reducer,
};
