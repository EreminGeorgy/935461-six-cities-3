import React, {useEffect, useState, useCallback} from "react";
import PropTypes from "prop-types";
import PropertyParameters from "../property-parameters/property-parameters.jsx";
import {connect} from "react-redux";
import {Operation as OffersOperation} from "../../reducer/data/data.js";
import {Operation as CommentsOperation} from "../../reducer/comments/comments.js";
import {getNearOffers, getActiveOffer} from "../../reducer/data/selectors";
import {getComments} from "../../reducer/comments/selectors";
import PlaceCard from "../place-card/place-card.jsx";

import {ActionCreator} from "../../reducer/data/data.js";
import Header from "../header/header.jsx";

const ROOT = `../../`;

const propertyCardSettings = {
  placeCardType: `near-places__card`,
  imageWrapperType: `near-places__image-wrapper`,
  cardInfoType: ``,
};

export const Property = (props) => {
  const {offer, closestOffers, loadClosestOffers, comments, loadComments, changeCard} = props;

  const [activeCard, setActiveCard] = useState(null);
  const memoizedCard = useCallback(setActiveCard, []);

  useEffect(() => {
    loadClosestOffers(offer.id);
    loadComments(offer.id);
  }, [offer]);

  return (
    <div className="page">
      <Header
        path={ROOT}
      />
      <main className="page__main page__main--property">
        <PropertyParameters
          offer={offer}
          closestOffers={closestOffers}
          path={ROOT}
          comments={comments}
          updateComments={loadComments}
        />;
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {closestOffers.map((closestOffer) => {
                return <PlaceCard
                  key={closestOffer.id}
                  activeCard={activeCard}
                  onCardHover={memoizedCard}
                  onTitleClick={changeCard}
                  offer={closestOffer}
                  cardSettings={propertyCardSettings}
                />;
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  closestOffers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })),
  loadClosestOffers: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.number,
    imagesSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    householdItems: PropTypes.objectOf(PropTypes.string),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool
    })
  }),
  comments: PropTypes.array,
  loadComments: PropTypes.func,
  onTitleClick: PropTypes.func,
  changeCard: PropTypes.func,

};


const mapStateToProps = (state) => ({
  closestOffers: getNearOffers(state),
  comments: getComments(state),
  offer: getActiveOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadClosestOffers(id) {
    dispatch(OffersOperation.loadOffersClosest(id));
  },
  loadComments(id) {
    dispatch(CommentsOperation.loadComments(id));
  },
  changeCard(offer) {
    dispatch(ActionCreator.applyActiveOffer(offer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);
