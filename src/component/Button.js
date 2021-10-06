import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { button } = props;
  return (
    <div>
      <button type="button">{button}</button>
    </div>
  );
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Button;
