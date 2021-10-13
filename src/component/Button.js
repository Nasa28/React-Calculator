import PropTypes from 'prop-types';

const Button = (props) => {
  const { button, clickHandler } = props;
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {button}
      </button>
    </div>
  );
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
