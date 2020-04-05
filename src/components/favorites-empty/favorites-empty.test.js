import React from "react";
import renderer from "react-test-renderer";
import {FavoritesEmpty} from "./favorites-empty.jsx";

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

it(`<FavoritesEmpty /> should render FavoritesEmpty`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <FavoritesEmpty/>
      </BrowserRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
