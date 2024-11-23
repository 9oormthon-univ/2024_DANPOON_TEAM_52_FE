import styled from "styled-components";
import { Text } from "../../../components/Typo";
import { Switch } from "antd";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding: 46px 19px 0px 19px;
`
export const Group = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled(Text)`
&&&{
    font-size: 24px;
    color: white;
    font-weight: bold;
}
`
export const Profile = styled.img`
    width: 81px;
    height: auto;
`

export const SettingItemWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
` 

export const SettingItem = styled.div`
    width: 100%;
    height: 60px;
    display:flex;
    align-items: center;
    background: rgba(44, 44, 44, 0.8);
    border-radius: 15px;
    padding:20px 20px;

`
export const ItemName = styled.div`
    width: 80px;
    color: #B2B2B2;
    font-size: 15px;
    font-weight: semibold;
    flex:1;
`

export const Content = styled.div`  
    width: 200px;
    font-size: 15px;
    color: white;
`
export const Option = styled.div`
    width: 30px;
    color: white;
    font-size: 13px;
`