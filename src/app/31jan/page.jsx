"use client";

import { useState, useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoApp() {
  const initailtate = [];

  const reducer = (state, action) => {
    if (action.type === "add") {
      let el = {
        id: Date.now(),
        task: action.value,
      };
      return [...state, el];
    }
    if (action.type === "reset") {
      return (state = []);
    }
    return state;
  };

  const [value, setvalue] = useState("");

  const [state, dispatch] = useReducer(reducer, initailtate);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            To-Do App
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              value={value}
              onChange={(e) => {
                setvalue(e.target.value);
              }}
              type="text"
            />
            {/* Display List */}
            {state &&
              state.map((x) => (
                <div key={x.id}>
                  <ul className="list-disc pl-5">{x.task}</ul>
                </div>
              ))}

            {/* Add and Reset Buttons */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="bg-green-50 hover:bg-green-100"
                onClick={() => {
                  dispatch({ type: "add", value });
                  setvalue("");
                }}
              >
                Add Task
              </Button>
              <Button
                variant="outline"
                className="bg-gray-50 hover:bg-gray-100"
                onClick={() => dispatch({ type: "reset" })}
              >
                Reset List
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
