const { default: styled } = require("styled-components");

 export const Box = styled.div`
    border: dashed 1px black;
    width: 820px;
    border-radius: 10px;
    padding: 10px;
 `

 export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
 `

 export const ButtonBox = styled.div`
     display: flex;
     gap: 30px;
 `

 export const ButtonGood = styled.button`
     background-color: #27a527;
     width: 90px;
     cursor: pointer;
     border-radius: 10px;
     align-items: center;
 `

 export const ButtonNeutral =  styled.button`
     background-color: transparent;
     width: 90px;
     cursor: pointer;
     border-radius: 10px;
     align-items: center;
 `

 export const ButtonBad = styled.button`
     background-color: red;
     width: 90px;
     cursor: pointer;
     border-radius: 10px;
     align-items: center;
 `

 export const Statistic = styled.h2`
    font-size: 24px;
    font-weight: 600;
 `

 export const ReviewBox = styled.div`
    display: flex;
    gap: 60px;
 `