import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";
import {offer} from "../../utils/test-utils/offers.js";
import {BrowserRouter} from 'react-router-dom';

it(`<PlaceCard /> should render PlaceCard`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCard
            key={offer.id}
            offer={offer}
            handleCardHover={() => {}}
            handleTitleClick={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
