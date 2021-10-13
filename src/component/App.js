import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { data } = this.state;
    this.setState(calculate(data, buttonName));
  };

  render() {
    const { total, next } = this.state;
    const currentResult = total || next;
    return (
      <>
        <Display result={currentResult} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
