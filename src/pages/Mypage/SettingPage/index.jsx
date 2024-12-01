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
import BaseLayout from "../../../components/BaseLayout"
import BackwardButton from "../../../components/BackwardButton"
import StyledSwitch from "../../../components/Switch"
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import NicknamePage from "../Nickname/Nickname"
import { useRecoilValue, useRecoilState } from "recoil"
import userAtom from "../../../store/atoms/user"
import userJobAtom from "../../../store/atoms/userjob"
import userInfoAtom from "../../../store/atoms/userinfo"
import promptAtom from "../../../store/atoms/prompt"
import { reqUpdateUser } from "../../../apis/user"
const SettingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSetting, setIsSetiing] = useState({
    is_notification: false,
    is_profile: false,
  })
  const navigate = useNavigate()
  //사용자이름, 프로필사진 데이터
  const userData = useRecoilValue(userAtom)
  //사용자 직무 저장
  const userJob = useRecoilValue(userJobAtom)
  //사용자 설정정보 저장
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)
  //맞춤형지침 데이터
  const prompt = useRecoilValue(promptAtom)
  const handleSaveUserInfo = async () => {
    const updatedData = {
      nickname: userInfo.nickname,
      known_prompt: prompt.known_prompt,
      help_prompt: prompt.help_prompt,
      is_notification: isSetting.is_notification,
      is_profile: isSetting.is_profile,
    }
    setUserInfo(updatedData) // Recoil 상태 업데이트
    await reqUpdateUser(userInfo) // API 호출
  }
  return (
    <BaseLayout>
      <Wrapper>
        <BackwardButton onClick={handleSaveUserInfo} />
        <Group>
          <Title>환경설정</Title>
          <Profile src={userData.image_url} />
        </Group>
        <SettingItemWrapper>
          <SettingItem>
            <ItemName>별명</ItemName>
            <Content>{userInfo.nickname}</Content>
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
              <Content>{userJob[0]?.category}</Content>
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
            <ItemName>맞춤형 설정</ItemName>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Content style={{ fontSize: "11px" }}>
                개인화된 목표 추천에 도움
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
            <StyledSwitch
              onChange={(checked) => {
                setIsSetiing((prev) => ({
                  ...prev,
                  is_notification: checked,
                }))
              }}
            />
          </SettingItem>
          <SettingItem>
            <ItemName>이력공개</ItemName>
            <StyledSwitch
              onChange={(checked) => {
                console.log(checked)
                setIsSetiing((prev) => ({
                  ...prev,
                  is_profile: checked,
                }))
              }}
            />
          </SettingItem>
        </SettingItemWrapper>
        {isModalOpen && <NicknamePage setIsEdit={setIsModalOpen} />}
      </Wrapper>
    </BaseLayout>
  )
}
export default SettingPage
