import * as React from "react";
import {CommentData} from "../../types";
import {getStars} from "../../utils/utils";

interface Props {
  commentData: CommentData;
}

export const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {commentData} = props;
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
