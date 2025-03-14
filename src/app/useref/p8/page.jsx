'use client'
import { useRef, useState, useEffect } from 'react'

export default function VideoPlayer() {
  const videoRef = useRef(null)
  const progressRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const intervalRef = useRef()

  const updateProgress = () => {
    if (!videoRef.current || !progressRef.current) return
    
    /* Implement:  
    1. Calculate playback percentage  
    2. Update progress bar width  
    */
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    
    /* Implement:  
    1. Toggle video play/pause  
    2. Start/clear progress interval  
    3. Update isPlaying state  
    */
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current) // Cleanup
  }, [])

  return (
    <div>
      <video
        ref={videoRef}
        width="600"
        src="/sample-video.mp4" // Replace with actual video URL
      />
      <div style={{ height: '4px', background: '#ddd' }}>
        <div 
          ref={progressRef} 
          style={{ height: '100%', background: '#2196F3', width: '0%' }}
        />
      </div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}