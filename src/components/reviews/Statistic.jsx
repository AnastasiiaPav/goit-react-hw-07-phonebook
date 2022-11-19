import { ReviewBox } from './Reviews.styled';

const Statistic = ({  feedbacks, total, procent }) => {
    return ( 
        <ReviewBox>
        <p>Good 👌 : {feedbacks.good}</p>
        <p>Neutral 😐 : {feedbacks.neutral}</p>
        <p>Bad 👎 : {feedbacks.bad}</p>
        <p>Total rewiew 👯‍♀️ : {total}</p>
        <p>Positive feedback: {procent}%</p>
      </ReviewBox>
    )
}

export default Statistic;