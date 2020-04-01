import React from "react";
import PropTypes from "prop-types";
import {getStars} from "../../utils/utils.js";

export const Review = ({commentData}) => {
  const {user, rating, comment, dateString} = commentData;
  const date = dateString;
  const reviewDate = `${date.toLocaleString(`en-US`, {month: `long`, year: `numeric`})}`;
  const dateTime = date.toISOString().slice(0, 10);
  const width = getStars(rating);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{reviewDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  commentData: PropTypes.shape({
    comment: PropTypes.string,
    dateString: PropTypes.date,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  }),
};
