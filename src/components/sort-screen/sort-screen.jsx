import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {connect} from "react-redux";
import {setSortType} from "../../store/action.js";
import {SortType} from "../../const.js";
import {sortOffersByType} from "../../utils.js";
import {withActiveFlag} from "../../hocs/with-active-flag/with-active-flag";

const SortScreeen = (props) => {

  const sortTypes = Object.values(SortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={props.onActiveChange}>
        {props.sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={clsx(`places__options places__options--custom`, (props.isActive) && `places__options--opened`)}>
        {sortTypes.map((type) => {
          return (
            <li
              key={type}
              className={clsx(`places__option`, (props.sortType === type) && `places__option--active`)}
              onClick={() => {
                props.onLiClick(type, props.sortType, props.offers);
              }}
              tabIndex={0}>
              {type}
            </li>
          );
        })}
      </ul>
      {/*
      <select class="places__sorting-type" id="places-sorting">
        <option class="places__option" value="popular" selected="">Popular</option>
        <option class="places__option" value="to-high">Price: low to high</option>
        <option class="places__option" value="to-low">Price: high to low</option>
        <option class="places__option" value="top-rated">Top rated first</option>
      </select>
      */}
    </form>
  );
};

SortScreeen.propTypes = {
  sortType: PropTypes.string.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onLiClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = ({sortType, offers}) => ({sortType, offers});

const matchDispatchToProps = (dispatch) => ({
  onLiClick(type, sortType, propsOffers) {
    if (sortType !== type) {
      const offers = sortOffersByType(propsOffers, type);
      dispatch(setSortType(type, offers));
    }
  },
});

export {SortScreeen};
export default withActiveFlag(connect(mapStateToProps, matchDispatchToProps)(SortScreeen));
