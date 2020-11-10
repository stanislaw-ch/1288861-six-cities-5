import React, {PureComponent} from "react";

export const withCurrentId = (Component) => {
  return class WithCurrentIdComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentId: null,
      };

      this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
    }

    _handleCardTitleClick(id) {
      this.setState({
        currentId: id,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          currentId={this.state.currentId}
          onCardTitleClick={this._handleCardTitleClick}
        />
      );
    }
  };
};
