"use client";
import { useRef, useState, useEffect } from "react";
function DynamicTextarea() {
  const [value, setValue] = useState("");
  const [focusArea, setfocusArea] = useState("default")
  const textareaRef = useRef(null);
  const widthRef = useRef(null);
  useEffect(() => {
    widthRef.current = window.innerWidth;
    console.log(widthRef.current);
  }, []);
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleTextareaFocus = () => {
    textareaRef.current.style.border= "3px solid red";
    textareaRef.current.style.height = "400px";
    textareaRef.current.style.width = `${widthRef.current*.9}px`;
    textareaRef.current.style.padding = "20px";
    setfocusArea(`focusing`)
  };
  const handleTextareaBlur = () => {
    textareaRef.current.style.height = "48px";
    textareaRef.current.style.width = "50%";
    textareaRef.current.style.padding = "6px";
    textareaRef.current.style.border= "1px solid grey";
    setfocusArea("focus removed")
  };
  return ( <div className="ml-10 mr-10 mt-5" >
    <div className="flex flex-col items-center gap-4" >
      <div>{focusArea}</div>
      <textarea
        className="p-1.5 rounded-md"
        ref={textareaRef}
        value={value}
        onInput={handleInput}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        style={{ overflow: "hidden", resize: "none", border: "1px solid grey",width:"50%" }}
        placeholder="Type something..."
      />
    </div></div>
  );
}
export default DynamicTextarea;
