import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";

import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer
);

it(`<Header /> should render Header`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Header />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
