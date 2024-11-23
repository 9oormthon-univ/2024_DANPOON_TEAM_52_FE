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

  const data = {
    "10월": [
      {
        id: 99,
        title: "Spring Security 인강 듣기",
        starCount: 6,
      },
      {
        title: "영상 처리 공부하기",
        starCount: 5,
      },
      {
        title: "ADSP 자격증 따기",
        starCount: 4,
      },
      {
        title: "고전 영상 처리 알고리즘 공부하기",
        starCount: 6,
      },
    ],
    "11월": [
      {
        title: "백엔드 공부하기",
        starCount: 5,
      },
      {
        title: "Spring Data Jpa 기초 공부하기",
        starCount: 4,
      },
      {
        title: "sql 기초 공부하기",
        starCount: 5,
      },
      {
        title: "Spring Security 인강 듣기",
        starCount: 5,
      },
    ],
    "12월": [
      {
        title: "html 태그 공부하기",
        starCount: 5,
      },
      {
        title: "css 공부하기",
        starCount: 4,
      },
      {
        title: "tailwind 찍먹해보기",
        starCount: 3,
      },
      {
        title: "html 프로젝트 진행해보기",
        starCount: 10,
      },
    ],
  }
  return (
    <ShadowContainer>
      <Container>
        {Object.keys(data).map((month) => (
          <MonthContainer key={month}>
            <Month>{month}</Month>
            {data[month].map((goal, index) => (
              <GoalContainer
                key={index}
                direction={index % 2 ? "right" : "left"}
              >
                <ConsterllationContainer
                  onClick={() => onClickConstellation(index)}
                >
                  <GoalTitle>{goal.title}</GoalTitle>
                  <Constellation id={index} starCount={goal.starCount} />
                </ConsterllationContainer>
              </GoalContainer>
            ))}
          </MonthContainer>
        ))}
        <StarBackground />
      </Container>
    </ShadowContainer>
  )
}
