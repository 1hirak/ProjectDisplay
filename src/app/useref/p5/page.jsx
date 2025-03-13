"use client";
import { useRef, useState, useEffect } from "react";
function DynamicTextarea() {
  const [value, setValue] = useState("");
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
    textareaRef.current.style.height = "400px";
    textareaRef.current.style.width = `${widthRef.current}px`;
  };
  const handleTextareaBlur = () => {
    textareaRef.current.style.height = "48px";
    textareaRef.current.style.width = "50%";
  };
  return (
    <div className="flex justify-center ml-10 mr-10 mt-5">
      <textarea
        className="p-1.5 rounded-md"
        ref={textareaRef}
        value={value}
        onInput={handleInput}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        style={{ overflow: "hidden", resize: "none", border: "1px,solid,red" }}
        placeholder="Type something..."
      />
    </div>

  );
}
export default DynamicTextarea;
