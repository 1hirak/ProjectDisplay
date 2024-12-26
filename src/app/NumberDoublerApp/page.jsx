"use client";

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NumberDoublerApp() {
  const initialState = "";
  const reducer = (state, action) => {
    switch (action.type) {
      case "double":
        return !state ? 1 : state * 2;
        break;
      case "double":
        return (state = initialState);
        break;
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          
          <CardTitle className="text-center text-2xl font-bold">
            Number Doubler
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Number Display */}
          <div className="text-6xl font-bold text-center">{state}</div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="outline"
              className="bg-green-50 hover:bg-green-100"
              onClick={() => dispatch({ type: "double" })}
            >
              Double
            </Button>
            <Button
              variant="outline"
              className="bg-gray-50 hover:bg-gray-100"
              onClick={() => dispatch({ type: "reset" })}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
