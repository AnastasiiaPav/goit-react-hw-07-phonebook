 import { Box, Title, ButtonGood, ButtonNeutral, ButtonBad, ButtonBox, Statistic, ReviewBox } from "./reviews.styled"

//  State = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

 export const State = ({ good=7, neutral=1, bad=15, total=(good+neutral+bad) }) => {
     return(
        <Box>
            <Title>Please, leave your feedback  ✍📝</Title>
            <ButtonBox>
            <ButtonGood>Good</ButtonGood>
            <ButtonNeutral>Neutral</ButtonNeutral>
            <ButtonBad>Bad</ButtonBad>
            </ButtonBox>
            <Statistic>Statistics 💹</Statistic>
            <ReviewBox>
            <p>Good 👌 : {good}</p>
            <p>Neutral 😐 : {neutral}</p>
            <p>Bad 👎 : {bad}</p>
            <p>Total rewiew 👯‍♀️ : {total}</p>
            <p>Positive feedback: %</p>
            </ReviewBox>
        </Box>
      )}
  
    //   State.default = {
    //     good: 0, 
    //     neutral: 0,
    //      bad: 0,
    //   }
