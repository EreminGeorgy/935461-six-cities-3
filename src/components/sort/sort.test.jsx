import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort.jsx";
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';

const store = createStore(
    reducer
);


it(`<Sort /> should render Sort`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Sort
        setItem={()=>{}}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
