import React from 'react';
import PropTypes from 'prop-types'

const Display = (props) => {
const {result} = props
  return (
    <div>
      <h1>Display</h1>
    </div>
  );
};

Display.prototype = {
  result: PropTypes.string.isRequired
}
Display.defaultProps = {
  result: 0
}
export default Display;
