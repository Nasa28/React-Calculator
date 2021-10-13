import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <>
      <div>
        <Button clickHandler={handleClick} button="AC" />
        <Button clickHandler={handleClick} button="+/-" />
        <Button clickHandler={handleClick} button="%" />
        <Button clickHandler={handleClick} button="÷" />
      </div>
      <div>
        <Button clickHandler={handleClick} button="7" />
        <Button clickHandler={handleClick} button="8" />
        <Button clickHandler={handleClick} button="9" />
        <Button clickHandler={handleClick} button="x" />
      </div>
      <div>
        <Button clickHandler={handleClick} button="4" />
        <Button clickHandler={handleClick} button="5" />
        <Button clickHandler={handleClick} button="6" />
        <Button clickHandler={handleClick} button="-" />
      </div>
      <div>
        <Button clickHandler={handleClick} button="1" />
        <Button clickHandler={handleClick} button="2" />
        <Button clickHandler={handleClick} button="3" />
        <Button clickHandler={handleClick} button="+" />
      </div>
      <div>
        <Button clickHandler={handleClick} button="0" />
        <Button clickHandler={handleClick} button="." />
        <Button clickHandler={handleClick} button="=" />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
