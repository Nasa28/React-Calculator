import PropTypes from 'prop-types';
import Button from './Button';
import '../../styles/buttonPanel.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <div className="main">
        <div className="row">
          <Button clickHandler={handleClick} buttonName="AC" />
          <Button clickHandler={handleClick} buttonName="+/-" />
          <Button clickHandler={handleClick} buttonName="%" />
          <Button clickHandler={handleClick} buttonName="÷" />
        </div>
        <div className="row">
          <Button clickHandler={handleClick} buttonName="7" />
          <Button clickHandler={handleClick} buttonName="8" />
          <Button clickHandler={handleClick} buttonName="9" />
          <Button clickHandler={handleClick} buttonName="x" />
        </div>
        <div className="row">
          <Button clickHandler={handleClick} buttonName="4" />
          <Button clickHandler={handleClick} buttonName="5" />
          <Button clickHandler={handleClick} buttonName="6" />
          <Button clickHandler={handleClick} buttonName="-" />
        </div>
        <div className="row">
          <Button clickHandler={handleClick} buttonName="1" />
          <Button clickHandler={handleClick} buttonName="2" />
          <Button clickHandler={handleClick} buttonName="3" />
          <Button clickHandler={handleClick} buttonName="+" />
        </div>
        <div className="lastRow">
          <Button clickHandler={handleClick} buttonName="0" />
          <Button clickHandler={handleClick} buttonName="." />
          <Button clickHandler={handleClick} buttonName="=" />
        </div>
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
