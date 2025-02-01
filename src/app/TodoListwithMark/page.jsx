"use client";

import { useReducer, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PencilLine, Trash2 } from "lucide-react";

export default function TodoApp() {
  const initialState = [
    {
      id: 1,
      name: "Conduct keyword research for the homepage",
      checked: true,
    },
    {
      id: 2,
      name: " for the homepage",
      checked: false,
    },
  ];

  const changeChacked = (x) => {
    return !x;
  };
  const [task, setTask] = useState("");
  const [editdata, seteditdata] = useState({});
  const [isUpdating, setisUpdating] = useState(Boolean(0));

  const reducer = (state, action) => {
    if (action.type == "click") {
      return state.map((x) =>
        x.id === action.id ? { ...x, checked: changeChacked(x.checked) } : x
      );
    }
    if (action.type === "submit") {
      if (action.task.trim().length == 0) {
        return state;
      } else {
        return [
          ...state,
          {
            id: Date.now(),
            name: action.task,
            checked: false,
          },
        ];
      }
    }

    if (action.type === "delete") {
      return state.filter((x) => x.id !== action.id);
    }

    if (action.type === "deleteAll") {
      return [];
    }

    if (action.type === "edit") {
      if (action.payload.name.trim().length == 0) {
        return state;
      } else {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, name: action.payload.name } : x
        );
      }
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-128 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Todo List
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Task Input */}
          <div className="flex mb-4">
            <Input
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="mr-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({ type: "submit", task });
                  setTask("");
                }
              }}
            />
            {!isUpdating && (
              <Button
                onClick={() => {
                  dispatch({ type: "submit", task });
                  setTask("");
                }}
              >
                Add
              </Button>
            )}
            {isUpdating && (
              <Button
                className="ml-1"
                onClick={() => {
                  dispatch({
                    type: "edit",
                    payload: { id: editdata.id, name: task },
                  });
                  seteditdata({});
                  setTask("");
                  setisUpdating(Boolean(0));
                }}
              >
                Update
              </Button>
            )}
          </div>

          {/* Task List */}
          {state.map((x) => (
            <div
              key={x.id}
              className="pb-2 flex items-center justify-between group hover:bg-gray-50 rounded-lg p-2 transition-colors"
            >
              <div className="flex items-center">
                <Checkbox
                  checked={x.checked}
                  onCheckedChange={() => dispatch({ type: "click", id: x.id })}
                  className={`w-4 h-4 `}
                />

                <span
                  className={`ml-3 ${
                    x.checked ? "line-through text-gray-500" : ""
                  }`}
                >
                  {x.name}
                </span>
              </div>
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                <button
                  onClick={() => {
                    setisUpdating(Boolean(1));
                    seteditdata(x);
                    setTask(x.name);
                  }}
                >
                  <PencilLine color="#000000" strokeWidth={0.9} />{" "}
                </button>

                <button
                  className=" ml-2"
                  onClick={() => dispatch({ type: "delete", id: x.id })}
                >
                  <Trash2 color="#f74b5c" strokeWidth={1} />
                </button>
              </div>
            </div>
          ))}
          <Button
            onClick={() => dispatch({ type: "deleteAll" })}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 flex items-center justify-center gap-2"
            variant="destructive"
          >
            <Trash2 size={16} />
            Delete All Tasks
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
