import {extend} from '../../utils/utils.js';
import {ApplicationApi} from "../../application-api.js";

const CommentsOperationStatus = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
  REQUEST: `REQUEST`,
};

const CommentsActions = {
  SUCCESS: `COMMENTS_SUCCESS`,
  REQUEST: `COMMENTS_REQUEST`,
  FAILURE: `COMMENTS_FAILURE`,
};

const initialState = {
  commentsOperationStatus: CommentsOperationStatus.SUCCESS,
};

const ActionCreator = {
  success: () => {
    return {
      type: CommentsActions.SUCCESS,
      payload: CommentsOperationStatus.SUCCESS,
    };
  },
  request: () => {
    return {
      type: CommentsActions.REQUEST,
      payload: CommentsOperationStatus.REQUEST,
    };
  },
  failure: () => {
    return {
      type: CommentsActions.FAILURE,
      payload: CommentsOperationStatus.ERROR,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CommentsActions.SUCCESS:
      return extend(state, {
        commentsOperationStatus: action.payload,
      });
    case CommentsActions.REQUEST:
      return extend(state, {
        commentsOperationStatus: action.payload,
      });
    case CommentsActions.FAILURE:
      return extend(state, {
        commentsOperationStatus: action.payload,
      });
  }

  return state;
};
/*eslint-disable */
const Operation = {
  sendComment: (commentData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.request());
    return ApplicationApi.sendComment(commentData)
      .then((response) => {
        dispatch(ActionCreator.success());
      })
      .catch((err) => {
        dispatch(ActionCreator.failure());
        const {response} = err;

        // if (response && response.status === UNAUTHORIZED) {
        //   dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
        //   window.location.pathname = AppRoute.AUTH;
        // }
        throw err;
      });
  },
  /*eslint-disable */
};


export {
  ActionCreator,
  CommentsActions,
  CommentsOperationStatus,
  Operation,
  reducer,
};
