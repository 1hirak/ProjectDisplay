'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThemeToggleApp() {

  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Theme Toggle</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Theme Text */}
          <div className="text-center text-xl font-semibold">
            Current Theme: {/* Add theme state here */}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="bg-blue-50 hover:bg-blue-100"
              // Add onClick logic here
            >
              Toggle Theme
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
