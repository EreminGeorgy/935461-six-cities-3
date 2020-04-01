import React from "react";
import renderer from "react-test-renderer";
import {Property} from "./property.jsx";
import {offer, offers} from "../../utils/test-utils/offers.js";
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {COMMENTS} from "../../utils/test-utils/comments.js";

const closestOffers = offers;

const store = createStore(
    reducer
);

it(`<Property /> should render Property`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Provider store={store}>
        <Property
          offer={offer}
          closestOffers={closestOffers}
          loadClosestOffers={() => {}}
          comments={COMMENTS}
        />
      </Provider>
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
