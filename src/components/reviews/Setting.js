import {
    Box,
    Title,
    ButtonGood,
    ButtonNeutral,
    ButtonBad,
    ButtonBox,
    Statistic,
    ReviewBox,
  } from './Reviews.styled';

 
const Shablon = ({ OnHandleGood, OnHandleNeutral, OnHandleBad, feedbacks }) => {
    return( 

    <Box>
    <Title>Please, leave your feedback ✍📝</Title>
    <ButtonBox>
      <ButtonGood type="button" onClick={OnHandleGood}>
        Good
      </ButtonGood>
      <ButtonNeutral type="button" onClick={OnHandleNeutral}>Neutral</ButtonNeutral>
      <ButtonBad type="button" onClick={OnHandleBad}>Bad</ButtonBad>
    </ButtonBox>
    <Statistic>Statistics 💹</Statistic>
    <ReviewBox>
      <p>Good 👌 : {feedbacks.good}</p>
      <p>Neutral 😐 : {feedbacks.neutral}</p>
      <p>Bad 👎 : {feedbacks.bad}</p>
      <p>Total rewiew 👯‍♀️ : </p>
      <p>Positive feedback:  %</p>
    </ReviewBox>
  </Box>
    )
 }

 export default Shablon