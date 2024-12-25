'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThemeToggleApp() {
    const theme = { 
        dark:"flex justify-center items-center min-h-screen bg-gray-500",
        light : "flex justify-center items-center min-h-screen bg-dark-100",
    }
    const initialstate = { 
        theme: theme.light,
        name :"light",   
    }

    const reducer = (state,action)=>{
        if (action.type==="light") {
            return state= {
                theme: theme.dark,
                name :"dark",
            }
        }
        else {
            return state= {
                theme: theme.light,
                name :"light",
        }

    }}

  // Add useReducer here
  const [state, dispatch] = useReducer(reducer ,initialstate)

  return (
    <div className={state.theme}>
        {
            console.log(state)
            
        }
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Theme Toggle</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Theme Text */}
          <div className="text-center text-xl font-semibold">
            Current Theme: {state.name}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="bg-blue-50 hover:bg-blue-100"
              onClick= { ()=> dispatch({type: state.name})}
            >
              Toggle Theme
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
