"use client";
import { useRef, useEffect } from "react";

function FocusManager() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const handleClick = () => {
    secondInputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <input type="text" placeholder="First Input" ref={firstInputRef} />
      <input type="text" placeholder="Second Input" ref={secondInputRef} />
      <button onClick={handleClick}>Focus Second Input</button>
    </div>
  );
}

export default FocusManager;
