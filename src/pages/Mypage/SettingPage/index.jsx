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
import { useState } from "react"
import NicknamePage from "../Nickname/Nickname"
import { useRecoilValue } from "recoil"
import userAtom from "../../../store/atoms/user"
const SettingPage = () => {
  //별명변경 모달
  const userAPIData = useRecoilValue(userAtom)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const userData = {
    userName: "아자아자석영",
    job: "기획 전략",
    interest: "서비스 기획, 앱 기획",
  }
  return (
    <Wrapper>
      <BackwardButton onClick={()=>{navigate('/mypage')}}/>
      <Group>
        <Title>환경설정</Title>
        <Profile src={userAPIData.img} />
      </Group>
      <SettingItemWrapper>
        <SettingItem>
          <ItemName>별명</ItemName>
          <Content>{userAPIData.nickname}</Content>
          <Option onClick={()=>{
            setIsModalOpen(true);
          }}>변경</Option>
        </SettingItem>
        <SettingItem>
          <ItemName>희망직무</ItemName>
          <div style={{display:"flex", flexDirection:"column"}}>
          <Content>{userData.job}</Content>
          <Content style={{fontSize:"10px", marginTop:"5px", color:"#C3C3C3"}}>서비스 기획, 앱 기획</Content>
          </div>
          <Option onClick={()=>{
            localStorage.setItem("backURL","/setting");
            navigate('/info')
            }}>변경</Option>
        </SettingItem>
        <SettingItem>
          <ItemName>맞춤형 지침</ItemName>
          <div style={{display:"flex", flexDirection:"column"}}>
          <Content style={{fontSize:"11px"}}>입력시 목표 추천에 도움이 돼요</Content>
          </div>
          <Option onClick={()=>{
            navigate('/custom')
            }}>입력</Option>
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
      {isModalOpen && (
        <NicknamePage setIsModalOpen={setIsModalOpen}/>
      )}
    </Wrapper>
  )
}
export default SettingPage
