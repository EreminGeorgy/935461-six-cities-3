// import MockAdapter from 'axios-mock-adapter';
// import {createAPI} from '../../api';
// import {Operation} from './data';
import {reducer, ActionCreator} from "./data.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
    cities: [],
    activeCity: null,
    offersInActiveCity: [],
    appState: ``,
  });
});

// describe(`Reducer works correctly`, () => {
//   it(`make a correct API call to /hotels`, function () {
//     const dispatch = jest.fn();
//     const api = createAPI(() => {});
//     const apiMock = new MockAdapter(api);

//     const offersLoader = Operation.loadOffers();

//     apiMock.onGet(`/hotels`)
//     .reply(200, []);

//     return offersLoader(dispatch, () => {}, api)
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(3);
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           type: `UPDATE_CITY`,
//           payload: undefined});
//         expect(dispatch).toHaveBeenNthCalledWith(2, {
//           type: `LOAD_OFFERS`,
//           payload: []});
//       });
//   });
// });


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
