'use client'
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    const interval = ()=>setInterval(()=>setSeconds(x=>x+1),500)
    interval()
    return () => {
      clearInterval(interval)
    };
  }, []); 

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;
