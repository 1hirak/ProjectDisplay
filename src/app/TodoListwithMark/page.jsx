'use client'

import { useReducer, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoApp() {
  // Add useReducer here
  
  const [task, setTask] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Task Input */}
          <div className="flex mb-4">
            <Input
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="mr-2"
            />
            <Button
              onClick={() => {
                /* Dispatch add task */
              }}
            >
              Add
            </Button>
          </div>

          {/* Task List */}
          <ul className="list-disc pl-4">
            {/* Render tasks here */}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
