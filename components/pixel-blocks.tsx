"use client"

import { useEffect, useState } from "react"

interface Block {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export default function PixelBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const generateBlocks = () => {
      const newBlocks: Block[] = []
      for (let i = 0; i < 20; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 12 + 8,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 1.5 + 0.3,
        })
      }
      setBlocks(newBlocks)
    }

    generateBlocks()
    window.addEventListener("resize", generateBlocks)

    const animateBlocks = () => {
      setBlocks((prevBlocks) =>
        prevBlocks.map((block) => ({
          ...block,
          y: block.y <= -block.size ? window.innerHeight + block.size : block.y - block.speed,
        })),
      )
    }

    const interval = setInterval(animateBlocks, 50)

    return () => {
      window.removeEventListener("resize", generateBlocks)
      clearInterval(interval)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute bg-black"
          style={{
            left: `${block.x}px`,
            top: `${block.y}px`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            opacity: block.opacity,
          }}
        />
      ))}
    </div>
  )
}
