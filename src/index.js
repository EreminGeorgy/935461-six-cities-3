import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

import {Provider} from 'react-redux';
import {reducer} from './reducer/reducer.js';
import {createStore} from 'redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector(`#root`)
);
