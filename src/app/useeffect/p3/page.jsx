'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"


function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title=`count : ${count}`
  }, [count]); 



  return (
    <div>
      <h1>Count: {count}</h1>
      <Button variant="outline" onClick={() => setCount(x=>x + 1)}>Increment</Button>
    </div>
  );
}

export default DocumentTitleUpdater;
