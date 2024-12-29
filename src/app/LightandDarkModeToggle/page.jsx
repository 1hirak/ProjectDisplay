"use client";

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const themeState = {
    card_light: "bg-white text-grey-900",
    card_dark: " bg-gray-500 text-white",
    bg_light: "bg-white",
    bg_dark:"bg-gray-500"
  };

  const initialState = "isLight";

  const reducer = (state, action) => {
    if (action.type === "click") {
      return (state = state ? Boolean(0) : initialState);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`flex justify-center items-center min-h-screen ${state?themeState.bg_light:themeState.bg_dark} `}>
      <Card
        className={`w-80 shadow-xl ${
          state ? themeState.card_light : themeState.card_dark
        }`}
      >
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold ">
            Theme Switcher
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-lg font-semibold mb-4">
            {state ? "Light" : "Dark"}
          </div>
          <Button
            onClick={() => {
              dispatch({ type: "click" });
            }}
          >
            Toggle Theme
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
