import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { intros } from "../../constants/data"
import Carousel from "../../components/Carousel"

import {
  Wrapper,
  Content,
  SlideImgContainer,
  SlideImg,
  NextBtn,
  BodyWrapper,
} from "./styled"

const OnBoardingPage = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [buttonText, setButtonText] = useState("다음")
  const [isStart, setIsStart] = useState(false)
  const carouselRef = useRef(null)
  const navigate = useNavigate()

  const onBeforeChange = (from, to) => {
    // 슬라이드가 넘어가기 전에 인덱스 업데이트
    setSlideIndex(to)

    // 버튼 텍스트 업데이트
    if (to === intros.length - 1) {
      setButtonText("시작하기")
    } else {
      setButtonText("다음")
    }
  }

  const onClickNext = () => {
    if (slideIndex < intros.length - 1) {
      carouselRef.current.goTo(slideIndex + 1)
    } else {
      setIsStart(true)
      localStorage.setItem("visited", true);
      navigate("/info")
    }
  }

  return (
    <Wrapper>
      {!isStart && (
        <BodyWrapper>
          {/* 캐러셀 */}
          <Carousel ref={carouselRef} beforeChange={onBeforeChange} dots={true}>
            {intros.map(({ img, content }, index) => (
              <div key={index}>
                <Content>{content}</Content>
                <SlideImgContainer>
                  <SlideImg src={img} alt={`슬라이드 이미지 ${index}`} />
                </SlideImgContainer>
              </div>
            ))}
          </Carousel>
          <NextBtn onClick={onClickNext}>{buttonText}</NextBtn>
        </BodyWrapper>
      )}
    </Wrapper>
  )
}

export default OnBoardingPage
