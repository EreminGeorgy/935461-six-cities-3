import * as React from "react";
import {useCallback} from "react";
import {getStars} from "../../utils/utils";
import {Review} from "../review/review";
import ReviewSend from "../review-send/review-send";
import {CityMap} from "../city-map/city-map";
import {Operation} from "../../reducer/favorites/favorites";
import {CommentData, Offer} from "../../types";
import {connect} from "react-redux";

const COMMENTS_TO_SHOW = 10;

interface Props {
  offer: Offer;
  closestOffers: Offer[];
  path: string;
  activeCard: number;
  comments: CommentData[];
  updateComments: (id: number) => void;
  changeCard: ({id, status}: {id: number; status: number}) => void;
}

export const PropertyParameters: React.FunctionComponent<Props> = (props: Props) => {
  const {offer, closestOffers, path, activeCard, comments, updateComments, changeCard} = props;

  const {
    id,
    imagesSrc,
    title,
    description,
    price,
    rating,
    type,
    isPremium,
    isFavorite,
    bedrooms,
    guests,
    householdItems,
    host,
    city,
  } = offer;

  const handleFavoriteClick = (evt) => {

    evt.preventDefault();

    changeCard({
      id,
      status: Number(!isFavorite),
    });
  };

  const memoClick = useCallback(handleFavoriteClick, [isFavorite]);

  const width = getStars(rating);
  const availableItems = Array.from(householdItems);

  const activeComments = comments.sort((a: any, b: any) => {
    return parseInt(a.dateString, 10) - parseInt(b.dateString, 10);
  }).slice(-(COMMENTS_TO_SHOW));

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
            <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`}
              onClick={memoClick} type="button">
              <svg className="place-card__bookmark-icon" width="31" height="33">
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
              <p className="property__text" >{description}</p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
            <ul className="reviews__list">
              {activeComments.map((commentData) => {
                return <Review
                  key={commentData.id}
                  commentData={commentData}
                />;
              })}
            </ul>
            <ReviewSend
              id={offer.id}
              updateComments={updateComments}
            />
          </section>
        </div>
      </div>
      <CityMap
        offers={closestOffers}
        city={city}
        path={path}
        activeCard={activeCard}
        currentOfferCoords={offer.locations}
      />
    </section>
  );
};


const mapDispatchToProps = (dispatch) => ({
  changeCard(cardData) {
    dispatch(Operation.changeStatus(cardData));
  },
});

export default connect(null, mapDispatchToProps)(PropertyParameters);
