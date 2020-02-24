import React from "react";
import renderer from "react-test-renderer";
// import leaflet from "../../__mocks__/leaflet.js";
import {offers} from "../../utils/test-utils/offers.js";
import {CityMap} from "./city-map.jsx";

it(`<CityMap /> should render CityMap`, () => {
  const tree = renderer
    .create(<CityMap
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
