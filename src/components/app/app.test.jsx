import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const proposalsNumber = 312;
const placesList = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`<App /> should render App`, () => {
  const tree = renderer
    .create(<App
      proposalsNumber={proposalsNumber}
      placesList={placesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
