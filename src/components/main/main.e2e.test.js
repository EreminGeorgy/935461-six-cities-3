import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {offers} from "../../utils/test-utils/offers.js";
import {getCities, getOffersByCity} from '../../utils/utils.js';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer/reducer.js';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

const cities = getCities(offers);
const activeCity = cities[0];
const offersInCity = getOffersByCity(offers, cities[0]);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should each title be pressed`, () => {
  const handleTitleClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          offers={offersInCity}
          handleTitleClick={handleTitleClick}
          city={activeCity}
        />
      </Provider>
  );

  main.find(`.place-card__name a`).forEach((node) => node.simulate(`click`));

  expect(handleTitleClick).toHaveBeenCalledTimes(4);
});
