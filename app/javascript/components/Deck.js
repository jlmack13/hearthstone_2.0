import React from "react"
import PropTypes from "prop-types"
class Deck extends React.Component {
  render () {
    return (
      <React.Fragment>
        Class: {this.props.class}
        Name: {this.props.name}
      </React.Fragment>
    );
  }
}

Deck.propTypes = {
  class: PropTypes.string,
  name: PropTypes.string
};
export default Deck
