"use client";
import { useRef, useEffect } from "react";

function AutoFocusInput() {const inputRef = useRef(null); // Step 1: Create a ref

    useEffect(() => {
      // Step 3: Access the DOM element
      inputRef.current.focus(); // Focus the input
      console.log(inputRef.current); // Logs the actual <input> DOM node
    }, []);
  
    return (
      // Step 2: Attach the ref to the input
      <input ref={inputRef} type="text" placeholder="Enter text" />
    );
}

export default AutoFocusInput;
