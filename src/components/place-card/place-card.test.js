import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  imageSrc: `img/apartment-01.jpg`,
  title: ` `,
  price: 0,
  raiting: 100,
  type: `Apartment`,
  isPremium: true,
};

it(`<PlaceCard /> should render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      handleCardHover={() => {}}
      handleTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
