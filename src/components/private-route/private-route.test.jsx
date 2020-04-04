import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./sign-in.jsx";
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer
);

it(`<PrivateRoute /> should render PrivateRoute`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <PrivateRoute/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
