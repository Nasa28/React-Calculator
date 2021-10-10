import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Button button="AC" />
      <Button button="+/-" />
      <Button button="%" />
      <Button button="÷" />
    </div>
    <div>
      <Button button="7" />
      <Button button="8" />
      <Button button="9" />
      <Button button="x" />
    </div>
    <div>
      <Button button="4" />
      <Button button="5" />
      <Button button="6" />
      <Button button="-" />
    </div>
    <div>
      <Button button="1" />
      <Button button="2" />
      <Button button="3" />
      <Button button="+" />
    </div>
    <div>
      <Button button="0" />
      <Button button="." />
      <Button button="=" />
    </div>
  </>
);

export default ButtonPanel;
