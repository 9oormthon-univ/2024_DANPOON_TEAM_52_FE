import styled from "styled-components"
import Button from "../../components/Button"
import { Text } from "../../components/Typo"
import ScrollContainer from "../../components/ScrollContainer"
import ShadowContainer from "../../components/ShadowContainer"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 30px 19px 0px;
  height: 100%;
  overflow: hidden;
`
export const ProfileInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 12px;
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const InfoText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`
export const InfoSubText = styled.div`
  font-size: 13px;
  color: #c3c3c3;
`

export const FeedbackBtn = styled(Button)`
  &&& {
    width: 100%;
    height: 32px;
    color: black !important;
    font-size: 15px;
    background: linear-gradient(90deg, #e0ffc6 0%, #8afaf1 100%) !important;
  }
`
export const ContentWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #aaaaaa;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
`
export const CategoryWrapper = styled.div`
  height: auto;
  background: rgba(44, 44, 44, 0.8);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 13.8px 20px 12px 20px;
  margin-bottom: 10px;
`
export const CategoryGroup = styled.div`
  display: flex;
  text-align: center;
  gap: 9px;
`
export const CategoryIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-top: 3px;
`

export const CategoryName = styled(Text)`
  &&& {
    font-weight: bold;
  }
`
export const ItemGroup = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ItemDate = styled(Text)`
  &&& {
    flex: 1;
    font-size: 12px;
    color: #b2b2b2;
  }
`
export const ItemName = styled(Text)`
  &&& {
    width: 40vw;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap; /* 텍스트를 한 줄로 유지 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
    text-align: left;
  }
`
export const StyledButton = styled.button`
  background-color: #222;
  border: none;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
`

export const StyledPlus = styled(StyledButton)`
  &&& {
    width: 47px;
    height: 47px;
    position: absolute;
    right: 20px;
    bottom: 140px;
    background: #4d4d4d;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
    z-index: 100;
    @media (min-width: 573px) {
      bottom: 180px;
    }
  }
`
export const NaviWrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 5px;
  @media (min-width: 573px) {
    right: 20px;
    top: 15px;
  }

  @media (max-width: 573px) {
    right: 20px;
    top: 15px;
  }
`
export const CustomScrollContainer = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 16px;
  & > div:first-child {
    margin-top: 30px;
  }
  & > div:last-child {
    margin-bottom: 30px;
  }
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    height: 30px;
  }
`
export const CustomShadowContainer = styled(ShadowContainer)`
  display: flex;
  flex: 1;
  overflow-y: hidden;
`
