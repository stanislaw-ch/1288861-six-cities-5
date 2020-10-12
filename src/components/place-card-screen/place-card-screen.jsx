import React from "react";
import PropTypes from "prop-types";

const PlaceCardScreen = (props) => {
  const {offer, onCardHover} = props;
  const {title, type, price, url, starsCount, isPremium, isFavorite, id} = offer[0];

  const handleHover = () => {
    onCardHover(id);
  };

  const PremiumMarkup = (
    isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : null
  );

  const BookmarkMarkup = (
    isFavorite ?
      `place-card__bookmark-button place-card__bookmark-button--active button` :
      `place-card__bookmark-button button`
  );

  const raitingPercent = starsCount * 20;

  return (
    <article className="cities__place-card place-card" onMouseOver={handleHover}>
      {PremiumMarkup}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={url}
            width="260"
            height="200"
            alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={BookmarkMarkup} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${raitingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCardScreen.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    starsCount: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default PlaceCardScreen;
