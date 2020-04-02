import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {PlaceCard} from "../place-card/place-card.jsx";
import {getCities} from "../../utils/utils.js";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/favorites/selectors";
import {Operation} from "../../reducer/favorites/favorites.js";
import {FavoritesEmpty} from "../favorites-empty/favorites-empty.jsx";

const CARD_SETTINGS = {
  placeCardType: `favorites__card`,
  imageWrapperType: `favorites__image-wrapper`,
  cardInfoType: `favorites__card-info`,
};

export const Favorites = (props) => {
  const {favoriteOffers, getFavoriteOffers, handleTitleClick} = props;

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
                        handleCardHover={() => {}}
                        handleTitleClick={handleTitleClick}
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
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  getFavoriteOffers: PropTypes.func,
  handleTitleClick: PropTypes.func,
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(Operation.loadFavorites());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
