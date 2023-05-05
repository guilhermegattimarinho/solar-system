import PropTypes from 'prop-types';
import { Component } from 'react';

/**
* @extends {React.Component<{planetName:string, planetImage:string}>}
*/
class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
      
    );
  }
}

PlanetCard.defaultProps = {
  planetName: 'Terra',
  planetImage: 'https://images.unsplash.com/photo-1581291510185-9d4f01aae8b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVycmElMjBwbGFuZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
