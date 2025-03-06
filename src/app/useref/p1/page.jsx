"use client";
import { useState, useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(0); // Step 1: Create a ref
    const [first, setfirst] = useState(true)
//   useEffect(() => {
//     // Step 3: Access the DOM element
//     // inputRef.current.focus(); // Focus the input
//     console.log(inputRef.current); // Logs the actual <input> DOM node
//   }, []);

  const handleClick = () => { 
    
    
    inputRef.current=inputRef.current+1;
    console.log("clicked"+inputRef.current);
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
