import { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // After the component mounts, focus the input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef} // 🔗 Connects the ref to the input
        type="text"
        placeholder="This input auto-focuses"
      />
    </div>
  );
}