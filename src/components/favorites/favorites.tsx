import * as React from "react";
import {useEffect} from "react";
import {Offer} from "../../types";
import Header from "../header/header";
import PlaceCard from "../place-card/place-card";
import {getCities} from "../../utils/utils";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/favorites/selectors";
import {Operation} from "../../reducer/favorites/favorites";
import {FavoritesEmpty} from "../favorites-empty/favorites-empty";
import {AppRoute} from "../../utils/const";
import {Link} from 'react-router-dom';
import {ActionCreator} from "../../reducer/data/data";


const CARD_SETTINGS = {
  placeCardType: `favorites__card`,
  imageWrapperType: `favorites__image-wrapper`,
  cardInfoType: `favorites__card-info`,
};

interface Props {
  favoriteOffers: Offer[];
  getFavoriteOffers: () => void;
  changeCard: (offer: Offer) => void;
}

export const Favorites: React.FunctionComponent<Props> = (props: Props) => {
  const {favoriteOffers, getFavoriteOffers, changeCard} = props;

  useEffect(() => {
    getFavoriteOffers();
  }, []);

  if (!favoriteOffers.length) {
    return (
      <FavoritesEmpty/>
    );
  }

  const citiesList = getCities(favoriteOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) => {
                return <li key={`city-${city.name}`} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city.name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.filter((item) => item.city.name === city.name).map((offer) => {
                      return <PlaceCard
                        key={offer.id}
                        activeCard={null}
                        onCardHover={() => {}}
                        onTitleClick={changeCard}
                        offer={offer}
                        cardSettings={CARD_SETTINGS}
                      />;
                    })}
                  </div>
                </li>;
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.ROOT} className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(Operation.loadFavorites());
  },
  changeCard(offer) {
    dispatch(ActionCreator.applyActiveOffer(offer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
