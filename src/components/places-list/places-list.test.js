import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";
import offers from "../../utils/test-utils/offers.js";

const proposalsNumber = 312;


it(`<PlacesList /> should render PlacesList`, () => {
  const tree = renderer
    .create(<PlacesList
      proposalsNumber={proposalsNumber}
      offers={offers}
      handleTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
