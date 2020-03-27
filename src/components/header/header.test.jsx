import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";

import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(
    reducer
);

it(`<Header /> should render Header`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
