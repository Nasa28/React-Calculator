import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { button } = props;
  return (
    <div>
      <h1>{button}</h1>
    </div>
  );
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Button;
