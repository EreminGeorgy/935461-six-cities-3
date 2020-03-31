import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUser, getAuthorizationStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../utils/const.js";
import {Link} from 'react-router-dom';


export const Header = ({user, authorizationStatus, path}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={`${path ? path : ``}img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={(authorizationStatus === AuthorizationStatus.AUTH) ? AppRoute.FAVORITES : AppRoute.AUTH}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {(authorizationStatus === AuthorizationStatus.AUTH) ? user.email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  path: PropTypes.string,
  authorizationStatus: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }),
};