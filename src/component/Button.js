import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, clickHandler } = props;

  return (
    <div>
      <button type="button" onClick={() => clickHandler(buttonName)}>
        {buttonName}
      </button>
    </div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
