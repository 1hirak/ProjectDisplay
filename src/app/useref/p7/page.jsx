"use client";
import { useState,useRef, useEffect } from "react";

export default function DrawingBoard() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [brushColor, setBrushColor] = useState("#000000");
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvasRef.current.getContext("2d");
    ctxRef.current = ctx;
    ctx.beginPath();
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = 3;
  }, [brushColor]);

  const getCoordinates = (e) => {
    let val = canvasRef.current.getBoundingClientRect();
    return [e.clientX - val.x, e.clientY - val.y];
  };

  const startDrawing = (e) => {
    isDrawing.current = true;
    const [x, y] = getCoordinates(e);
    ctxRef.current.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;

    const [p, q] = getCoordinates(e);
    
    ctxRef.current.lineTo(p, q);
    ctxRef.current.stroke();
  };

  return (
    <div className="flex flex-col items-center w-full gap-2 mt-4">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={() => (isDrawing.current = false)}
        onMouseLeave={() => (isDrawing.current = false)}
        style={{ border: "1px solid" }}
      />
      <input
        type="color"
        value={brushColor}
        onChange={(e) => setBrushColor(e.target.value)}
      />
    </div>
  );
}
