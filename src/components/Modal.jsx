import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

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
