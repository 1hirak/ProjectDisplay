'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

function SimpleMessagingApp() {
  const [message, setMessage] = useState('')
  
  // Sample messages for UI demonstration
  const [messages] = useState([
    { id: 1, type: 'received', text: 'Hey there! How are you doing?', timestamp: '10:23 AM' },
    { id: 2, type: 'sent', text: 'I\'m good, thanks! Just working on a new project.', timestamp: '10:24 AM' },
    { id: 3, type: 'received', text: 'Sounds interesting! What kind of project is it?', timestamp: '10:26 AM' },
    { id: 4, type: 'sent', text: 'It\'s a simple messaging app UI.', timestamp: '10:28 AM' },
    { id: 11, type: 'received', text: 'Hey there! How are you doing?', timestamp: '10:23 AM' },
    { id: 21, type: 'sent', text: 'I\'m good, thanks! Just working on a new project.', timestamp: '10:24 AM' },
    { id: 31, type: 'received', text: 'Sounds interesting! What kind of project is it?', timestamp: '10:26 AM' },
    { id: 41, type: 'sent', text: 'It\'s a simple messaging app UI.', timestamp: '10:28 AM' },
  ])
  
  // Handle submit form (UI only)
  const handleSubmit = (e) => {
    e.preventDefault()
    // UI only - no actual sending logic
    setMessage('')
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 p-4 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`px-4 py-2 rounded-lg max-w-xs ${
                      msg.type === 'sent' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.type === 'sent' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex w-full items-center">
            <Input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="submit" className="ml-2">
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SimpleMessagingApp