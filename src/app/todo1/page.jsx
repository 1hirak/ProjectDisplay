"use client";

import { useReducer, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, Trash2, Plus } from "lucide-react";

const todos = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Walk the dog" },
  { id: 3, task: "Read a book" },
  { id: 4, task: "Write a blog post" },
  { id: 5, task: "Exercise for 30 minutes" },
];

const reducer = (state, action) => {
  if (action.type === "addTodo") {
    return [action.payload,...state];
  }
  if (action.type === "delete") {
    return state.filter((x) => x.id !== action.payload);
  }
  if (action.type === "deleteAll") {
    return (state = []);
  }
};

export default function todo1() {

  const [inputTodo, setInputTodo] = useState("");

  // TODO: Implement the add todo handler
  const handleAddTodo = () => {
    if (inputTodo.trim() !== "") {
      let newItem = {
        id: Date.now(),
        task: inputTodo,
      };
      dispatch({ type: "addTodo", payload: newItem });
      setInputTodo("");
    }
    setInputTodo("");
  };

  const [state, dispatch] = useReducer(reducer, todos);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Todo List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <Input
              value={inputTodo}
              onChange={(e) => {
                setInputTodo(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") { 
                     
                  handleAddTodo()
                }
              }}
              placeholder="Enter a new todo"
              className="mr-2"
            />
            <Button
              onClick={() => handleAddTodo()}
              variant="default"
              size="icon"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          

          {state.map((x) => (
            <div
              key={x.id}
              className="group flex items-center justify-between rounded-lg border p-2 text-sm transition-all hover:bg-accent mt-2"
            >
              <p className="text-sm font-medium text-foreground">{x.task}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => dispatch({ type: "delete", payload: x.id })}
                className="h-8 w-8 opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="h-4 w-4 group-hover:text-red-500" />
              </Button>
            </div>
          ))}

          
          {state.length > 0 && (
            <Button
              onClick={() => dispatch({ type: "deleteAll" })}
              variant="destructive"
              className="w-full mt-4"
            >
              Clear All
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
