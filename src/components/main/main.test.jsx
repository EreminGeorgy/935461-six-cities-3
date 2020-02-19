import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {offers} from "../../utils/test-utils/offers.js";

it(`<Main /> should render Main`, () => {
  const tree = renderer
    .create(<Main
      offers={offers}
      handleCardHover={() => {}}
      handleTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
