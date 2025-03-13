"use client";
import { useRef, useState, useEffect } from "react";
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target != dropdownRef.current) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Dropdown Content
        </div>
      )}
    </div>
  );
}
export default Dropdown;
