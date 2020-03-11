import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {offers} from "../../utils/test-utils/offers.js";
import {getCities, getOffersByCity} from '../../utils/utils.js';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';

const citiesList = getCities(offers);
const initialOffers = getOffersByCity(offers, citiesList[0]);

const activeCity = citiesList[0];
const offersInCity = initialOffers;

const store = createStore(
    reducer
);

it(`<Main /> should render Main`, () => {
  const tree = renderer
    .create(<Provider store={store}><Main
      offers={offersInCity}
      handleTitleClick={() => {}}
      city={activeCity}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
