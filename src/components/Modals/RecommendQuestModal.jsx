import styled from "styled-components"
import Modal from "../Modal"
import Button from "../Button"
import Star from "../Star"
import { ReactComponent as SwapSVG } from "../../svgs/Swap.svg"
import { reqGetRecommendQuests } from "../../apis/quest"
import { useState, useEffect } from "react"

const ModalContent = styled.div`
  width: 270px;
  height: fit-content;
  display: flex;
  overflow: visible;
  flex-direction: column;
  gap: 10px;
`

const StarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 20px;
  overflow: visible;
  background: radial-gradient(
    50% 140% at 50% 50%,
    #40af7f77 0%,
    #40af7f77 20%,
    #40af7f00 50%,
    #40af7f00 100%
  );
  border-radius: 50%;
  & > div:first-child {
    width: 270px;
    height: 300px;
    transform: translateY(53px);
  }
`

const Chat = styled.div`
  position: absolute;
  top: -180px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  color: #40af7f;
  background: #fff;
  width: 220px;
  height: fit-content;
  border-radius: 13px;
  word-break: keep-all;
`
const RoundedTriangle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 65%;
  transform: translate(-50%, 85px) scale(0.11);
  --r: 30px;
  width: 180px;
  aspect-ratio: 1 / cos(30deg);
  -webkit-mask: linear-gradient(0deg, #0000 calc(3 * var(--r) / 2), #000 0),
    radial-gradient(
      var(--r) at 50% calc(100% - 2 * var(--r)),
      #000 98%,
      #0000 101%
    );
  clip-path: polygon(50% 100%, 100% 0, 0 0);
  background: white;
`
const StyledButton = styled(Button)`
  &&& {
    padding: 10px 0;
    border-radius: 8px;
    font-weight: 400;
  }
`

const RefreshButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background: transparent;
  outline: none;
  border: none;
  color: white;
  width: fit-content;
  margin-left: auto;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
  color: #c3c3c3;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

export default function RecommendQuestModal({ open, onClose, text, onClick }) {
  const [recommendedQuests, setRecommendedQuests] = useState([])
  const getRecommendedQuests = async () => {
    const res = await reqGetRecommendQuests()
    if (res.status === 200) {
      setRecommendedQuests(res.data)
    }
  }
  useEffect(() => {
    getRecommendedQuests()
  }, [])
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <StarContainer>
          <Star />
          <Chat>
            {text}
            <RoundedTriangle />
          </Chat>
        </StarContainer>
        {recommendedQuests.map((quest, index) => (
          <StyledButton key={index} $variant="secondary" onClick={onClick}>
            {quest.title}
          </StyledButton>
        ))}
        <RefreshButton onClick={getRecommendedQuests}>
          새로고침
          <SwapSVG width={20} height={20} />
        </RefreshButton>
      </ModalContent>
    </Modal>
  )
}
