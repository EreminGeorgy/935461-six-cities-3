import React, {useCallback} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {getStars} from "../../utils/utils.js";
import {Operation} from "../../reducer/favorites/favorites.js";
import {AppRoute} from "../../utils/const.js";
import {connect} from "react-redux";

export const PlaceCard = (props) => {
  const {onTitleClick, onCardHover, offer, cardSettings, changeCard} = props;
  const {
    id,
    previewSrc,
    title,
    price,
    rating,
    type,
    isPremium,
    isFavorite,
  } = offer;
  const {placeCardType, imageWrapperType, cardInfoType} = cardSettings;

  const handleFavoriteClick = (evt) => {

    evt.preventDefault();

    changeCard({
      id,
      status: Number(!isFavorite),
    });
  };

  const memoClick = useCallback(handleFavoriteClick, [isFavorite]);
  const width = getStars(rating);

  return (
    <article className={`${placeCardType} place-card`} onMouseOver={() => onCardHover(id)}>
      {isPremium ? (<div className="place-card__mark"><span>Premium</span></div>) : (``)}
      <div className={`${imageWrapperType} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewSrc} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={`${cardInfoType} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            onClick={memoClick}
            type="button">
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
          <Link to={`${AppRoute.PROPERTY}/${id}`} onClick={() => onTitleClick(offer)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.defaultProps = {
  cardSettings: {
    placeCardType: `cities__place-card`,
    imageWrapperType: `cities__image-wrapper`,
    cardInfoType: ``,
  }
};

PlaceCard.propTypes = {
  onTitleClick: PropTypes.func,
  onCardHover: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
  }).isRequired,
  cardSettings: PropTypes.shape({
    placeCardType: PropTypes.string,
    imageWrapperType: PropTypes.string,
    cardInfoType: PropTypes.string,
  }),
  changeCard: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changeCard(cardData) {
    dispatch(Operation.changeStatus(cardData));
  },
});

export default connect(null, mapDispatchToProps)(PlaceCard);
