import React from "react";
import PropTypes from "prop-types";
import ReviewScreen from "../review-screen/review-screen";
import ReviewFormScreen from "../review-form-screen/review-form-screen";

const ReviewListScreen = (props) => {
  const {reviews} = props;
  const {reviewsList} = reviews;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsList.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsList.map((review) => {
          return <ReviewScreen key={reviews.id} review={review} />;
        })}
      </ul>
      <ReviewFormScreen />
    </section>
  );
};

ReviewListScreen.propTypes = {
  reviews: PropTypes.shape({
    reviewsList: PropTypes.arrayOf.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewListScreen;
