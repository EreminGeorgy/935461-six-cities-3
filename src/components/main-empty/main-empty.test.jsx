import React from "react";
import renderer from "react-test-renderer";
import {MainEmpty} from "./main-empty.jsx";
import {city} from "../../utils/test-utils/offers.js";

import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
  reducer
);

it(`<MainEmpty /> should render MainEmpty`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MainEmpty
            city={city}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
