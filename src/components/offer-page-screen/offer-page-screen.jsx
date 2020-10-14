import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ReviewFormScreen from "../review-form-screen/review-form-screen";

const OfferPageScreen = (props) => {
  const {offer} = props;
  const {
    title,
    descriptions,
    advantages,
    type,
    owner,
    price,
    urls,
    starsCount,
    bedroomsCount,
    guestsCount,
    isPremium,
    isFavorite,
    reviews
  } = offer;
  const {avatar, name, isSuper} = owner;
  const {reviewAvatar, reviewName, reviewDescriptions, reviewDate, reviewStarsCount} = reviews[0];

  const photosMarkup = urls.map((photoUrl) => {
    return (
      <div className="property__image-wrapper" key={photoUrl}>
        <img
          className="property__image"
          src={photoUrl}
          alt="Photo studio"
        />
      </div>
    );
  });

  const PremiumMarkup = (
    isPremium ?
      <div className="property__mark">
        <span>Premium</span>
      </div> : null
  );

  const BookmarkMarkup = (
    isFavorite ?
      `property__bookmark-button property__bookmark-button--active button` :
      `property__bookmark-button button`
  );

  const raitingPercent = starsCount * 20;
  const reviewRaitingPercent = reviewStarsCount * 20;

  const PropertyMarkup = advantages.map((advantage) => {
    return (
      <li className="property__inside-item" key={advantage}>
        {advantage}
      </li>
    );
  });

  const UserMarkup = (
    isSuper ?
      `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
      `property__avatar-wrapper user__avatar-wrapper`
  );

  const DescriptionsMarkup = descriptions.map((description) => {
    return (
      <p className="property__text" key={description}>
        {description}
      </p>
    );
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photosMarkup}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {PremiumMarkup}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={BookmarkMarkup} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${raitingPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{starsCount}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guestsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {PropertyMarkup}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={UserMarkup}>
                    <img
                      className="property__avatar user__avatar"
                      src={avatar}
                      width="74"
                      height="74"
                      alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  {DescriptionsMarkup}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src={reviewAvatar}
                          width="54"
                          height="54"
                          alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">
                        {reviewName}
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: `${reviewRaitingPercent}%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        {reviewDescriptions}
                      </p>
                      <time
                        className="reviews__time"
                        dateTime="2019-04-24">
                        {reviewDate}
                      </time>
                    </div>
                  </li>
                </ul>
                <ReviewFormScreen />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/room.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use href="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use href="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use href="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPageScreen.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    starsCount: PropTypes.number.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    guestsCount: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape(
        {
          reviewAvatar: PropTypes.string.isRequired,
          reviewName: PropTypes.string.isRequired,
          reviewDescriptions: PropTypes.string.isRequired,
          reviewDate: PropTypes.string.isRequired,
          reviewStarsCount: PropTypes.number.isRequired,
          reviewId: PropTypes.number.isRequired,
        }
    )).isRequired,
  }).isRequired,
};

export default OfferPageScreen;
