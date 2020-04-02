import {reducer, ActionCreator, FavoriteActions} from "./favorites.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    favoriteOperationStatus: ``,
    favorites: [],
  });
});

it(`Reducer should change favoriteOperationStatus by a given value`, () => {
  expect(reducer({
    favoriteOperationStatus: `ERROR`,
    favorites: [],
  }, {
    type: FavoriteActions.SUCCESS,
    payload: `SUCCESS`,
  })).toEqual({
    favoriteOperationStatus: `SUCCESS`,
    favorites: [],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator returns correct action`, () => {
    expect(ActionCreator.success(`SUCCESS`)).toEqual({
      type: FavoriteActions.SUCCESS,
      payload: `SUCCESS`,
    });
  });
});
