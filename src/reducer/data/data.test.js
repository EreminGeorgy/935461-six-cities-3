import {reducer} from "./data.js";
// import MockAdapter from 'axios-mock-adapter';
// import {createAPI} from '../../api';
// import {Operation} from './data';
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
//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           type: `UPDATE_CITY`,
//           payload: undefined});
//         expect(dispatch).toHaveBeenNthCalledWith(2, {
//           type: `LOAD_OFFERS`,
//           payload: []});
//       });
//   });
// });
