import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {offers} from "../../utils/test-utils/offers.js";


const proposalsNumber = 312;

it(`<App /> should render App`, () => {
  const tree = renderer
    .create(<App
      proposalsNumber={proposalsNumber}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
