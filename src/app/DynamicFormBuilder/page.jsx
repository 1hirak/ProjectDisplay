'use client'

import { useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function DynamicFormBuilder() {
  // Add useReducer here
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[500px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Dynamic Form</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Render dynamic input fields */}
          <div className="space-y-4">
            {/* Loop over dynamic fields */}
            <div className="flex items-center gap-2">
              <Input placeholder="Field Name" />
              <Button variant="outline" size="sm" onClick={() => {/* Dispatch remove field */}}>
                Remove
              </Button>
            </div>
            <Button
              onClick={() => {
                /* Dispatch add field */
              }}
            >
              Add Field
            </Button>
          </div>
          <Button
            className="mt-4"
            onClick={() => {
              /* Dispatch submit */
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
