import * as React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from "../main/main";
import Property from "../property/property";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import PrivateRoute from "../private-route/private-route";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../utils/const";

export const App = (props) => {
  const {login, authorizationStatus} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route path={`${AppRoute.PROPERTY}/:id`} render={() => {
          return <Property />;
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
            return (<Favorites />);
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  login: PropTypes.func,
  authorizationStatus: PropTypes.string,
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
