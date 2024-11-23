import styled from "styled-components"
import Button from "../../components/Button"
import { Text } from "../../components/Typo"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 100px 19px;
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
`
export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
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
&&&{
    width: 100%;
    height: 32px;
    font-size; 15px;
    background: linear-gradient(90deg, #E0FFC6 0%, #8AFAF1 100%) !important;
}
`
export const ContentWrapper = styled.div`
  max-height: 600px;
  overflow-y: auto;
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
export const CategoryIcon = styled.img`
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
  justify-content: space-between;
  align-items: center;
`
export const ItemDate = styled(Text)`
  &&& {
    font-size: 12px;
    color: #b2b2b2;
  }
`
export const ItemName = styled(Text)`
  &&& {
    font-weight: 500;
    margin: 0;
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
    width:47px;
    height:47px;
    position: absolute;
    right: 20px;
    bottom: 140px;
    background: #4D4D4D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
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
    left: 420px;
    bottom: 520px;
  }

  @media (max-width: 573px) {
    left: 75vw;
    top: 70px;
    width: 100vw;
  }
`
