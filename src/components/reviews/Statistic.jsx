import { ReviewBox } from './Reviews.styled';
import propTypes from 'prop-types'

// const Statistic = ({ feedbacks, total, procent }) => {
//   return (
//     <ReviewBox>
//       <p>Good 👌 : {feedbacks.good}</p>
//       <p>Neutral 😐 : {feedbacks.neutral}</p>
//       <p>Bad 👎 : {feedbacks.bad}</p>
//       <p>Total rewiew 👯‍♀️ : {total}</p>
//       <p>Positive feedback: {procent}%</p>
//     </ReviewBox>
//   );
// };

const Statistic = ({ good, neutral, bad, total, procent }) => {
  return (
    <ReviewBox>
      <p>Good 👌 : {good}</p>
      <p>Neutral 😐 : {neutral}</p>
      <p>Bad 👎 : {bad}</p>
      <p>Total rewiew 👯‍♀️ : {total}</p>
      <p>Positive feedback: {procent}%</p>
    </ReviewBox>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  procent: propTypes.number,
}