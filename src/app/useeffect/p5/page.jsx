"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
function CleanupOnUnmount() {
  const [msg, setmsg] = useState([]);
  const [inputValue, setinputValue] = useState('')

  const socketRef = useRef(new WebSocket("wss://ws.postman-echo.com/raw"));

  const SOCKET = socketRef.current;

  useEffect(() => {
    SOCKET.addEventListener("open", () => {
      console.log("connection created");
      SOCKET.send("hello world");
    });

    SOCKET.addEventListener("message", (x) => {
      const data = x.data;
      setmsg((x) => [...x, data]);
    });

    SOCKET.addEventListener("close", () => {
      console.log("connection closed");
    });

    return () => {
      SOCKET.close();
    };

  }, []);

  const handleClick = () => { 
    SOCKET.send(inputValue);
    console.log("clicked")
   }
  return (
    <div>
      {console.log(msg)}
      <h1>This component cleans up on unmount.</h1>
      <Input type="text" onChange={(e) => setinputValue(e.target.value)} />
      <Button onClick={() => handleClick ()}>send</Button>
    </div>
  );
}
export default CleanupOnUnmount;
