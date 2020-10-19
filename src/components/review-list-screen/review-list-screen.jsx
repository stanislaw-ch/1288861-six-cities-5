import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewScreen from "../review-screen/review-screen";

class ReviewListScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.reviews.map((review, i) => {
      const {reviewsList} = review;
      return < ReviewScreen
        key={i}
        review={reviewsList}
      />;
    });
  }
}

ReviewListScreen.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewListScreen;
