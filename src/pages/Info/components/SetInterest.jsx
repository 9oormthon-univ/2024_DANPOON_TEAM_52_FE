import { popStateFunc } from "../../../utils/utilfunc"
import { jobData } from "../../../constants/data"
import { usePickedItems } from "../../../hooks/usePickedItems"
import { useStepNavigation } from "../../../hooks/useStepNavigation"
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
const SetInterest = ({ onClickNext }) => {
  const { paramsInterestItem, paramsJobItem } = useStepNavigation()
  const { pickedItems, toggleItem, sendData } = usePickedItems(
    paramsInterestItem,
    () => popStateFunc(2, paramsJobItem, pickedItems)
  )
  return (
    <Wrapper>
      <Content>
        <MainTitle>
          <span style={{ color: "#8AFAF1" }}>
            {jobData[parseInt(paramsJobItem)]}
          </span>
          <span style={{ color: "white" }}> 직무에서</span>
        </MainTitle>
        <MainTitle style={{ color: "white", marginBottom: "10px" }}>
          세부 관심사를 선택해주세요
        </MainTitle>
        <Option>중복 선택이 가능해요</Option>
      </Content>

      <BodyWrapper>
        <GridWrapper>
          {jobData.map((el, index) => (
            <ItemBtn
              style={{
                background: pickedItems.includes(`${index}`)
                  ? "#184149"
                  : "#3B3B3B",
              }}
              key={index}
              data-index={index}
              onClick={(event) => {
                toggleItem(event.target.dataset.index)
              }}
            >
              {el}
            </ItemBtn>
          ))}
        </GridWrapper>
        <NextBtn
          $variant={pickedItems.length !== 0 ? "primary" : "secondary"}
          onClick={() => {
            onClickNext()
            sendData()
          }}
        >
          시작하기
        </NextBtn>
      </BodyWrapper>
    </Wrapper>
  )
}

export default SetInterest
