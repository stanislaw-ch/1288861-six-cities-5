import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import PlaceCardListScreen from "../place-card-list-screen/place-card-list-screen";
import {Link} from "react-router-dom";
import MapScreen from "../map-screen/map-screen";
import SortScreen from "../sort-screen/sort-screen";
import CitiesListScreen from "../cities-list-screen/cities-list-screen";
import {SortType} from "../../const.js";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sortType: SortType.POPULAR,
      activeOfferId: null,
    };

    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
  }

  render() {
    const {city, offers, cities, onCardTitleClick} = this.props;

    const markers = offers.map(({coordinates, id}) => ({
      coordinates,
      id,
    }));

    const titleText = offers.length
      ? `${offers.length} places to stay in ${city.name}`
      : `No places to stay available`;

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to="/favorites">
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

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesListScreen city={city} cities={cities} />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {titleText}
                </b>
                {(offers.length) ? <SortScreen onSortTypeChange={this.handleSortTypeChange} /> : null}
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardListScreen
                    offers={offers}
                    sortType={this.state.sortType}
                    onCardTitleClick={onCardTitleClick}
                    onCardHover={this.handleOfferCardHover}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {offers.length && <MapScreen markers={markers} activeMarker={this.state.activeOfferId} />}
                </section>
              </div>
            </div>
          </div >
        </main>
      </div>
    );
  }

  handleSortTypeChange(type) {
    this.setState({sortType: type});
  }

  handleOfferCardHover(id) {
    if (this.state.activeOfferId) {
      this.setState({activeOfferId: null});
    } else {
      this.setState({activeOfferId: id});
    }
  }
}

MainScreen.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  offers: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({city, offers}) => ({city, offers});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
