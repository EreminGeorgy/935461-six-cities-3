import {reducer, ActionCreator} from "./data.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
    cities: [],
    activeCity: null,
    offersInActiveCity: [],
    appState: ``,
    offersClosest: [],
  });
});


it(`Reducer should update appState by request`, () => {
  expect(reducer({
    appState: ``,
  },
  ActionCreator.loadOffersRequest()
  )).toEqual({
    appState: `REQUEST`,
  });
});

it(`Reducer should update appState by error`, () => {
  expect(reducer({
    appState: ``,
  },
  ActionCreator.loadOffersFailure()
  )).toEqual({
    appState: `ERROR`,
  });
});

it(`Reducer should update appState by error success`, () => {
  expect(reducer({
    appState: ``,
  },
  ActionCreator.loadOffersSuccess()
  )).toEqual({
    appState: `SUCCESS`,
  });
});

describe(`Action creators`, () => {
  it(`load request returns correct action`, () => {
    expect(ActionCreator.loadOffersRequest()).toEqual({
      type: `LOAD_OFFERS_REQUEST`,
      payload: `REQUEST`,
    });
  });
  it(`load failure returns correct action`, () => {
    expect(ActionCreator.loadOffersFailure()).toEqual({
      type: `LOAD_OFFERS_FAILURE`,
      payload: `ERROR`,
    });
  });
  it(`load success returns correct action`, () => {
    expect(ActionCreator.loadOffersSuccess()).toEqual({
      type: `LOAD_OFFERS_SUCCESS`,
      payload: `SUCCESS`,
    });
  });
});
