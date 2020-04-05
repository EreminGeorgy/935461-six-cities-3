import React from "react";
import renderer from "react-test-renderer";
import {ReviewSend} from "./review-send.jsx";
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer
);

it(`<ReviewSend /> should render ReviewSend`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewSend/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
