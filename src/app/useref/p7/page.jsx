'use client'
import { useRef, useState, useEffect } from 'react'

export default function DrawingBoard() {
  const canvasRef = useRef(null)
  const isDrawing = useRef(false)
  const [brushColor, setBrushColor] = useState('#000000')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    /* Implement:  
    1. Set up canvas context  
    2. Set default stroke style  
    */
  }, [])

  const startDrawing = (e) => {

    console.log(e)
    /* Implement:  
    1. Get canvas coordinates  
    2. Begin path  
    3. Update isDrawing ref  
    */
  }

  const draw = (e) => {
    if (!isDrawing.current) return

    console.log(e)
    /* Implement:  
    1. Update path coordinates  
    2. Draw line  
    */
  }

  return (
    <div className='flex flex-col items-center w-full gap-2 mt-4'>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={() => (isDrawing.current = false)}
        onMouseLeave={() => (isDrawing.current = false)}
        style={{ border: '1px solid' }}
      />
      <input 
        type="color" 
        value={brushColor} 
        onChange={(e) => setBrushColor(e.target.value)} 
      />
    </div>
  )
}
