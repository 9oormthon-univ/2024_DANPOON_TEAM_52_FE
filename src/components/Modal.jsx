import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import ButtonComponent from "./Button"

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(32, 48, 55, 0.6);
  overflow: hidden;
  z-index: 100;
`

const Container = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  padding: 18px;
  background: #000;
  border-radius: 10px;
  box-shadow: 0px -3px 13.7px 0px rgba(138, 250, 241, 0.4);
  overflow: visible;
`

export default function Modal({ children, open, onClose }) {
  const [isOpen, setIsOpen] = useState(open)
  const close = (e) => {
    setIsOpen(false)
    onClose()
  }
  useEffect(() => {
    setIsOpen(open)
  }, [open])
  return (
    <AnimatePresence>
      {isOpen && (
        <Background
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          onClick={close}
        >
          <Container
            initial={{ transform: "translateY(50px)" }}
            animate={{
              transform: "translateY(0px)",
              transition: { type: "spring", bounce: 0.5 },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </Container>
        </Background>
      )}
    </AnimatePresence>
  )
}

export const ModalContent = styled.form`
  display: flex;
  width: 270px;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 1.4;
  white-space: pre;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 30px;
`

export const StyledButton = styled(ButtonComponent)`
  flex: 1;
  &&& {
    padding: 5px;
  }
`

export const CheckModal = ({
  open,
  title,
  cancleText,
  confirmText,
  onCancle,
  onConfirm,
  backgroundChildren,
}) => {
  return (
    <>
      <Modal open={open} onClose={onCancle}>
        <ModalContent>
          <Title>{title}</Title>
          <ButtonContainer>
            {cancleText && (
              <StyledButton onClick={onCancle} $variant="secondary">
                {cancleText}
              </StyledButton>
            )}
            <StyledButton onClick={onConfirm}>{confirmText}</StyledButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
      {backgroundChildren}
    </>
  )
}
