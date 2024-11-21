import { styled } from "styled-components"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const Container = styled(motion.canvas)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
`

export default function StarBackground() {
  const canvasRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.parentElement.offsetWidth
    const height =
      (canvas.parentElement.scrollHeight + canvas.parentElement.offsetHeight) /
      2

    const scale = window.devicePixelRatio || 1

    canvas.width = width * scale
    canvas.height = height * scale
    canvas.style.height = `${height}px`
    ctx.scale(scale, scale)

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < height; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 1 + 0.3
        ctx.beginPath()
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fillStyle = "#ffffff99"
        ctx.fill()
      }
    }

    drawStars()

    canvas.parentElement.addEventListener(
      "scroll",
      () => {
        setScrollY(canvas.parentElement.scrollTop)
      },
      { passive: true }
    )

    return () => {
      canvas.parentElement.removeEventListener("scroll", () => {
        setScrollY(canvas.parentElement.scrollTop)
      })
    }
  }, [])
  useEffect(() => {
    canvasRef.current.style.top = `-${scrollY / 2}px`
  }, [scrollY])
  return <Container ref={canvasRef} />
}
