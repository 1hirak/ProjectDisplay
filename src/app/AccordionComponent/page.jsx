'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  { id: 1, title: "Section 1", content: "Content for section 1" },
  { id: 2, title: "Section 2", content: "Content for section 2" },
  { id: 3, title: "Section 3", content: "Content for section 3" },
];

const initialState = ""

const reducer = (state,action) =>{
    return state = {
        id : action.payload.id,
        content: action.payload.content}
}

export default function Accordion() {
  // Add useReducer here
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Accordion</CardTitle>
        </CardHeader>
        <CardContent>
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <Button 
                variant="outline" 
                onClick={() => { dispatch({
                    payload:{id : section.id,
                        content: section.content}
                }) }}
                className="w-full"
              >
                {section.title}
              </Button>
              <div className="p-2 text-gray-600">
                {(section.id===state.id)?state.content:""}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
