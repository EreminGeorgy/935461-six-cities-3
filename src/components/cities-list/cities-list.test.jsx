import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list.jsx";
import {offers, cities} from "../../utils/test-utils/offers.js";
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';

const activeCity = cities[0];
const mockStore = configureStore([]);
const store = mockStore({
  cities,
  activeCity,
  offersInActiveCity: offers,
});

it(`<CitiesList /> should render CitiesList`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesList
            cities={cities}
            handleCityClick={()=>{}}
            activeCity={activeCity}
          />
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
