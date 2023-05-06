import PropTypes from 'prop-types';
import { Component } from 'react';
import '../css/MissionCard.css';
import yearIcon from '../images/Vector-data.png';
import destinationIcon from '../images/Vector-destination.png';
import locationIcon from '../images/Vector-location.png';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        
        <h2 data-testid="mission-name">{ name }</h2>
        
        <hr className='missions-hr' />
        
        <div  className='mission-information'>

          <div className='year-country-container'>
            <img src={ yearIcon} alt="" />
            <p data-testid="mission-year" className='info-tag'>{ year }</p>
            <img src={ locationIcon } alt="" />
            <p  className='info-tag'>{ country }</p>
          </div>

          <div className='destination-container'>
            <img src={ destinationIcon } alt="" />
            <p  className='info-tag destination-tag'>{ destination }</p>
          </div>
          
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
