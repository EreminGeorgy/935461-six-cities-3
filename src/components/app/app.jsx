import React, {useState} from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../utils/const.js";

export const App = (props) => {
  const {login, authorizationStatus} = props;

  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            handleTitleClick={setActiveOffer}
          />
        </Route>
        <Route path={`${AppRoute.PROPERTY}/:id`} render={() => {
          return <Property
            offer={activeOffer}
          />;
        }} />
        <Route exact path={AppRoute.AUTH}>
          {(authorizationStatus === AuthorizationStatus.AUTH) ?
            <Redirect to={AppRoute.ROOT} /> :
            <SignIn
              onSubmit={login}
            />
          }
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <p>favorites will be here</p>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.checkAuth(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  login: PropTypes.func,
  authorizationStatus: PropTypes.string,
};
