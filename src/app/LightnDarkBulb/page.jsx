'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LightBulbApp() {

  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Light Bulb</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Bulb State */}
          <div
            className={`h-20 w-20 rounded-full mx-auto ${
              /* Add dynamic state here */ ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="outline"
              className="bg-green-50 hover:bg-green-100"
              // Add onClick logic here
            >
              Turn On
            </Button>
            <Button
              variant="outline"
              className="bg-red-50 hover:bg-red-100"
              // Add onClick logic here
            >
              Turn Off
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
