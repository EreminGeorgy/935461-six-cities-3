import React from "react";
import renderer from "react-test-renderer";
import {PropertyParameters} from "./property-parameters.jsx";
import {offer} from "../../utils/test-utils/offers.js";

it(`<PropertyParameters /> should render PropertyParameters`, () => {
  const tree = renderer
    .create(<PropertyParameters
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
