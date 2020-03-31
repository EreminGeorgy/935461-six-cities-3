import React from "react";
import renderer from "react-test-renderer";
import {Review} from "./review.jsx";
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {COMMENTS} from "../../utils/test-utils/comments.js";

const store = createStore(
    reducer
);

it(`<Review /> should render Review`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Review
            commentData={COMMENTS[0]}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
