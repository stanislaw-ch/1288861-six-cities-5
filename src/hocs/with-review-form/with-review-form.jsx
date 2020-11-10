import React, {PureComponent} from "react";

export const withReviewForm = (Component) => {
  return class WithCurrentIdComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          review={this.state.review}
          onHandleSubmit={this.handleSubmit}
          onFieldChange={this.handleFieldChange}
        />
      );
    }
  };
};
