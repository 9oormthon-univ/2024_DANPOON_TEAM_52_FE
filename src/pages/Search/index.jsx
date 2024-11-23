import { Flex } from "antd"
import BaseLayout from "../../components/BaseLayout"
import Goals from "../../components/Goals"
import {
  Container,
  Description,
  Header,
  IconButton,
  TitleButton,
  CategoryContainer,
  Category,
} from "./styled"
import { ReactComponent as SortSVG } from "../../svgs/Sort.svg"
import { ReactComponent as DownSVG } from "../../svgs/Down.svg"

export default function Search() {
  const loading = false
  const list = [
    {
      id: 1,
      icon: "️🗓️",
      title: "구름톤 회의",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 2,
      icon: "📝",
      title: "구름톤 회의록 작성",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 3,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 4,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 5,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 6,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 7,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 7,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      id: 7,
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
  ]
  const categories = [
    { label: "전체", value: "all" },
    { label: "🏆 자격·어학·수상", value: "schedule" },
    { label: "🏫 경험·활동·교육", value: "goal" },
    { label: "🪪 경력", value: "history" },
    { label: "🎸 기타", value: "history" },
  ]
  return (
    <BaseLayout>
      <Container>
        <Header>
          <Flex vertical gap={12}>
            <TitleButton>
              전체 목표 탐색
              <DownSVG />
            </TitleButton>
            <Description>
              다른 사람들의 목표와 이력을 탐색할 수 있어요
            </Description>
          </Flex>
          <IconButton>
            <SortSVG />
          </IconButton>
        </Header>
        <CategoryContainer>
          <Category options={categories} optionType="button" />
        </CategoryContainer>
        <Goals goals={list} loading={loading} option={{ labelHidden: true }} />
      </Container>
    </BaseLayout>
  )
}
