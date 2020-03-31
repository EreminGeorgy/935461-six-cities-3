import {reducer, ActionCreator, CommentsActions} from "./comments.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    commentsOperationStatus: `SUCCESS`,
  });
});

it(`Reducer should change commentsActions by a given value`, () => {
  expect(reducer({
    commentsOperationStatus: `ERROR`,
  }, {
    type: CommentsActions.SUCCESS,
    payload: `SUCCESS`,
  })).toEqual({
    commentsOperationStatus: `SUCCESS`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator returns correct action`, () => {
    expect(ActionCreator.success(`SUCCESS`)).toEqual({
      type: CommentsActions.SUCCESS,
      payload: `SUCCESS`,
    });
  });
});
