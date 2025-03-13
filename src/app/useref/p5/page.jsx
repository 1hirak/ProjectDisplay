'use client'
import { useRef, useState } from 'react'

function DynamicTextarea() {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  const handleInput = (e) => {
    setValue(e.target.value)
    
    /* Implement:  
    1. Measure the textarea's scrollHeight  
    2. Update the textarea's height to match its content  
    */
  }

  console.log(textareaRef.current);
  console.log(Window.scrollHeight)
  

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={value}
        onInput={handleInput}
        style={{ overflow: 'hidden', resize: 'none' }}
        placeholder="Type something..."
      />
    </div>
  )
}

export default DynamicTextarea