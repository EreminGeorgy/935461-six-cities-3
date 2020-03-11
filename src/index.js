import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import thunk from "redux-thunk";

import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';
import {createStore, applyMiddleware, compose} from 'redux';
import {createAPI} from "./api.js";

import {Operation as DataOperation} from "./reducer/data/data.js";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
// store.dispatch(UserOperation.checkAuth());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
