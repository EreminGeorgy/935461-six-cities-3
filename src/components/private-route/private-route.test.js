import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(
    reducer
);

it(`<PrivateRoute /> should render PrivateRoute`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <PrivateRoute
              authorizationStatus={`string`}
              exact={true}
              path={`string`}
              render={()=>{}}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
