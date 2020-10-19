import React from "react";
import PropTypes from "prop-types";

const ReviewScreen = (props) => {
  const {review} = props;
  return (
    <React.Fragment>
      {review.map((item, i) => (
        <ul className="reviews__list" key={`${i}`}>
          <li className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={item.avatar}
                  width="54"
                  height="54"
                  alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {item.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${item.starsCount * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {item.descriptions}
              </p>
              <time
                className="reviews__time"
                dateTime="2019-04-24">
                {item.date}
              </time>
            </div>
          </li>
        </ul>
      ))}
    </React.Fragment>
  );
};

ReviewScreen.propTypes = {
  review: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    starsCount: PropTypes.number.isRequired
  })).isRequired
};

export default ReviewScreen;
