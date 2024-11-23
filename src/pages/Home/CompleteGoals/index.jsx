import { useNavigate } from "react-router-dom"
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
import { ROUTES_PATH_GOAL_CONSTELLATION } from "../../../constants/routes"

export default function CompleteGoals() {
  const navigate = useNavigate()

  const onClickConstellation = (id) => {
    navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${id}`)
  }
  return (
    <ShadowContainer>
      <Container>
        {new Array(20).fill().map((_, index) => (
          <MonthContainer key={index}>
            <Month>11월</Month>
            <GoalContainer direction={index % 2 ? "left" : "right"}>
              <ConsterllationContainer
                onClick={() => onClickConstellation(index)}
              >
                <GoalTitle>🏆 마케팅 아이디어 공모전 동상</GoalTitle>
                <Constellation id={index} starCount={4} />
              </ConsterllationContainer>
            </GoalContainer>
          </MonthContainer>
        ))}
        <StarBackground />
      </Container>
    </ShadowContainer>
  )
}
