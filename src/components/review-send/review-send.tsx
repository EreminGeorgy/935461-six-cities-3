import * as React from 'react';
import {useRef, useEffect} from 'react';
import {connect} from "react-redux";
import {Operation} from "../../reducer/comments/comments";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getCommentState} from "../../reducer/comments/selectors";
import {CommentsOperationStatus} from "../../reducer/comments/comments";

const MAX_LENGHT = 300;
const MIN_LENGTH = 50;

interface IProps {
  sendReview?: ({comment, rating, id}: {comment: string; rating: number; id: number}) => void;
  sendReviewStatus?: string;
  authorizationStatus?: string;
  id: number;
}

export const ReviewSend:React.FC<IProps> = (props) => {
  const {sendReview, sendReviewStatus, authorizationStatus, id} = props;
  const commentRef = useRef(null);
  const submitRef = useRef(null);
  const formRef = useRef(null);
  let hotelRating = null;

  const blockSubmit = () => {
    submitRef.current.disabled = true;
  };

  const unblockSubmit = () => {
    submitRef.current.disabled = false;
  };

  const onInput = () => {
    if (hotelRating && commentRef.current.value) {
      unblockSubmit();
    }
  };

  const changeRatingHandler = (evt) => {
    if (commentRef.current.value) {
      unblockSubmit();
    }
    hotelRating = parseInt(evt.target.value, 10);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    blockSubmit();

    sendReview({
      comment: commentRef.current.value,
      rating: hotelRating,
      id,
    });
  };

  useEffect(() => {
    if (sendReviewStatus === CommentsOperationStatus.ERROR) {
      unblockSubmit();
    }
    if (sendReviewStatus === CommentsOperationStatus.SUCCESS) {
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [sendReviewStatus]);

  return (authorizationStatus === AuthorizationStatus.AUTH) ? (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onClick={changeRatingHandler} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={changeRatingHandler}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={changeRatingHandler}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={changeRatingHandler}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={changeRatingHandler}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={onInput} id="review" name="review" maxLength={MAX_LENGHT} minLength={MIN_LENGTH} required placeholder="Tell how was your stay, what you like and what can be improved" ref={commentRef}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" ref={submitRef} disabled>Submit</button>
      </div>
      <p style={{color: `red`}}>{(sendReviewStatus === CommentsOperationStatus.ERROR) ? `Oooops, something went wrong!` : ``}</p>
    </form>) : <></>;
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  sendReviewStatus: getCommentState(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendReview(reviewData) {
    dispatch(Operation.sendComment(reviewData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSend);
