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
  Detail
} from "./styled"
import BackwardButton from "../../../components/BackwardButton"
import StyledSwitch from "../../../components/Switch"
import { useNavigate } from "react-router-dom"
const SettingPage = () => {
  const userData = {
    userName: "아자아자석영",
    job: "기획 전략",
    interest: "서비스 기획, 앱 기획",
  }
  const navigate = useNavigate();
  return (
    <Wrapper>
      <BackwardButton />
      <Group>
        <Title>환경설정</Title>
        <Profile src="/profileimg.png" />
      </Group>
      <SettingItemWrapper>
        <SettingItem>
          <ItemName>별명</ItemName>
          <Content>{userData.userName}</Content>
          <Option>변경</Option>
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
    </Wrapper>
  )
}
export default SettingPage
