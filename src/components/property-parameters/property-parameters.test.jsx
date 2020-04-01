import React from "react";
import renderer from "react-test-renderer";
import {PropertyParameters} from "./property-parameters.jsx";
import {offer, offers} from "../../utils/test-utils/offers.js";
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {COMMENTS} from "../../utils/test-utils/comments.js";

const store = createStore(
    reducer
);

const closestOffers = offers;

it(`<PropertyParameters /> should render PropertyParameters`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <PropertyParameters
        offer={offer}
        closestOffers={closestOffers}
        activeCard={1}
        comments={COMMENTS}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
