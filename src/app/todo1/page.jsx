
'use client'

import { useReducer, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

// TODO: Implement the reducer function
const reducer = (state, action) => {
    // Implement logic for:
    // 1. Adding a new todo
    // 2. Deleting a todo
    // 3. Clearing all todos
};

export default function todo1() {
    // TODO: Set up useReducer with the reducer and initial state
    // Initial state should be an empty array of todos

    // TODO: Create a state for the input field
    const [inputTodo, setInputTodo] = useState("");

    // TODO: Implement the add todo handler
    const handleAddTodo = () => {
        // Should dispatch an action to add a new todo
        // Should clear the input field after adding
    };

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
                            // TODO: Add input field logic
                            placeholder="Enter a new todo"
                            className="mr-2"
                        />
                        <Button 
                            // TODO: Add button click handler
                            variant="default"
                            size="icon"
                        >
                            <Plus className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* TODO: Render the list of todos */}
                    <div className="space-y-2">
                        {/* Map through todos and render each todo */}
                        {/* Add a delete button for each todo */}
                    </div>

                    {/* TODO: Add a clear all todos button */}
                    {todos.length > 0 && (
                        <Button 
                            // TODO: Add clear all handler
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