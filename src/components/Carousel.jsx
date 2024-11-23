import styled from "styled-components"
import { Carousel as AntCarousel } from "antd"

const Carousel = styled(AntCarousel)`
  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

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

export default Carousel
