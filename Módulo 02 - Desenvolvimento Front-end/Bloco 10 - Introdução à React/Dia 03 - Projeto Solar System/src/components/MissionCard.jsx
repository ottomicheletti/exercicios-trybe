import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p className="mission-title" data-testid="mission-name">{name}</p>
        <div className="mission-info">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
