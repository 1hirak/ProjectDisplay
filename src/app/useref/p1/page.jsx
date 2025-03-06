"use client";
import { useState, useRef, useEffect } from "react";
function AutoFocusInput() {
  const inputRef = useRef(0); 
    const [first, setfirst] = useState(true)
  const handleClick = () => { 
    inputRef.current=inputRef.current+1;
    setfirst(x=>!x)
 }
  return (
    <>
      {/* <input ref={inputRef} type="text" placeholder="Enter text" /> */}
      <div>{inputRef.current}</div>
      <button
        onClick={()=>handleClick()}>
        click
      </button>
    </>
  );
}
export default AutoFocusInput;
