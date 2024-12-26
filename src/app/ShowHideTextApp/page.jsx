'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function page() {

    const text = {
        show:{
            name: " Hide Text",
            content: " React is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components, making it easier to manage and update the application. React uses a virtual DOM to optimize updates, which means it only changes the parts of the webpage that need to be updated, making the application faster and more efficient. It also supports server-side rendering, which can improve the performance and SEO of a website. Overall, React is a powerful tool for developers looking to build dynamic and interactive web applications."
        },
        hide: {
            name: " Show Text",
            content: " "
        }
    }

    const reducer = (state )=>{
        if (state.content.trim()==0)
        {
           return  state= text.show
        }
            return state= text.hide
        
    }
    
    const initialState = text.hide 
    

    

  // Add useReducer here

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Show/Hide Text</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Text Display */}
          <div className="text-center text-lg font-semibold ">
            {state.content}
            {/* Add logic to show/hide */}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="bg-blue-50 hover:bg-blue-100"
              onClick= {()=>dispatch()}
            >
              {state.name}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
