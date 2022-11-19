import Template from './Setting';
import propType from 'prop-types';
import { Component } from 'react';
// import { Statistic } from './Reviews.styled';

export class Reviews extends Component {
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

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
   const total = bad + good + neutral
   return total;
  }


  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
 const total = bad + good + neutral
 const totalRewiev = Math.round(100/total * good)
 return totalRewiev;
  }


  render() {
    return (
      <div>
        <Template
          OnHandleGood={this.handleGood}
          OnHandleNeutral={this.handleNeutral}
          OnHandleBad={this.handleBad}
          feedbacks={this.state}
          total={this.countTotalFeedback()}
          procent={this.countPositiveFeedbackPercentage()}
          />
        {/* <Statistic
        feedbacks={this.state}
        total={this.countTotalFeedback()}
        procent={this.countPositiveFeedbackPercentage()} 
         /> */}
      </div>
    );
  }
}

Reviews.propType = {
  good: propType.number,
  bad: propType.number,
  neutral: propType.number,
  total: propType.number,
  procent: propType.number,
};

