import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FavoritesScreen = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer, i) => (
                    <article
                      className="favorites__card place-card"
                      key={`${i}`}
                    >
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <Link to="/offer/1">
                          <img
                            className="place-card__image"
                            src={offer.url}
                            width="150"
                            height="110"
                            alt="Place image" />
                        </Link>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{offer.price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button
                            className={offer.isFavorite ?
                              `place-card__bookmark-button place-card__bookmark-button--active button` :
                              `place-card__bookmark-button button`}
                            type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use href="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{width: `${offer.starsCount * 20}%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <Link to="/offer/1">{offer.title}</Link>
                        </h2>
                        <p className="place-card__type">{offer.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    starsCount: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired
};

export default FavoritesScreen;
