import Constellation from "../../../components/Constellation"
import StarBackground from "../../../components/StarBackground"
import {
  ShadowContainer,
  Container,
  MonthContainer,
  Month,
  GoalContainer,
  GoalTitle,
  ConsterllationContainer,
} from "./styled"

export default function CompleteGoals() {
  return (
    <ShadowContainer>
      <Container>
        {new Array(10).fill().map((_, index) => (
          <MonthContainer key={index}>
            <Month>11월</Month>
            <GoalContainer direction="left">
              <ConsterllationContainer>
                <GoalTitle>🏆 마케팅 아이디어 공모전 동상</GoalTitle>
                <Constellation id={index * 2 + 0} starCount={4} />
              </ConsterllationContainer>
            </GoalContainer>
            <GoalContainer direction="right">
              <ConsterllationContainer>
                <GoalTitle>🏫 마케팅 교육 세미나</GoalTitle>
                <Constellation id={index * 2 + 1} starCount={4} />
              </ConsterllationContainer>
            </GoalContainer>
          </MonthContainer>
        ))}
        <StarBackground />
      </Container>
    </ShadowContainer>
  )
}
