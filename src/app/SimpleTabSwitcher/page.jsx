'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tabs = ["Home", "Profile", "Settings"];




export default function TabSwitcher() {
  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Tab Switcher</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tab Buttons */}
          <div className="flex justify-around mb-4">
            {tabs.map((tab) => (
              <Button 
                key={tab} 
                onClick={() => { /* Dispatch switch tab */ }} 
                variant="outline"
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Tab Content */}

          <div className="text-center text-lg font-semibold">
            {/* Display current tab content here */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
