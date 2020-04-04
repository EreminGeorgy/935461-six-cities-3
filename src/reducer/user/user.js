import {extend} from '../../utils/utils.js';
import {ModelUser} from "../../utils/adapters.js";
import {ApplicationApi} from "../../application-api.js";
import {getUser} from "./selectors";


const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  ERROR: `AUTH_ERROR`,
  REQUEST: `AUTH_REQUEST`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
};

const UserActions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  LOGIN_REQUEST: `LOGIN_REQUEST`,
  LOGIN_FAILURE: `LOGIN_FAILURE`,
};

const applyEditedUser = (userData, dispatch, getState) => {
  dispatch(ActionCreator.signIn(userData));
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: UserActions.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  signIn: (data) => {
    return {
      type: UserActions.LOAD_USER_DATA,
      payload: data,
    };
  },
  loginRequest: () => {
    return {
      type: UserActions.LOGIN_REQUEST,
      payload: AuthorizationStatus.REQUEST,
    };
  },
  loginFailure: () => {
    return {
      type: UserActions.LOGIN_FAILURE,
      payload: AuthorizationStatus.ERROR,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case UserActions.LOAD_USER_DATA:
      return extend(state, {
        userData: action.payload,
      });
    case UserActions.LOGIN_REQUEST:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case UserActions.LOGIN_FAILURE:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

/*eslint-disable */
const Operation = {
  checkAuth: (authData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loginRequest());
    return ApplicationApi.login()
      .then(ModelUser)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.signIn(response));
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          applyEditedUser(response, dispatch, getState);
        }
      })
      .catch(() => {
        // if (authData) {
          ApplicationApi.signIn({
            email: authData.login,
            password: authData.password,
          });
        // }
      })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        dispatch(ActionCreator.loginFailure());
        throw err;
      });
  },
  /*eslint-disable */
};


export {
  ActionCreator,
  UserActions,
  AuthorizationStatus,
  Operation,
  reducer,
};
