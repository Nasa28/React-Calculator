import PropTypes from 'prop-types';
import './styles/button.css';

const Button = (props) => {
  const { buttonName, clickHandler } = props;
  const buttonStyles = (buttonName) => {
    const letters = ['+', '-', 'x', '÷', '='];

    if (letters.includes(buttonName)) {
      return 'button-color';
    }

    return 'button';
  };
  return (
    <div className="button">
      <button
        className={buttonStyles(buttonName)}
        type="button"
        onClick={() => clickHandler(buttonName)}
      >
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
