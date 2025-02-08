'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Square,Check } from 'lucide-react';


const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const flipState= (x) => { return !x }

export default function FavoriteItems() {
    const initialstate = [false,false,false]
    const reducer = (state,action)=>{
        if (action.type==="toggle") {
            return state.map((x,i)=>(i===action.payload-1)?flipState(x):x)
        }
        return state 

    }
    const [state, dispatch] = useReducer(reducer,initialstate)

    console.log(state);
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Favorite Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <Button
                  onClick={() => {
                    dispatch({type:"toggle",payload:item.id})
                  }}
                  variant="outline"
                >
                 {state[item.id-1]&& <Check />}
                 {!state[item.id-1]&& <Square />}
                  {/* Show "Favorite" or "Unfavorite" based on state */}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
