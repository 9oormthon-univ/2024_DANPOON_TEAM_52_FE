import { useRecoilState, useRecoilValue } from "recoil"
import {
  selectedRecommendFilterAtom,
  recommendFilterAtom,
} from "../../../store/atoms/recommendFilter"
import {
  Container,
  Header,
  Title,
  ListContainer,
  CategoryButton,
  ButtonContainer,
  SaveButton,
  RightIcon,
} from "./styled"

export default function FilterPage({ onSave }) {
  const recommendFilter = useRecoilValue(recommendFilterAtom)
  const [selectedRecommendFilter, setSelectedRecommendFilter] = useRecoilState(
    selectedRecommendFilterAtom
  )
  return (
    <Container>
      <Header>
        <Title>필터</Title>
      </Header>
      <ListContainer>
        <CategoryButton
          onClick={() =>
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              status: "category",
            }))
          }
        >
          {selectedRecommendFilter.category === "all"
            ? "직군 전체"
            : selectedRecommendFilter.category}
          <RightIcon />
        </CategoryButton>
        <CategoryButton
          disabled={selectedRecommendFilter.category === "all"}
          onClick={() =>
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              status: "name",
            }))
          }
        >
          {selectedRecommendFilter.name === "all"
            ? "직무 전체"
            : selectedRecommendFilter.name
                .map(
                  (v) =>
                    Object.values(recommendFilter)
                      .flat()
                      .find((f) => f.id === v).name
                )
                .join(", ")}
          <RightIcon />
        </CategoryButton>
      </ListContainer>
      <ButtonContainer>
        <SaveButton $variant="secondary" onClick={onSave}>
          적용
        </SaveButton>
      </ButtonContainer>
    </Container>
  )
}
