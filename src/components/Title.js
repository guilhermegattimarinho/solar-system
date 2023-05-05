import PropTypes from 'prop-types';
import { Component } from 'react';
import '../css/Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">
        { headline}
      </h2>
    );
  }
}

Title.defaultProps = {
  headline: 'Default Headline',
};

Title.propTypes = {
  headline: PropTypes.string,
};
export default Title;