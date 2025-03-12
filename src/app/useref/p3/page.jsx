'use client'
import React, { useRef } from 'react';

function StyleChanger() {
  const paraRef = useRef(null);

  const changeStyle = () => {
    // Modify the paragraph's style using paraRef.current
    if (paraRef.current) {
      paraRef.current.style.backgroundColor = 'yellow';
      paraRef.current.style.fontSize = '1.5rem';
    }
  };

  return (
    <div>
      <p ref={paraRef}>Watch my style change!</p>
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
}

export default StyleChanger;
