import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: null
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(activeOffer) {
    this.setState(() => ({offer: activeOffer}));
  }

  _renderApp() {
    const {proposalsNumber, offers} = this.props;
    const {offer} = this.state;

    if (offer) {
      return (
        <Property
          offer={offer}
        />
      );
    }

    return (
      <Main
        proposalsNumber={proposalsNumber}
        handleTitleClick={this._handleTitleClick}
        offers={offers}
      />
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-proprty">
            <Property
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  handleTitleClick: PropTypes.func,
  proposalsNumber: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })).isRequired,
};
