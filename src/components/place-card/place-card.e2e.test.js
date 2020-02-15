import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
  imageSrc: `img/apartment-01.jpg`,
  title: `title`,
  price: 0,
  raiting: 100,
  type: `Apartment`,
  isPremium: true,
};

it(`simulates card hover event to set card title`, () => {
  const onHover = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer={offer}
    handleCardHover={onHover}
    handleTitleClick={() => {}}
  />);

  const card = placeCard.find(`.cities__place-card`);

  card.simulate(`mouseOver`, onHover);

  expect(onHover.mock.calls[0][0]).toBe(offer);
  expect(onHover.mock.calls.length).toBe(1);

});
