import React, { useEffect, useRef } from "react"
import seedrandom from "seedrandom"

const distance = (star1, star2) => {
  return Math.sqrt(
    Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
  )
}

const minimumSpanningTree = (stars) => {
  const edges = []
  const visited = new Set()
  const n = stars.length

  const start = 0
  visited.add(start)

  while (visited.size < n) {
    let minEdge = null
    let minDist = Infinity
    let minIndex = -1

    for (let i = 0; i < n; i++) {
      if (visited.has(i)) continue

      for (let j of visited) {
        const dist = distance(stars[i], stars[j])
        if (dist < minDist) {
          minDist = dist
          minEdge = [j, i]
          minIndex = i
        }
      }
    }

    visited.add(minIndex)
    edges.push(minEdge)
  }

  return edges
}

const drawStar = (ctx, x, y, radius, points) => {
  const step = Math.PI / points
  ctx.beginPath()
  for (let i = 0; i < 2 * points; i++) {
    const angle = i * step
    const radiusModifier = i % 2 === 0 ? radius : radius / 2
    const posX = x + radiusModifier * Math.cos(angle)
    const posY = y + radiusModifier * Math.sin(angle)
    if (i === 0) {
      ctx.moveTo(posX, posY)
    } else {
      ctx.lineTo(posX, posY)
    }
  }
  ctx.closePath()
  ctx.fill()
}

export default function Constellation({ starCount, id }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const width = canvas.parentElement.offsetWidth
    const height = (width * 2) / 5
    const padding = 30

    const scale = window.devicePixelRatio || 1

    canvas.width = width * scale
    canvas.height = height * scale

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    ctx.scale(scale, scale)

    const stars = [{ x: 30, y: height / 2, size: 15 }]

    const isOverlap = (x, y, size, stars) => {
      for (let star of stars) {
        const dist = distance({ x, y }, star)
        if (dist < size + star.size + 30) {
          return true
        }
      }
      return false
    }

    const drawStars = () => {
      const random = seedrandom(id)
      ctx.clearRect(0, 0, width, height)

      for (let i = 1; i <= starCount; i++) {
        const starSize = Math.floor(random() * 3 + 3)

        let x, y
        for (let j = 0; j < 10; j++) {
          x = random() * (width - 2 * padding) + padding
          y = random() * (height - 2 * padding) + padding
          if (!isOverlap(x, y, starSize, stars)) {
            break
          }
        }

        stars.push({ x, y, size: starSize })
      }

      const connections = minimumSpanningTree(stars)

      ctx.beginPath()
      connections.forEach(([start, end]) => {
        ctx.moveTo(stars[start].x, stars[start].y)
        ctx.lineTo(stars[end].x, stars[end].y)
      })
      ctx.strokeStyle = "#ecfffe"
      ctx.stroke()
      ctx.closePath()

      stars.forEach(({ x, y, size }, index) => {
        ctx.shadowColor = "#cbfffc"
        ctx.shadowBlur = 40
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.beginPath()
        if (index === 0) {
          ctx.fillStyle = "#87CDC8"
          drawStar(ctx, x, y, size, 7)
        } else {
          const gradient = ctx.createLinearGradient(
            x - size / 2,
            y - size / 2,
            x + size / 2,
            y + size / 2
          )
          gradient.addColorStop(0, "#87bfcd")
          gradient.addColorStop(0.5, "#87bfcd")
          gradient.addColorStop(1, "#DEDFFF")
          ctx.arc(x, y, size, 0, 2 * Math.PI)
          ctx.fillStyle = gradient
          ctx.fill()
        }
        ctx.closePath()
      })
    }

    drawStars()
  }, [starCount, id])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "auto" }} />
}
