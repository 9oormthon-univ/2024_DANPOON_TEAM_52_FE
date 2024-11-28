import { ModalInput } from "../../Calendar/styled"
import {
  Wrapper,
  Group,
  Title,
  Profile,
  SettingItemWrapper,
  SettingItem,
  ItemName,
  Option,
  Content,
} from "./styled"
import BackwardButton from "../../../components/BackwardButton"
import StyledSwitch from "../../../components/Switch"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import NicknamePage from "../Nickname/Nickname"
import { useRecoilValue } from "recoil"
import userAtom from "../../../store/atoms/user"
import userJobAtom from "../../../store/atoms/userjob"
const SettingPage = () => {
  //별명변경 모달
  const userData = useRecoilValue(userAtom)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const userJob = useRecoilValue(userJobAtom);
  const navigate = useNavigate()
  useEffect(() => {
    console.log(userJob); // 상태 갱신 확인
  }, [userJob]);
  return (
    <Wrapper>
      <BackwardButton
        onClick={() => {
          navigate("/mypage")
        }}
      />
      <Group>
        <Title>환경설정</Title>
        <Profile src={userData.img} />
      </Group>
      <SettingItemWrapper>
        <SettingItem>
          <ItemName>별명</ItemName>
          <Content>{userData.nickname}</Content>
          <Option
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            변경
          </Option>
        </SettingItem>
        <SettingItem>
          <ItemName>희망직무</ItemName>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Content>직무</Content>
            <Content
              style={{ fontSize: "10px", marginTop: "5px", color: "#C3C3C3" }}
            >
              {userJob && userJob.length > 0
                ? userJob.map((job) => job.name).join(", ")
                : "직무 정보 없음"}
            </Content>
          </div>
          <Option
            onClick={() => {
              localStorage.setItem("backURL", "/setting")
              navigate("/info")
            }}
          >
            변경
          </Option>
        </SettingItem>
        <SettingItem>
          <ItemName>맞춤형 지침</ItemName>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Content style={{ fontSize: "11px" }}>
              입력시 목표 추천에 도움이 돼요
            </Content>
          </div>
          <Option
            onClick={() => {
              navigate("/custom")
            }}
          >
            입력
          </Option>
        </SettingItem>
        <SettingItem>
          <ItemName>알림설정</ItemName>
          <StyledSwitch />
        </SettingItem>
        <SettingItem>
          <ItemName>공개설정</ItemName>
          <StyledSwitch />
        </SettingItem>
        <SettingItem>
          <ItemName>이력공개</ItemName>
          <StyledSwitch />
        </SettingItem>
        <SettingItem>
          <ItemName>목표공개</ItemName>
          <StyledSwitch />
        </SettingItem>
      </SettingItemWrapper>
      {isModalOpen && <NicknamePage setIsModalOpen={setIsModalOpen} />}
    </Wrapper>
  )
}
export default SettingPage
