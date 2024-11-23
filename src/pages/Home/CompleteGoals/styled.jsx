import { styled } from "styled-components"
import ShadowContainerComponent from "../../../components/ShadowContainer"

export const ShadowContainer = styled(ShadowContainerComponent)`
  width: 100vw;
  max-width: 576px;
  transform: translateX(-30px);
  &::before,
  &::after {
    width: calc(100%);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 0 30px 20px;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 15px;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
  & > div:first-child {
    margin-top: 30px;
  }
  & > div:last-child {
    margin-bottom: 30px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      rgba(45, 71, 69, 0.4) 13.5%,
      rgba(60, 147, 140, 0.5) 46%,
      rgba(45, 71, 69, 0.4) 79.5%
    );
    filter: blur(0.75px);
  }
  background: linear-gradient(
    180deg,
    #000 0%,
    #0c1f1f 25%,
    #000 50%,
    #0e2227 75%,
    #000 100%
  );
  background-size: 100% 1500px;
  background-attachment: local;
  gap: 15px;
`

export const MonthContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  gap: 15px;
`

export const Month = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  color: #fff;
`

export const GoalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ direction }) =>
    direction === "left" ? "flex-start" : "flex-end"};
  & > div {
    align-items: ${({ direction }) =>
      direction === "left" ? "flex-end" : "flex-start"};
  }
  & > div > canvas {
    transform: ${({ direction }) =>
      direction === "left" ? "scaleX(-1)" : "scaleX(1)"};
  }
`

export const GoalTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  margin: 0px 50px;
`
export const ConsterllationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% + 30px);
  cursor: pointer;
`
