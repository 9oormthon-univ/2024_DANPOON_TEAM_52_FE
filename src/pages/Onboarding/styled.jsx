import styled from "styled-components"
import { Carousel as AntCarousel } from "antd"
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

export const StyledCarousel = styled(AntCarousel)`
  .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3a8f91;
  }

  .slick-dots li.slick-active button {
    background-color: transparent !important; /* 배경색 제거 */
    border: none; /* 테두리 제거 */
    box-shadow: none;
    width: 20px;
    height: 20px;
    background-image: url("/onboardingImg/carouselstar.png");
    background-size: 200%; /* 이미지 크기가 버튼에 맞게 조정 */
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -4px; /* 높낮이 조정 */
  }
`

export const Content = styled.div`
  font-size: 24px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: white;
  margin-left: 32px;
  white-space: pre-wrap; /* 줄바꿈 허용 */
`

export const SlideImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  position: relative; /* 그라데이션 배치를 위해 relative */
  width: 300px; /* 컨테이너 크기 */
  height: 300px;

  &::before {
    content: "";
    position: absolute;
    width: 120%; /* 이미지 크기에 맞춤 */
    height: 110%;
    border-radius: 50%; /* 동그란 효과 */
    background: radial-gradient(
      circle,
      rgba(78, 197, 199, 0.5) 0%,
      /* 그라데이션 시작 색 (연한 청록색) */ rgba(0, 0, 0, 0) 70%
        /* 투명한 끝 부분 */
    );
    z-index: 0; /* 이미지 뒤로 보내기 */
  }
  margin-left: 12vw;
  margin-top: 86px;
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
