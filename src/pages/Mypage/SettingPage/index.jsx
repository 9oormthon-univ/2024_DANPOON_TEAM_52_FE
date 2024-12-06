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
import { useState } from "react"
import NicknamePage from "../Nickname/Nickname"
import { useRecoilValue, useRecoilState } from "recoil"
import userAtom from "../../../store/atoms/user"
import userJobAtom from "../../../store/atoms/userjob"
import userInfoAtom from "../../../store/atoms/userinfo"
import { reqUpdateUser } from "../../../apis/user"
const SettingPage = () => {
  //사용자이름, 프로필사진 데이터(프로필사진만 사용중)
  const userData = useRecoilValue(userAtom)
  //사용자 직무 저장
  const userJob = useRecoilValue(userJobAtom)
  //사용자 설정정보 저장
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)
  //맞춤형지침 데이터
  const [isModalOpen, setIsModalOpen] = useState(false)
  const settingBackBtn = () => {
    reqUpdateUser({
      nickname: userInfo.nickname,
      known_prompt: userInfo.known_prompt,
      help_prompt: userInfo.help_prompt,
      is_notification: userInfo.is_notification,
      is_profile: userInfo.is_profile,
    })
    navigate("/mypage")
  }
  const navigate = useNavigate()
  return (
    <BaseLayout>
      <Wrapper>
        <BackwardButton onClick={settingBackBtn} />
        <Group>
          <Title>환경설정</Title>
          <Profile src={userData.image_url} />
        </Group>
        <SettingItemWrapper>
          <SettingItem>
            <ItemName>별명</ItemName>
            <Content defaultValue={userData.nickname}>
              {userInfo.nickname}
            </Content>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                localStorage.setItem("backURL", true)
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
              defaultChecked={userInfo.is_notification}
              onChange={(checked) => {
                setUserInfo((prev) => ({
                  ...prev,
                  is_notification: checked,
                }))
              }}
            />
          </SettingItem>
          <SettingItem>
            <ItemName>이력공개</ItemName>
            <StyledSwitch
              defaultChecked={userInfo.is_profile}
              onChange={(checked) => {
                setUserInfo((prev) => ({
                  ...prev,
                  is_profile: checked,
                }))
              }}
            />
          </SettingItem>
        </SettingItemWrapper>
        {isModalOpen && (
          <NicknamePage isEdit={isModalOpen} setIsEdit={setIsModalOpen} />
        )}
      </Wrapper>
    </BaseLayout>
  )
}
export default SettingPage
