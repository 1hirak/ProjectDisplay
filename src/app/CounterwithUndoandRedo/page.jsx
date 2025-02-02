'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CounterUndoRedo() {
  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-80 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Counter with Undo/Redo
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl font-bold mb-4">
            {/* Display current count */}
          </div>
          <div className="flex justify-between">
            <Button onClick={() => { /* Dispatch increment */ }}>+1</Button>
            <Button onClick={() => { /* Dispatch decrement */ }}>-1</Button>
          </div>
          <div className="flex justify-between mt-4">
            <Button onClick={() => { /* Dispatch undo */ }} variant="outline">
              Undo
            </Button>
            <Button onClick={() => { /* Dispatch redo */ }} variant="outline">
              Redo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
