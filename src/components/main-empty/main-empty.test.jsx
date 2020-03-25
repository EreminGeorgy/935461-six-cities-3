import React from "react";
import renderer from "react-test-renderer";
import {MainEmpty} from "./main-empty.jsx";
import {city} from "../../utils/test-utils/offers.js";

import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(
    reducer
);

it(`<MainEmpty /> should render MainEmpty`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <MainEmpty
              city={city}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
