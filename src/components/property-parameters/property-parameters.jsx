import React from "react";
import PropTypes from "prop-types";
import {getStars} from "../../utils/utils.js";
import {Review} from "../review/review.jsx";
import ReviewSend from "../review-send/review-send.jsx";
import {COMMENTS} from "../../utils/test-utils/comments.js";
import {CityMap} from "../city-map/city-map.jsx";

export const PropertyParameters = (props) => {
  const {offer, closestOffers, path, activeCard} = props;
  const {
    imagesSrc,
    title,
    description,
    price,
    rating,
    type,
    isPremium,
    bedrooms,
    guests,
    householdItems,
    host,
    city,
  } = offer;

  const width = getStars(rating);
  const availableItems = Array.from(householdItems);

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {imagesSrc.map((src, i) => {
            return (<div className="property__image-wrapper" key={`src-${i}`}>
              <img className="property__image" src={src} alt="Photo studio"/>
            </div>);
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium ? (<div className="property__mark"><span>Premium</span></div>) : (``)}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {guests} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {availableItems.map((item) => {
                return (<li className="property__inside-item" key={item.toString()}>
                  {item}
                </li>);
              })}
            </ul>
          </div>April 2019
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text" >{description}</p>;
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              {COMMENTS.map((commentData) => {
                return <Review
                  key={commentData.id}
                  commentData={commentData}
                />;
              })}
            </ul>
            <ReviewSend
              id={offer.id}
            />
          </section>
        </div>
      </div>
      <CityMap
        offers={closestOffers}
        city={city}
        path={path}
        activeCard={activeCard}
      />
    </section>
  );
};

PropertyParameters.propTypes = {
  closestOffers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })),
  activeCard: PropTypes.number,
  path: PropTypes.string,
  offer: PropTypes.shape({
    city: PropTypes.object,
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
  }).isRequired,
};
