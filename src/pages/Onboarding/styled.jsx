import styled from "styled-components"
import Button from "../../components/Button"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* 화면 전체 높이 */
  width: 100%; /* 화면 전체 너비 */
`

export const Content = styled.div`
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: bold;
  color: white;
  white-space: pre-wrap; /* 줄바꿈 허용 */
`

export const SlideImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  position: relative; /* 그라데이션 배치를 위해 relative */
  width: 300px; /* 컨테이너 크기 */
  height: 300px;
`

export const SlideImg = styled.img`
  position: relative;
  z-index: 1; /* 그라데이션 위로 오게 설정 */
  max-width: 80%; /* 이미지 크기 조정 */
  height: auto;
  object-fit: contain;
`

export const NextBtn = styled(Button)`
  &&& {
    width: 90%;
    margin: 64px 18px 34px 18px;
  }
`