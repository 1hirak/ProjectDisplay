"use client";

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CounterUndoRedo() {
  // Add useReducer here
  const initialstate = {
    history: [0],
    currindex: 0,
    val: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add": {
        let newval = state.history[0] + 1;
        let newhistory = [newval, ...state.history];
        return {
          history: newhistory,
          val: newval,
          currindex: 0,
        };
      }
      case "minus": {
        let newval = state.history[0] - 1;
        let newhistory = [newval, ...state.history];
        return {
          history: newhistory,
          val: newval,
          currindex: 0,
        };
      }

      case "undo": {
        let newindex = state.currindex + 1;
        let newval = state.history[newindex];
        let newhistory = state.history;
        return {
          history: newhistory,
          currindex: newindex,
          val: newval,
        };
      }
      case "redo": {
        let newindex = state.currindex - 1;
        let newval = state.history[newindex];
        let newhistory = state.history;
        return {
          history: newhistory,
          currindex: newindex,
          val: newval,
        };
      }

      case "reset": {
        return initialstate;
      }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);

  const showUndo = () => {
    return state.currindex <= state.history.length - 2;
  };

  const showRedo = () => {
    return state.currindex !== 0;
  };

  const showReset = () => {
    let val = state.val + state.currindex;
    return val === 0;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-80 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Counter with Undo/Redo
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl font-bold mb-4">{state.val}</div>
          <div className="flex justify-between">
            <Button
              onClick={() => {
                dispatch({ type: "add" });
              }}
            >
              +1
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: "minus" });
              }}
            >
              -1
            </Button>
          </div>
          <div className="flex justify-between mt-4">
            {showUndo() ? (
              <Button
                onClick={() => {
                  dispatch({ type: "undo" });
                }}
                variant="outline"
              >
                Undo
              </Button>
            ) : (
              <Button
                disabled
                onClick={() => {
                  dispatch({ type: "undo" });
                }}
                variant="outline"
              >
                Undo
              </Button>
            )}

            {showRedo() ? (
              <Button
                onClick={() => {
                  dispatch({ type: "redo" });
                }}
                variant="outline"
              >
                Redo
              </Button>
            ) : (
              <Button
                disabled
                onClick={() => {
                  dispatch({ type: "redo" });
                }}
                variant="outline"
              >
                Redo
              </Button>
            )}

            {showReset() ? (
              <Button
                disabled
                onClick={() => {
                  dispatch({ type: "reset" });
                }}
                variant="outline"
              >
                Reset
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "reset" });
                }}
                variant="outline"
              >
                Reset
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
