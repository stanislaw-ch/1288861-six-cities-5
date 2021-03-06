import {SortType} from "./const.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortOffersByType = (offers, sortType) => {
  let sortedOffers = [];
  const offersCopy = offers.slice();

  switch (sortType) {
    case SortType.LOW_TO_HIGH:
      sortedOffers = offersCopy.sort((a, b) => a.price - b.price);
      break;
    case SortType.HIGH_TO_LOW:
      sortedOffers = offersCopy.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED_FIRST:
      sortedOffers = offersCopy.sort((a, b) => b.starsCount - a.starsCount);
      break;
    case SortType.POPULAR:
      sortedOffers = offersCopy;
      break;
  }
  return sortedOffers;
};
