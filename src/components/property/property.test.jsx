import React from "react";
import renderer from "react-test-renderer";
import {Property} from "./property.jsx";
import {offer} from "../../utils/test-utils/offer.js";

it(`<Property /> should render Property`, () => {
  const tree = renderer
    .create(<Property
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
