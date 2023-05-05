import PropTypes from 'prop-types';
import { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h2 data-testid="mission-name">{ name }</h2>
        <div  className='mission-information'>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
        </div>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: 'Apollo 11',
  year: '1969',
  country: 'Estados Unidos',
  destination: 'Lua',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
