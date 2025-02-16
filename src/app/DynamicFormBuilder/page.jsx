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
  const [fieldValue, setfielsdsValue] = useState();
  const [labelInput, setlabelInput] = useState();
  const [placeholderInput, setplaceholderInput] = useState();

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

  const fromreducer = (formstate, action) => {
    if (action.type === "input") {
      return {
        ...formstate,
        [action.id]: action.payload,
      };
    }

    return formstate;
  };

  const [state, dispatch] = useReducer(reducer, []);

  const [formstate, formdispatch] = useReducer(fromreducer, {});

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[500px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Dynamic Form
          </CardTitle>
        </CardHeader>
        <CardContent>
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

          <form
            // In your form's onSubmit handler
            onSubmit={(e) => {
              e.preventDefault();
              const formattedData = Object.entries(formstate)
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n");

              window.alert(
                `Form Data:\n----------------\n${formattedData}\n----------------`
              );
            }}
            className="space-y-4"
          >
            {state[0] && (
              <>
                <div className="mt-4 mb-4 text-3xl flex justify-center">
                  Preview
                </div>

                <div className="border-2 rounded-sm border-gray-500 p-4">
                  {state.map((x) => (
                    <div key={x.id} className="mt-4 mb-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label
                          className="text-base ml-2 mb-2"
                          htmlFor={x.htmlFor}
                        >
                          {x.label}
                        </Label>
                        <Input
                          className="mb-2"
                          type={x.type}
                          id={x.id}
                          name={x.name}
                          placeholder={x.label}
                          onChange={(e) =>
                            formdispatch({
                              type: "input",
                              id: x.id,
                              payload: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button type="submit" className="w-full">
                  Submit Form
                </Button>

                {/* <div className="flex items-center gap-2 mt-4">
                  <Input placeholder="Submit Button Name" />
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <Input placeholder="Form Name" />
                  <Button type="submit">Create Form</Button>
                </div> */}
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
