"use client";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
function RenderCounter() {
  const [dummyState, setDummyState] = useState(false);
  const renderCountRef = useRef(0);
  useEffect(() => {
    renderCountRef.current += 1;
  });
  const resetValue = () => {
    renderCountRef.current = 0;
    triggerRerender();
  };
  const triggerRerender = () => {
    setDummyState((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center mt-4">
      <p>Render Count: {renderCountRef.current}</p>
      <Button className="mt-4" onClick={triggerRerender}>
        Re-render
      </Button>
      <Button className="mt-4" onClick={resetValue}>
        Reset
      </Button>
    </div>
  );
}
export default RenderCounter;
