import Goals from "../../components/Goals"
import {
  Container,
  Description,
  Header,
  IconButton,
  TitleButton,
  CategoryContainer,
  Category,
  ListTopHeader,
  OptionList,
  OptionButton,
} from "./styled"
import { ReactComponent as SortSVG } from "../../svgs/Sort.svg"
import { ReactComponent as DownSVG } from "../../svgs/Down.svg"
import FilterDrawer from "./FilterDrawer"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { reqGetSearchGoals } from "../../apis/goal"
import { CATEGORIES } from "../../constants/dummy"
import { selectedRecommendFilterAtom } from "../../store/atoms/recommendFilter"
import { useRecoilValue } from "recoil"
import BaseLayout from "../../components/BaseLayout"

export default function List() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [sort, setSort] = useState("count")
  const [sortVisible, setSortVisible] = useState("false")
  const selectedRecommendFilter = useRecoilValue(selectedRecommendFilterAtom)
  const categories = [
    { label: "전체", value: "all" },
    ...CATEGORIES.map((category) => ({
      label: `${category.icon} ${category.label}`,
      value: category.value,
    })),
  ]
  const [category, setCategory] = useState("all")
  const getGoalsSearch = async () => {
    setLoading(true)
    const data = {
      size: 30,
      sort: sort,
    }
    if (selectedRecommendFilter.name !== "all")
      data.jobIds = selectedRecommendFilter.name
    if (category !== "all") data.category = category
    const res = await reqGetSearchGoals(data)
    if (res.status === 200) {
      setList(res.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    getGoalsSearch()
  }, [])

  useEffect(() => {
    getGoalsSearch()
  }, [category, sort])

  return (
    <BaseLayout>
      <Container>
        <Header>
          <TitleButton onClick={() => setOpen(true)}>
            {selectedRecommendFilter.category === "all"
              ? "전체 직무 탐색"
              : selectedRecommendFilter.category}
            <DownSVG />
          </TitleButton>
          <Description>
            다른 사람들의 목표와 이력을 탐색할 수 있어요
          </Description>
        </Header>
        <CategoryContainer>
          <Category
            options={categories}
            optionType="button"
            value={category}
            onChange={(category) => setCategory(category.target.value)}
          />
        </CategoryContainer>
        <ListTopHeader>
          <Description>{list.length}개의 목표</Description>
          <IconButton onClick={() => setSortVisible("true")}>
            <SortSVG />
            <OptionList visible={sortVisible}>
              <OptionButton
                selected={sort === "count"}
                onClick={(e) => {
                  e.stopPropagation()
                  setSort("count")
                  setSortVisible("false")
                }}
              >
                추천 순
              </OptionButton>
              <OptionButton
                selected={sort === "latest"}
                onClick={(e) => {
                  e.stopPropagation()
                  setSort("latest")
                  setSortVisible("false")
                }}
              >
                최신 순
              </OptionButton>
            </OptionList>
          </IconButton>
        </ListTopHeader>
        <Goals
          goals={list}
          loading={loading}
          option={{ labelHidden: true }}
          placeholder="조회된 목표가 없습니다."
          onClick={(goal) => navigate(`/search/${goal.id}`)}
        />
      </Container>
      <FilterDrawer
        open={open}
        onClose={() => {
          setOpen(false)
          getGoalsSearch()
        }}
      />
    </BaseLayout>
  )
}
