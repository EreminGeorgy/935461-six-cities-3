import {extend} from '../../utils/utils.js';
import {ApplicationApi} from "../../application-api.js";
import {ModelComment} from "../../utils/adapters.js";

const CommentsOperationStatus = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
  REQUEST: `REQUEST`,
};

const CommentsActions = {
  SUCCESS: `COMMENTS_SUCCESS`,
  REQUEST: `COMMENTS_REQUEST`,
  FAILURE: `COMMENTS_FAILURE`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const initialState = {
  commentsOperationStatus: CommentsOperationStatus.SUCCESS,
  comments: [],
};

const ActionCreator = {
  loadComments: (comments) => {
    return {
      type: CommentsActions.LOAD_COMMENTS,
      payload: comments,
    };
  },
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
    case CommentsActions.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};
/*eslint-disable */
const Operation = {
  sendComment: (commentData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.request());
    return ApplicationApi.sendComment(commentData)
      .then(ModelComment.parseComments)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response));
        dispatch(ActionCreator.success());
      })
      .catch((err) => {
        dispatch(ActionCreator.failure());
        const {response} = err;
        throw err;
      });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.request());
    return ApplicationApi.getComments(id)
    .then(ModelComment.parseComments)
    .then((response) => {
      dispatch(ActionCreator.loadComments(response));
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
  CommentsActions,
  CommentsOperationStatus,
  Operation,
  reducer,
};
