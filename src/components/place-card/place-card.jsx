import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';
import PropTypes from "prop-types";

export const PlaceCard = (props) => {
  const {handleTitleClick, handleCardHover, offer} = props;
  const {
    id,
    previewSrc,
    title,
    price,
    raiting,
    type,
    isPremium,
  } = offer;

  const width = `${Math.floor(raiting) * 20}%`;

  return (
    <BrowserRouter>
      <article className="cities__place-card place-card" onMouseOver={() => handleCardHover(id)}>
        {isPremium ? (<div className="place-card__mark"><span>Premium</span></div>) : (``)}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={previewSrc} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to="/dev-property" onClick={() => handleTitleClick(offer)}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </BrowserRouter>
  );
};

PlaceCard.propTypes = {
  handleTitleClick: PropTypes.func,
  handleCardHover: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  }).isRequired,
};


