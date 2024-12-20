import { useStepNavigation } from "../../../hooks/useStepNavigation"
import { usePickedItems } from "../../../hooks/usePickedItems"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  BodyWrapper,
  Content,
  GridWrapper,
  ItemBtn,
  MainTitle,
  NextBtn,
  Wrapper,
  Option,
  BackBtn,
} from "../styled"
import { Highlight } from "../../../components/Typo"
const SetJob = ({ onClickNext, jobData, setDetailJob }) => {
  const navigate = useNavigate()
  const { selectItem, jobItem, setJobItem } = usePickedItems()
  const { paramsJobItem } = useStepNavigation()
  useEffect(() => {
    if (paramsJobItem) {
      setJobItem(paramsJobItem)
    }
  }, [])

  return (
    <Wrapper>
      <BackBtn
        onClick={() => {
          if (localStorage.getItem("backURL") === "true") {
            localStorage.removeItem("backURL")
            navigate("/mypage")
          } else {
            navigate("/onboard")
          }
        }}
      />
      <Content>
        <MainTitle>
          <Highlight>희망 직군</Highlight>을
        </MainTitle>
        <MainTitle style={{ marginBottom: "10px" }}>선택해주세요</MainTitle>
        <Option>마이페이지에서 언제든지 수정할 수 있어요</Option>
      </Content>
      <BodyWrapper>
        {jobData && (
          <GridWrapper>
            {jobData?.map((el, index) => (
              <ItemBtn
                isSelected={parseInt(jobItem) === index}
                key={index}
                data-index={index}
                onClick={(event) => {
                  console.log(event)
                  selectItem(event)
                  setDetailJob(el.id)
                }}
              >
                {el.category}
              </ItemBtn>
            ))}
          </GridWrapper>
        )}
        <NextBtn
          $variant={jobItem.length !== 0 ? "default" : "secondary"}
          disabled={jobItem.length === 0 ? true : false}
          onClick={() => {
            onClickNext(jobItem)
          }}
        >
          다음
        </NextBtn>
      </BodyWrapper>
    </Wrapper>
  )
}

export default SetJob
