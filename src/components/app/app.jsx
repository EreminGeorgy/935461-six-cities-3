import React, {useState} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";

export const App = (props) => {

  const [activeOffer, setActiveOffer] = useState(null);
  const {proposalsNumber, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {() => {
            if (activeOffer) {
              return (
                <Property
                  offer={activeOffer}
                />
              );
            }
            return (
              <Main
                proposalsNumber={proposalsNumber}
                handleTitleClick={setActiveOffer}
                activeOffer={activeOffer}
                offers={offers}
              />
            );
          }}
        </Route>
        <Route exact path="/dev-proprty">
          <Property
            offer={offers[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

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
