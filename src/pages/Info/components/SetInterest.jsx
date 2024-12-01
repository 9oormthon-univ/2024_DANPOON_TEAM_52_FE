import { popStateFunc } from "../../../utils/utilfunc"
import { jobData } from "../../../constants/data"
import { usePickedItems } from "../../../hooks/usePickedItems"
import { useStepNavigation } from "../../../hooks/useStepNavigation"
import { useNavigate } from "react-router-dom"
import {
  BodyWrapper,
  Content,
  GridWrapper,
  ItemBtn,
  MainTitle,
  NextBtn,
  Option,
  Wrapper,
} from "../styled"
import { Highlight } from "../../../components/Typo"
import { useState } from "react"
import { reqPostJob } from "../../../apis/job"

const SetInterest = ({ onClickNext, detailJob }) => {
  const navigate = useNavigate() // 컴포넌트 내부에서 useNavigate 호출
  const { paramsInterestItem, paramsJobItem } = useStepNavigation()
  const { pickedItems, toggleItem, sendData } = usePickedItems(
    paramsInterestItem,
    () => popStateFunc(2, paramsJobItem, pickedItems)
  )

  // 선택된 아이템을 저장할 상태
  const [selectedItems, setSelectedItems] = useState([])

  // 선택/해제 함수
  const handleSelectItem = (id) => {
    setSelectedItems(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((itemId) => itemId !== id) // 이미 선택된 경우 해제
          : [...prevSelected, id] // 선택되지 않은 경우 추가
    )
  }

  return (
    <Wrapper>
      <Content>
        <MainTitle>
          <Highlight>{jobData[parseInt(paramsJobItem)]}</Highlight>
          <span style={{ color: "white" }}> 직무에서</span>
        </MainTitle>
        <MainTitle style={{ color: "white", marginBottom: "10px" }}>
          <Highlight>세부 직무</Highlight>를 선택해주세요
        </MainTitle>
        <Option>중복 선택이 가능해요</Option>
      </Content>

      <BodyWrapper>
        <GridWrapper>
          {detailJob?.map((job) => (
            <ItemBtn
              key={job.id} // 고유 id를 key로 사용
              isSelected={selectedItems.includes(job.id)} // 선택 여부 확인
              onClick={() => handleSelectItem(job.id)} // 클릭 시 선택/해제
            >
              {job.name} {/* 직무 이름 렌더링 */}
            </ItemBtn>
          ))}
        </GridWrapper>
        <NextBtn
          $variant={selectedItems.length !== 0 ? "primary" : "secondary"}
          disabled={selectedItems.length === 0} // 선택된 항목이 없으면 비활성화
          onClick={() => {
            reqPostJob(selectedItems, navigate)
          }}
        >
          {localStorage.getItem("backURL") ? "수정 완료" : "시작하기"}
        </NextBtn>
      </BodyWrapper>
    </Wrapper>
  )
}

export default SetInterest
