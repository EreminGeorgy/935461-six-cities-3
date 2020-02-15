import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const proposalsNumber = 312;
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

it(`<App /> should render App`, () => {
  const tree = renderer
    .create(<App
      proposalsNumber={proposalsNumber}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
