'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, RefreshCw } from "lucide-react";

export default function CounterApp() {


    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Simple Counter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            {/* Counter Display */}
            <div
              className="text-6xl font-bold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-500 to-purple-500"
            >
              {count}
            </div>

            {/* Button Group */}
            <div className="flex space-x-4">
              {/* Decrement Button */}
              <Button
                onClick={decrement}
                variant="outline"
                size="lg"
                className="bg-red-50 hover:bg-red-100"
              >
                <Minus className="h-6 w-6 text-red-500" />
              </Button>

              {/* Reset Button */}
              <Button
                onClick={reset}
                variant="outline"
                size="lg"
                className="bg-gray-50 hover:bg-gray-100"
              >
                <RefreshCw className="h-6 w-6 text-gray-500" />
              </Button>

              {/* Increment Button */}
              <Button
                onClick={increment}
                variant="outline"
                size="lg"
                className="bg-green-50 hover:bg-green-100"
              >
                <Plus className="h-6 w-6 text-green-500" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-center text-sm text-gray-500">
              Click + or - to change the value
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
