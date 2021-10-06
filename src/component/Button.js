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

Button.propType = {
  button: PropTypes.string,
};

export default Button;
