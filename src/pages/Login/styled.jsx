import styled from "styled-components";
import LogoComponent from "../../components/Logo";
import TypoComponent from "../../components/Typo";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
`;

export const Logo = styled(LogoComponent)`
  &&& {
    margin-bottom: 45px;
  }
`;

export const Title = styled(TypoComponent.Title)`
  &&& {
    margin-bottom: 65px;
  }
`;

export const Text = styled(TypoComponent.Text)`
  &&& {
    margin-bottom: 20px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
