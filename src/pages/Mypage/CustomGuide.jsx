import React from "react"
import { Wrapper } from "../Mypage/SettingPage/styled"
import BackwardButton from "../../components/BackwardButton"
import { useNavigate } from "react-router-dom"
import { Text, Highlight } from "../../components/Typo"
import { useRecoilValue, useRecoilState } from "recoil"
import { useState } from "react"
import userInfoAtom from "../../store/atoms/userinfo"
import promptAtom from "../../store/atoms/prompt"
const CustomGuidePage = () => {
  const [prompt, setPrompt] = useState({
    prompt1: "",
    prompt2: "",
  })
  const userData = useRecoilValue(userInfoAtom)
  //사용자 프롬프트 데이터
  const [userPrompt, setUserPrompt] = useRecoilState(promptAtom);
  const navigate = useNavigate()

  const handleSave = () => {
    setUserPrompt({
      known_prompt:prompt.prompt1,
      help_prompt:prompt.prompt2
    })
    console.log(prompt)
    alert("맞춤형설정이 완료되었습니다");
    navigate("/setting");
  }

  return (
    <Wrapper>
      <BackwardButton onClick={() => navigate("/mypage")} />
      <Text
        style={{
          fontSize: "16px",
          fontWeight: "semibold",
          marginTop: "14px",
          fontFamily: "Pretendard",
        }}
      >
        <Highlight>{userData.nickname}</Highlight>님에 대한 정보를 입력해주시면,
        <br />
        목표 및 퀘스트 추천에 <Highlight>정확도</Highlight>를 높일 수 있어요.
      </Text>

      {/* 질문 섹션 */}
      <TextSection
        question="현재 전공 또는 공부하고 있는 분야가 무엇인가요? 어떤 직업을 목표로 하고 계신가요?"
        subText="희망 직무와 관련된 프로젝트나 연습을 하고 계신 게 있다면 알려주세요."
        start="1"
      />
      <InfoBox keyname="prompt1" setPrompt={setPrompt} defaultValue={userData.known_prompt}
      />

      <TextSection
        question="오르빗에게 어떤 부분에서 더 도움받고 싶나요?"
        subText="ex. 구체적으로 어떤 목표를 추천받고 싶어요. 실무 경험을 쌓으려면 어떤 방법이 있을지 알고 싶어요."
        start="2"
      />

      <InfoBox keyname="prompt2" setPrompt={setPrompt} defaultValue={userData.help_prompt}/>

      {/* 저장하기 버튼 */}
      <SaveButton onClick={handleSave} />
    </Wrapper>
  )
}

// 질문과 서브텍스트를 분리하여 컴포넌트화
const TextSection = ({ question, subText, start }) => (
  <Text
    style={{
      fontSize: "14px",
      fontWeight: "semibold",
      marginTop: "14px",
      fontFamily: "Pretendard",
    }}
  >
    <ol start={start}>
      <li>
        {question}
        {subText && (
          <span
            style={{
              fontSize: "14px",
              color: "#7D7D7D",
              fontWeight: "semibold",
              fontFamily: "Pretendard",
            }}
          >
            <br />
            {subText}
          </span>
        )}
      </li>
    </ol>
  </Text>
)

export default CustomGuidePage

// 공통적으로 사용하는 스타일 컴포넌트를 분리
const InfoBox = ({ defaultValue, keyname, setPrompt}) => (
  <div
    style={{
      width: "100%",
      height: "84px",
      background: "#262827",
      borderRadius: "15px",
      marginBottom: "39px",
      border: "1px solid black",
    }}
  >
    <textarea
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        border: "none",
        color: "#fff",
        fontFamily: "Pretendard",
        fontSize: "14px",
        outline: "none",
        resize: "none",
        padding: "20px 20px",
      }}
      defaultValue={defaultValue}
      onChange={(event) =>
        setPrompt((prev) => ({
          ...prev,
          [keyname]: event.target.value,
        }))
      }
    />
  </div>
)

const SaveButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "30px",
      fontFamily: "Pretendard",
      marginTop: "46px",
      background: "#3F3F3F",
      color: "white",
      fontSize: "16px",
      fontWeight: "semibold",
    }}
  >
    저장하기
  </button>
)
