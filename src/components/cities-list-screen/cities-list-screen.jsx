import React from "react";
import {connect} from "react-redux";
import {setActiveCity} from "../../store/action.js";
import PropTypes from "prop-types";
import clsx from "clsx";
import {sortOffersByType} from "../../utils.js";

const CitiesListScreen = (props) => {
  const citiesMarkup = props.cities.map((city) => {
    return (
      <li key={city.id} className="locations__item">
        <a
          className={clsx(`locations__item-link tabs__item`, (props.city.id === city.id) && `tabs__item--active`)}
          onClick={() => props.onCityClick(city, props.mocksOffers, props.sortType)}>
          <span>{city.name}</span>
        </a>
      </li>
    );
  });

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesMarkup}
      </ul>
    </section>
  );
};

CitiesListScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortType: PropTypes.string,
  mocksOffers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = ({city, offers, sortType, mocksOffers}) => ({city, offers, sortType, mocksOffers});

const matchDispatchToProps = (dispatch) => ({
  onCityClick(city, mocksOffers, sortType) {
    const filteredOffers = mocksOffers.filter((offer) => {
      return offer.cityIds.includes(city.id);
    });
    const offers = sortOffersByType(filteredOffers, sortType);
    dispatch(setActiveCity(city, offers));
  },
});

export {CitiesListScreen};
export default connect(mapStateToProps, matchDispatchToProps)(CitiesListScreen);
