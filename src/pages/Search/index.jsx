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
import FilterDrawer from "./FilterDrawer"
import { useState } from "react"

export default function Search() {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState("all")
  const [title, setTitle] = useState("전체 목표 탐색")
  const loading = false
  const list = [
    {
      id: 1,
      icon: "️🗓️",
      title: "구름톤 회의",
    },
    {
      id: 2,
      icon: "📝",
      title: "구름톤 회의록 작성",
    },
    {
      id: 3,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
    {
      id: 4,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
    {
      id: 5,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
    {
      id: 6,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
    {
      id: 7,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
    {
      id: 7,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
    {
      id: 7,
      icon: "📞",
      title: "구름톤 회의록 검토",
    },
  ]
  const categories = [
    { label: "전체", value: "all" },
    { label: "🏆 자격·어학·수상", value: "schedule" },
    { label: "🏫 경험·활동·교육", value: "goal" },
    { label: "🪪 경력", value: "history" },
    { label: "🎸 기타", value: "etc" },
  ]
  return (
    <BaseLayout>
      <Container>
        <Header>
          <Flex vertical gap={12}>
            <TitleButton onClick={() => setOpen(true)}>
              {title}
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
          <Category
            options={categories}
            optionType="button"
            value={category}
            onChange={(category) => setCategory(category.target.value)}
          />
        </CategoryContainer>
        <Goals goals={list} loading={loading} option={{ labelHidden: true }} />
      </Container>
      <FilterDrawer
        open={open}
        onClose={(filter) => {
          setOpen(false)
          setTitle(filter.category)
        }}
      />
    </BaseLayout>
  )
}
