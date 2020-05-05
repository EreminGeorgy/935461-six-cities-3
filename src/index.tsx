import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import thunk from "redux-thunk";

import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import {createAPI} from "./api";

import {Operation} from "./reducer/data/data";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadOffers());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
