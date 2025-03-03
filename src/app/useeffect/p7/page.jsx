"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function WebSocketChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setinputValue] = useState("");
  useEffect(() => {
    const socket = new WebSocket("wss://ws.postman-echo.com/raw");

    socket.addEventListener("open", () => {
      console.log("connection established");
      socket.send("hello");
    });
    socket.addEventListener("message", (x) => {
        const data = x.data;
        setMessages((x) => [...x, data]);
      });
      const handleSubmit = () => {
        socket.send(inputValue);
        setinputValue("");
      };
    

    return () => {
      socket.close();
    };
  }, []);

 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-[400px] w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Chat Messages
        </h1>
        <ul className="mt-4 space-y-2">
          message
          {messages.map((msg, idx) => (
            <li key={idx} className="p-2 bg-gray-50 rounded text-gray-700">
              {msg}
            </li>
          ))}
        </ul>
        <div>
          <form
            className="flex gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
            ></Input>
            <Button type="submit">
              Send
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WebSocketChat;
