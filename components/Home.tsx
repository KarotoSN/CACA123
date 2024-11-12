'use client'

import { useState, useRef } from 'react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-6xl aspect-video">
        <div className="relative w-full h-0 pb-[56.25%]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Revolver%20Green%20Screen%20Gun%20turning%201-AINMKWdERuxF9bMoKyFPj6hUqpBvfb.mp4"
            onClick={handleVideoClick}
            loop
            playsInline
            muted
            aria-label="Vidéo d'un revolver tournant sur fond vert"
          >
            <track kind="captions" />
          </video>
        </div>
      </div>
    </main>
  )
}