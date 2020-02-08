import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const proposalsNumber = 312;
const placesList = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`<WelcomeScreen /> should render Main`, () => {
  const tree = renderer
    .create(<Main
      proposalsNumber={proposalsNumber}
      placesList={placesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
