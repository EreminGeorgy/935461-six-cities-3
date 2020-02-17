import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import offer from "../../utils/test-utils/offer.js";

it(`<PlaceCard /> should render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      key={offer.id}
      offer={offer}
      handleCardHover={() => {}}
      handleTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
