'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-80 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Theme Switcher
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-lg font-semibold mb-4">
            {/* Display current theme here */}
          </div>
          <Button
            onClick={() => {
              /* Dispatch toggle theme action */
            }}
          >
            Toggle Theme
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
