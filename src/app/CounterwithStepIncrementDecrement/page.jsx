"use client";
import { useReducer, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function CounterApp() {
  const initialState = "";
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state === "" ? step : state + step;
      case "decrement":
        return state === "" ? step : state - step;
      case "reset":
        return "";
      default:
        break;
    }
  };
  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Counter with Step
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Counter Display */}
          <div className="text-6xl text-center font-bold mb-4">
            {/* Display count here */}
            {state}
          </div>
          {/* Step Input */}
          <div className="flex justify-center items-center mb-4">
            <span className="mr-2">Step:</span>
            <Input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-20 text-center"
            />
            <Button
                className= "ml-2"
              onClick={() => {
                setStep(0);
              }}
              variant="outline"
            >
              Reset
            </Button>
          </div>
          {/* Buttons */}
          <div className="flex justify-between">
            <Button
              onClick={() => {
                dispatch({ type: "increment" });
              }}
              variant="outline"
            >
              + Step
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: "decrement" });
              }}
              variant="outline"
            >
              - Step
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: "reset" });
              }}
              variant="outline"
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
