import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const Background = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: end;
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
  width: 100%;
  height: fit-content;
  overflow: hidden;
  padding: 25px 18px;
  background: #000000cc;
  border-radius: 30px 30px 0px 0px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px -3px 13.7px 0px rgba(138, 250, 241, 0.4);
  backdrop-filter: blur(50px);
`

export default function Drawer({ children, open, onClose }) {
  const [isOpen, setIsOpen] = useState(open)
  const close = (e) => {
    console.log(e)
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
            initial={{ height: 0, padding: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, padding: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </Container>
        </Background>
      )}
    </AnimatePresence>
  )
}
