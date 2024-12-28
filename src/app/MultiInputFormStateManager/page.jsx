'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MultiInputForm() {
  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Form State</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Input Fields */}
          <div className="space-y-4">
            <Input
              placeholder="Name"
              onChange={(e) => { /* Dispatch name update */ }}
            />
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => { /* Dispatch email update */ }}
            />
            <Input
              placeholder="Password"
              type="text"
              onChange={(e) => { /* Dispatch password update */ }}
            />
          </div>

          {/* Submit and Reset */}
          <div className="flex justify-between mt-4">
            <Button onClick={() => { /* Dispatch submit */ }} variant="outline">
              Submit
            </Button>
            <Button onClick={() => { /* Dispatch reset */ }} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
