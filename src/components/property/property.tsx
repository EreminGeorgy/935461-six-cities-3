import * as React from "react";
import {useEffect, useState, useCallback} from "react";
import {CommentData, Offer} from "../../types";
import PropertyParameters from "../property-parameters/property-parameters";
import {connect} from "react-redux";
import {Operation as OffersOperation} from "../../reducer/data/data";
import {Operation as CommentsOperation} from "../../reducer/comments/comments";
import {getNearOffers, getActiveOffer} from "../../reducer/data/selectors";
import {getComments} from "../../reducer/comments/selectors";
import PlaceCard from "../place-card/place-card";

import {ActionCreator} from "../../reducer/data/data";
import Header from "../header/header";

const ROOT = `../../`;

const propertyCardSettings = {
  placeCardType: `near-places__card`,
  imageWrapperType: `near-places__image-wrapper`,
  cardInfoType: ``,
};

interface Props {
  offer: Offer;
  closestOffers: Offer[];
  comments: CommentData[];
  loadClosestOffers: (id: number) => void;
  changeCard: ({id, status}: {id: number; status: number}) => void;
  loadComments: (id: number) => void;
}

export const Property: React.FunctionComponent<Props> = (props: Props) => {
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
