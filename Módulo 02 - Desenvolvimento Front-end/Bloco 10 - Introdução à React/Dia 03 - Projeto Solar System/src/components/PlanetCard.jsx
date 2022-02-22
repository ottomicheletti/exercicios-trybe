import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <img
          className="planet-image"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p className="planet-name" data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
