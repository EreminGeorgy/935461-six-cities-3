import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer
);

it(`<SignIn /> should render SignIn`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <SignIn/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
