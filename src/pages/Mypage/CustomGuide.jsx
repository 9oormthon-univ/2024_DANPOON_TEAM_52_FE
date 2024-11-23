import { Wrapper } from "../Mypage/SettingPage/styled"
import BackwardButton from "../../components/BackwardButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Text } from "../../components/Typo"
import { Highlight } from "../../components/Typo"
const CustomGuidePage = () => {
  return (
    <Wrapper>
      <BackwardButton
        onClick={() => {
          navigate("/mypage")
        }}
      />
      <Text
        style={{ fontSize: "16px", fontWeight: "semibold", marginTop: "14px" }}
      >
        <Highlight>아자아자석영</Highlight>님에 대한 정보를 입력해주시면,
        <br />
        목표 및 퀘스트 추천에 <Highlight>정확도</Highlight>를 높일 수 있어요.
      </Text>
      <Text
        style={{ fontSize: "15px", fontWeight: "semibold", marginTop: "14px" }}
      >
        1. 현재 전공 또는 공부하고 있는 분야가 무엇인가요?
        <br />
        어떤 직업을 목표로 하고 계신가요?
      </Text>
      <div
        style={{
          width: "100%",
          height: "84px",
          background: "#262827",
          borderRadius: "15px",
          marginBottom:"39px"
        }}
      ></div>
      <Text
        style={{ fontSize: "15px", fontWeight: "semibold", marginTop: "14px" }}
      >
        2. 희망하는 직무에서 관련된 프로젝트나 연습
        <br />
        하고 계신 게 있다면 알려주세요.
      </Text>
      <div
        style={{
          width: "100%",
          height: "84px",
          background: "#262827",
          borderRadius: "15px",
          marginBottom:"39px"
        }}
      ></div>{" "}
      <Text
        style={{ fontSize: "15px", fontWeight: "semibold", marginTop: "14px" }}
      >
        오르빛이 추천하는 목표가 사용자의 관심사나 경력 상황과<br/>잘 맞는다고 느끼셨나요? 더 구체적이면 좋겠다고 느낀 부분이 있다면 어떤 점인가요?
        하고 계신 게 있다면 알려주세요.
      </Text>
      <div
        style={{
          width: "100%",
          height: "84px",
          background: "#262827",
          borderRadius: "15px",
        }}
      ></div>
      <button style={{height:"50px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"30px", fontFamily:"Pretendard",marginTop:"46px", background:"#3F3F3F", color:"white",fontSize:"16px", fontWeight:"semibold"}}>저장하기</button>
    </Wrapper>
  )
}
export default CustomGuidePage
