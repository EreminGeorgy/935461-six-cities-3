import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";
import {offers} from "../../utils/test-utils/offers.js";
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer.js';
import {createStore} from 'redux';

import {BrowserRouter} from 'react-router-dom';

const store = createStore(
    reducer
);


it(`<Favorites /> should render Favorites`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <Favorites
          favoriteOffers={offers}
          getFavorites={()=>{}}
          handleTitleClick={()=>{}}
        />
      </BrowserRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
