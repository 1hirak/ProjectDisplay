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


// 1. Remove the side‑effect from the reducer ("submit" case)
// Change at around Line 80 (inside your reducer):

// Replace this:

// js
// Copy
// Edit
//       case "submit": {
//         if (state.message.email || state.message.pass) {
//           let newobj = {
//             ...state,
//             showDialog: true,
//           };
//           return newobj;
//         } else {
//           handleSubmit(state);
//           let newobj = {
//             ...state,
//             showDialog: false,
//           };
//           return newobj;
//         }
//       }
// with this:

// js
// Copy
// Edit
//       case "submit": {
//         if (state.message.email || state.message.pass) {
//           return {
//             ...state,
//             showDialog: true,
//             submitted: false, // ensure no submission flag is set
//           };
//         } else {
//           return {
//             ...state,
//             showDialog: false,
//             submitted: true, // flag that submission is valid
//           };
//         }
//       }
// Notes:

// We add a new state property (submitted) to signal that the form has been submitted with valid data.
// Do not call handleSubmit from inside the reducer.
// 2. Initialize the new submitted flag in your initial state
// Change at around Line 35:

// Replace:

// js
// Copy
// Edit
//   const initialstate = {
//     message: {
//       email: "",
//       pass: "",
//     },
//     email: "",
//     password: "",
//     showDialog: false,
//   };
// with:

// js
// Copy
// Edit
//   const initialstate = {
//     message: {
//       email: "",
//       pass: "",
//     },
//     email: "",
//     password: "",
//     showDialog: false,
//     submitted: false,
//   };
// 3. Add a reducer case to clear the submitted flag
// Add a new case in your reducer (for example, after the "submit" case):

// js
// Copy
// Edit
//       case "clearSubmitted": {
//         return {
//           ...state,
//           submitted: false,
//         };
//       }
// 4. Use a useEffect to call handleSubmit when submission is valid
// Add the following useEffect hook inside your component (after the useReducer hook, around Line 95):

// js
// Copy
// Edit
//   useEffect(() => {
//     if (state.submitted) {
//       handleSubmit(state);
//       dispatch({ type: "clearSubmitted" });
//     }
//   }, [state.submitted]);
// Note: Make sure to import useEffect from React:

// js
// Copy
// Edit
// import { useReducer, useEffect } from "react";