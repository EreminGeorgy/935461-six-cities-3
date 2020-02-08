import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const titleClickHandler = jest.fn();

  const main = shallow(
      <Main
        proposalsNumber={312}
        placesList={[
          `Beautiful &amp; luxurious apartment at great location`,
          `Wood and stone place`,
          `Canal View Prinsengracht`,
          `Nice, cozy, warm big bed apartment`
        ]}
        titleClickHandler={titleClickHandler}
      />
  );

  main.find(`.place-card__name a`).forEach((node) => node.props().onClick());

  expect(titleClickHandler.mock.calls.length).toBe(4);
});
