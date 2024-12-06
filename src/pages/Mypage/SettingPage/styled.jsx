import styled from "styled-components"
import { Text } from "../../../components/Typo"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px 0px 25px;
`
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled(Text)`
  &&& {
    font-size: 24px;
    color: white;
    font-weight: bold;
  }
`
export const Profile = styled.img`
  width: 81px;
  height: auto;
  border-radius: 50%;
`

export const SettingItemWrapper = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

export const SettingItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(44, 44, 44, 0.8);
  border-radius: 15px;
  padding: 20px 20px;
`
export const ItemName = styled.div`
  width: 80px;
  color: #b2b2b2;
  font-size: 15px;
  font-weight: semibold;
`

export const Content = styled.div`
  width: 150px;
  font-size: 15px;
  color: white;
`
export const Option = styled.div`
  width: 30px;
  color: white;
  font-size: 13px;
`
