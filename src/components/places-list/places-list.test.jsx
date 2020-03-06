import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list.jsx";
import {offers, city} from "../../utils/test-utils/offers.js";

it(`<PlacesList /> should render PlacesList`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
      city={city}
      handleTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
