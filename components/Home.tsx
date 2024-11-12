'use client'

import { useState, useRef } from 'react'

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-6xl aspect-video">
        <div className="relative w-full h-0 pb-[56.25%]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10225%20(1)-VTjNtttp1E7PqhOLsseOTVduQSO1Fa.mp4"
            onClick={handleVideoClick}
            onEnded={handleVideoEnded}
            playsInline
            muted
            aria-label="Vidéo personnalisée"
          >
            <track kind="captions" />
          </video>
        </div>
      </div>
    </main>
  )
}