import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
  {
    imageSrc: `img/apartment-01.jpg`,
    title: `_`,
    price: 0,
    raiting: 0,
    type: `Apartment`,
    isPremium: true,
  },
  {
    imageSrc: `img/apartment-02.jpg`,
    title: `Wood and stone place`,
    price: 90,
    raiting: 100,
    type: `Private room`,
    isPremium: false,
  },
  {
    imageSrc: `img/apartment-03.jpg`,
    title: `Canal View Prinsengracht`,
    price: 80,
    raiting: 81,
    type: `1`,
    isPremium: true,
  },
  {
    imageSrc: `img/room.jpg`,
    title: `Nice, cozy, warm big bed apartment`,
    price: 50,
    raiting: 33,
    type: `Apartment`,
    isPremium: false,
  },
];

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
