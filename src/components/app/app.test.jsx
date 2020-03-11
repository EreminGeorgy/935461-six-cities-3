import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {offers, cities} from "../../utils/test-utils/offers.js";
// import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

const activeCity = cities[0];
const offersInActiveCity = offers;
// const mockStore = configureStore([]);
// const store = mockStore({
//   cities,
//   activeCity: cities[0],
//   offersInActiveCity: offers,
// });

it(`<App /> should render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            offersInActiveCity={offersInActiveCity}
            city={activeCity}
          />
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
