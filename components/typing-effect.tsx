"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypingEffect({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
  className = "",
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          } else {
            setCurrentText((prev) => prev.slice(0, -1))
          }
        } else {
          if (currentText === currentWord) {
            setIsPaused(true)
          } else {
            setCurrentText((prev) => currentWord.slice(0, prev.length + 1))
          }
        }
      },
      isPaused ? pauseTime : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <div className={`typing-container ${className}`}>
      <span className="typing-text">{currentText}</span>
      <span className="typing-cursor">|</span>
    </div>
  )
}
