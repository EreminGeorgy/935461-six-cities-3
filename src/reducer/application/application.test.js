import {reducer, ActionCreator} from "./application.js";
import {offers} from "../../utils/test-utils/offers.js";
import {getCities} from '../../utils/utils.js';

const cities = getCities(offers);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    activeCity: ``,
  },
  {}
  )).toEqual({
    activeCity: ``,
  });
});

it(`Reducer should update city`, () => {
  expect(reducer({
    activeCity: ``,
  },
  ActionCreator.newCity(`Paris`)
  )).toEqual({
    activeCity: `Paris`,
  });
});

describe(`Action creators`, () => {
  it(`Introducing new city returns correct action`, () => {
    expect(ActionCreator.newCity(cities[1])).toEqual({
      type: `NEW_CITY`,
      payload: cities[1],
    });
  });
});
