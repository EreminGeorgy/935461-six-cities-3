import {reducer, ActionCreator} from "./reducer.js";
import {offers} from "../utils/test-utils/offers.js";
import {getCities, getOffersByCity} from '../utils/utils.js';

const cities = getCities(offers);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    cities,
    activeCity: ``,
    offersInActiveCity: offers,
  },
  {}
  )).toEqual({
    cities,
    activeCity: ``,
    offersInActiveCity: getOffersByCity(offers, cities[0]),
  });
});

it(`Reducer should update city`, () => {
  expect(reducer({
    cities,
    activeCity: ``,
    offersInActiveCity: offers,
  },
  ActionCreator.newCity(`Paris`)
  )).toEqual({
    cities,
    activeCity: `Paris`,
    offersInActiveCity: offers,
  });
});

it(`Reducer should get offers for city`, () => {
  expect(reducer({
    cities,
    activeCity: ``,
    offersInActiveCity: offers,
  },
  ActionCreator.getOffers(`Paris`)
  )).toEqual({
    cities,
    activeCity: ``,
    offersInActiveCity: getOffersByCity(offers, `Paris`),
  });
});

describe(`Action creators`, () => {
  it(`Introducing new city returns correct action`, () => {
    expect(ActionCreator.newCity(cities[1])).toEqual({
      type: `NEW_CITY`,
      payload: cities[1],
    });
  });

  it(`Getting offers for city returns correct action`, () => {
    expect(ActionCreator.getOffers(cities[1])).toEqual({
      type: `GET_OFFERS`,
      payload: cities[1],
    });
  });
});
