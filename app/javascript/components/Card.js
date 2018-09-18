import React from "react"
import PropTypes from "prop-types"
class Card extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.name}</h1>
      </React.Fragment>
    );
  }
}

export default Card
