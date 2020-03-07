import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesList} from "./cities-list.jsx";
import {offers, cities} from "../../utils/test-utils/offers.js";
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';

Enzyme.configure({
  adapter: new Adapter()
});

const activeCity = cities[0];
const mockStore = configureStore([]);
const store = mockStore({
  cities,
  activeCity,
  offersInActiveCity: offers,
});

it(`simulates click on city tab`, () => {
  const onClick = jest.fn();

  const citiesList = mount(
      <Provider store={store}>
        <CitiesList
          cities={cities}
          handleCityClick={onClick}
          activeCity={activeCity}
        />
      </Provider>
  );

  const tabs = citiesList.find(`.locations__item-link`);

  tabs.forEach((tab) => tab.simulate(`click`, onClick));

  expect(onClick.mock.calls[0][0]).toBe(activeCity);
  expect(onClick.mock.calls.length).toBe(cities.length);

});
