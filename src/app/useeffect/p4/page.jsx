"use client";

import React, { useState, useEffect } from "react";

function WindowResizeListener() {
  const [width, setWidth] = useState(0);



  useEffect(() => {
    setWidth(window.innerWidth)
    const handleresize = () => 
      setWidth(window.innerWidth);
    

    window.addEventListener("resize", handleresize);

    return ()=> window.removeEventListener("resize", handleresize);
  }, []); // Runs once on mount

  return (
    <div>
      <h1>Window Width: {width}px</h1>
    </div>
  );
}

export default WindowResizeListener;
