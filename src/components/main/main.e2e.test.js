import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should each title be pressed`, () => {
  const handleTitleClick = jest.fn();

  const main = mount(
      <Main
        proposalsNumber={312}
        offers = {[
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
        ]}
        handleTitleClick={handleTitleClick}
      />
  );

  main.find(`.place-card__name a`).forEach((node) => node.simulate(`click`));

  expect(handleTitleClick).toHaveBeenCalledTimes(4);
});
