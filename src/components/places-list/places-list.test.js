import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list.jsx";
import {offers, city} from "../../utils/test-utils/offers.js";
import reducer from '../../reducer/reducer.js';

import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer
);

it(`<PlacesList /> should render PlacesList`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <PlacesList
          offers={offers}
          city={city}
          onTitleClick={() => {}}
        />
      </BrowserRouter>
    </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
