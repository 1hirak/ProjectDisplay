"use client";

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tabs = ["State", "useReducer", "Ref"];

const data = {
  default: "Click on tabs to reveal",
  useState:
    "The useState Hook is the fundamental state management tool in React's functional components. It provides a simple yet powerful way to add state to your components without using class components. When you call useState, it returns an array with two elements: the current state value and a function to update it. This pattern, known as array destructuring, makes it easy to use multiple state variables in a single component. For example, const [count, setCount] = useState(0) creates a count variable initialized to 0 and a setCount function to update it. The state update function can either directly set a new value or accept a callback function that receives the previous state as an argument, making it perfect for state updates that depend on the previous value.",

  useReducer:
    "The useReducer Hook provides a more sophisticated approach to state management, particularly useful when dealing with complex state logic or when state updates need to follow specific patterns. It's inspired by Redux's pattern and takes a reducer function along with an initial state as arguments. The reducer function receives the current state and an action object, then returns the new state based on that action. This makes it excellent for managing state that has multiple sub-values or when different actions need to trigger similar state updates. For instance, in a form with multiple fields, useReducer can centralize all the update logic in one place, making the code more maintainable and easier to debug. The dispatch function it returns can be passed down to child components, allowing them to trigger state changes without prop drilling.",

  useRef:
    "The useRef Hook serves as a way to persist values across renders without causing re-renders when the value changes. Unlike useState, updating a ref doesn't trigger a re-render, making it perfect for storing values that need to persist but don't affect the visual output. Common use cases include storing references to DOM elements, keeping track of previous values, managing timers and intervals, or storing any mutable value that needs to survive re-renders. For example, you might use useRef to store a reference to an input element (const inputRef = useRef(null)) and then access it directly in event handlers or effects. The .current property of a ref is mutable and can be updated at any time, which makes it particularly useful for imperative operations or when you need to interact with DOM APIs directly.",
};

const initialState= data.default;


const reducer = (state,action)=>{
        switch (action.type) {
            case "State":
                return state= data.useState;
            case "useReducer":
                return state= data.useReducer;
            case "Ref":
                return state= data.useRef;
        
            default:
                break;
        }
}

export default function TabSwitcher() {
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Tab Switcher
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tab Buttons */}
          <div className="flex justify-around mb-4">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => {
                  dispatch({
                    type:tab
                  })
                }}
                variant="outline"
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Tab Content */}

          <div className=" text-lg  text-justify">
            {/* Display current tab content here */}
            {state}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
