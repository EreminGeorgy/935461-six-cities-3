import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from './place-card.jsx';
import {offer} from "../../utils/test-utils/offers.js";


Enzyme.configure({
  adapter: new Adapter()
});

it(`simulates card hover event to set card title`, () => {
  const onHover = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer={offer}
    handleCardHover={onHover}
    handleTitleClick={()=>{}}
  />);

  const card = placeCard.find(`.cities__place-card`);

  card.simulate(`mouseOver`, onHover);

  expect(onHover.mock.calls[0][0]).toBe(offer.id);
  expect(onHover.mock.calls.length).toBe(1);

});

it(`simulates click on card title`, () => {
  const onClick = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer={offer}
    handleCardHover={()=>{}}
    handleTitleClick={onClick}
  />);

  const title = placeCard.find(`.place-card__name Link`);


  title.simulate(`click`, onClick);

  expect(onClick.mock.calls[0][0]).toBe(offer);
  expect(onClick.mock.calls.length).toBe(1);

});
