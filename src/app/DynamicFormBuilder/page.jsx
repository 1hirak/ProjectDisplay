"use client";

import { useState, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DynamicFormBuilder() {
  const fields = [
    { id: "text", label: "Text", htmlFor: "text", type: "text", name: "text" },
    {
      id: "password",
      label: "Password",
      htmlFor: "password",
      type: "password",
      name: "password",
    },
    {
      id: "email",
      label: "Email",
      htmlFor: "email",
      type: "email",
      name: "email",
    },
    {
      id: "search",
      label: "Search",
      htmlFor: "search",
      type: "search",
      name: "search",
    },
    {
      id: "tel",
      label: "Telephone",
      htmlFor: "tel",
      type: "tel",
      name: "telephone",
    },
    { id: "url", label: "URL", htmlFor: "url", type: "url", name: "url" },
    {
      id: "number",
      label: "Number",
      htmlFor: "number",
      type: "number",
      name: "number",
    },
    {
      id: "range",
      label: "Range",
      htmlFor: "range",
      type: "range",
      name: "range",
    },
    { id: "date", label: "Date", htmlFor: "date", type: "date", name: "date" },
    { id: "time", label: "Time", htmlFor: "time", type: "time", name: "time" },
    {
      id: "datetime-local",
      label: "DateTime",
      htmlFor: "datetime-local",
      type: "datetime-local",
      name: "dateTime",
    },
    {
      id: "month",
      label: "Month",
      htmlFor: "month",
      type: "month",
      name: "month",
    },
    { id: "week", label: "Week", htmlFor: "week", type: "week", name: "week" },
    { id: "file", label: "File", htmlFor: "file", type: "file", name: "file" },
    {
      id: "image",
      label: "Image",
      htmlFor: "image",
      type: "image",
      name: "image",
    },
    {
      id: "color",
      label: "Color",
      htmlFor: "color",
      type: "color",
      name: "color",
    },
    {
      id: "checkbox",
      label: "Checkbox",
      htmlFor: "checkbox",
      type: "checkbox",
      name: "checkbox",
    },
    {
      id: "radio",
      label: "Radio",
      htmlFor: "radio",
      type: "radio",
      name: "radio",
    },
    {
      id: "hidden",
      label: "Hidden",
      htmlFor: "hidden",
      type: "hidden",
      name: "hidden",
    },
  ];
  const [fieldValue, setfielsdsValue] = useState("");
  const [labelInput, setlabelInput] = useState("");
  const [placeholderInput, setplaceholderInput] = useState("");

  const initialstate = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "add_field": {
        let newvalue = Object.assign(fieldValue, labelInput, placeholderInput);

        return state ? [...state, newvalue] : [newvalue];
      }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[500px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Dynamic Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Render dynamic input fields */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {fields.map((x) => (
                <button
                  key={x.id}
                  onClick={() => setfielsdsValue(x)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-blue-100 hover:bg-blue-200 hover:scale-105"
                >
                  {x.label}
                </button>
              ))}
            </div>
            {/* Loop over dynamic fields */}
            <div className="flex items-center gap-2">
              <Input
                placeholder="Label"
                onChange={(e) => setlabelInput({ userlabel: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Placeholder"
                onChange={(e) =>
                  setplaceholderInput({ userplacerholder: e.target.value })
                }
              />
            </div>
            {console.log(state)}
            <Button
              className="w-full"
              onClick={() => {
                dispatch({
                  type: "add_field",
                });
              }}
            >
              Add Field
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Input placeholder="Form Name" />
            <Button
              onClick={() => {
                /* Dispatch submit */
              }}
            >
              Create Form
            </Button>
          </div>
          <form onSubmit={console.log("onsubmit")} className="space-y-4">
            {
              state.map(x => {return(
                <div key={x.id}>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={x.htmlFor}>{x.label}</Label>
                    <Input
                      type={x.type}
                      id={x.id}
                      name={x.name}
                      placeholder={x.label}
                      //   value={formData.email}
                      //   onChange={handleChange}
                    />
                  </div>
                  
                </div>)}
              )}
              {state&& <Button type="submit" className="w-full">
                    Submit
                  </Button>}
          </form>

          {/*           
          <form onSubmit={console.log("onsubmit")} className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="search"
                id="email"
                name="email"
                placeholder="Enter email"
                //   value={formData.email}
                //   onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form> */}
        </CardContent>
      </Card>
    </div>
  );
}
