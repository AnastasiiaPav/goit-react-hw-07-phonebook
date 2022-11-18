
import Shablon from './Setting';
import propType from 'prop-types';
import { Component } from 'react';


export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(currentState => {
      return {
        good: currentState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(currentState => {
      return {
        neutral: currentState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(currentState => {
      return {
        bad: currentState.bad + 1,
      };
    });
  };

  render() {
    return (
        <Shablon
          OnHandleGood={this.handleGood}
          OnHandleNeutral={this.handleNeutral}
          OnHandleBad={this.handleBad}
          feedbacks={this.state}
        />
    );
  }
}

Counter.propType = {
  good: propType.number,
  bad: propType.number,
  neutral: propType.number,
  total: propType.number,
  procent: propType.number,
};
