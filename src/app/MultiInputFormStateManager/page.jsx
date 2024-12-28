"use client";
import { React } from "react";
import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
 

  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
      

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function MultiInputForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = ()=>{
    alert(
        `Name: ${state.name}, Email: ${state.email}, Password: ${state.password}`
      );
  }

  return ( 
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Form State
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Input Fields */}
          <div className="space-y-4">
            <Input
              placeholder="Enter Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />
            <Input
              placeholder="Enter Email"
              type="email"
              value={state.email}
              autoComplete="off"
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
            <Input
              placeholder="Enter Password"
              type="password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "password", payload: e.target.value })
              }
            />
          </div>

          {/* Submit and Reset */}
          <div className="flex justify-between mt-4">
            <Button
              onClick={() => onSubmit()}
              variant="outline"
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: "reset" });
              }}
              variant="outline"
            >
              Reset
            </Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
}
