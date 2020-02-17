import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import offers from "../../utils/test-utils/offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should each title be pressed`, () => {
  const handleTitleClick = jest.fn();

  const main = mount(
      <Main
        proposalsNumber={312}
        offers={offers}
        handleTitleClick={handleTitleClick}
      />
  );

  main.find(`.place-card__name a`).forEach((node) => node.simulate(`click`));

  expect(handleTitleClick).toHaveBeenCalledTimes(4);
});
