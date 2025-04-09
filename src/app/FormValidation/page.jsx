"use client";

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const validatePassword = (password) => {
  if (!password) return "Password is required.";
  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  if (!hasLetter || !hasNumber) {
    return "Password must contain both letters and numbers.";
  }
  return null;
};

const validateEmail = (email) => {
  if (!email) return "Email is required.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  const disposableDomains = new Set([
    "tempmail.com",
    "mailinator.com",
    "10minutemail.com",
    "guerrillamail.com",
  ]);
  const domain = email.split("@")[1];
  if (disposableDomains.has(domain)) {
    return "Disposable email addresses are not allowed.";
  }
  return null;
};
const handleSubmit = (state) => {
  window.alert(state.email + "  " + state.password);
};


export default function FormValidation() {
  const initialstate = {
    message: {
      email: "",
      pass: "",
    },
    email: "",
    password: "",
    showDialog: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "email": {
        let newemail = action.payload;
        let newobj;
        let errmsg = validateEmail(newemail);
        !validateEmail(newemail)
          ? (newobj = {
              ...state,
              email: newemail,
              message: {
                ...state.message,
                email: "",
              },
            })
          : (newobj = {
              ...state,
              message: {
                ...state.message,
                email: errmsg,
              },
            });
        return newobj;
      }
      case "password": {
        let newpass = action.payload;
        let newobj;
        let errmsg = validatePassword(newpass);
        !validatePassword(newpass)
          ? (newobj = {
              ...state,
              password: newpass,
              message: {
                ...state.message,
                pass: "",
              },
            })
          : (newobj = {
              ...state,
              message: {
                ...state.message,
                pass: errmsg,
              },
            });
        return newobj;
      }

      case "submit": {
        if (state.message.email || state.message.pass) {
          let newobj = {
            ...state,
            showDialog: true,
          };
          return newobj;
        } else {
          handleSubmit(state);
          let newobj = {
            ...state,
            showDialog: false,
          };
          return newobj;
        }
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Form Validation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Email"
              onChange={(e) => {
                dispatch({ type: "email", payload: e.target.value });
              }}
            />
            {state.showDialog ? (
              <div className="text-red-500 text-sm">
                {state.message.email || ""}
              </div>
            ) : (
              ""
            )}
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => {
                dispatch({ type: "password", payload: e.target.value });
              }}
            />
            {state.showDialog ? (
              <div className="text-red-500 text-sm">
                {state.message.pass || ""}
              </div>
            ) : (
              ""
            )}
            <Button
              onClick={() => {
                dispatch({ type: "submit" });
              }}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
