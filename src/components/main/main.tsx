import * as React from "react";
import {useState, useEffect} from "react";
import {Offer, City} from "../../types";
import CitiesList from "../cities-list/cities-list";
import {PlacesList} from "../places-list/places-list";
import {CityMap} from "../city-map/city-map";
import {MainEmpty} from "../main-empty/main-empty";
import Header from "../header/header";
import {ActionCreator} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getSelectedCity, getSelectedOffers, getAppState} from "../../reducer/data/selectors";

interface Props {
  city: City;
  offersInActiveCity: Offer[];
  changeCard: (offer: Offer) => void;
}

export const Main: React.FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {}, []);

  const {offersInActiveCity, changeCard, city} = props;

  const [activeCard, setActiveCard] = useState(null);

  if (!offersInActiveCity.length) {
    return (
      <MainEmpty
        city={city}
      />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <PlacesList
              offers={offersInActiveCity}
              onTitleClick={changeCard}
              city={city}
              setActiveCard={setActiveCard}
            />
            <div className="cities__right-section">
              <CityMap
                offers={offersInActiveCity}
                city={city}
                activeCard={activeCard}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offersInActiveCity: getSelectedOffers(state),
  city: getSelectedCity(state),
  appState: getAppState(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCard(offer) {
    dispatch(ActionCreator.applyActiveOffer(offer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
