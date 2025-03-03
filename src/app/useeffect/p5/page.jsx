'use client'
import React, { useState } from 'react'

function SimpleMessagingApp() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { text: 'Hey there!', isSent: false },
    { text: 'Hi, how are you?', isSent: true }
  ])
  
  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    
    // Add message
    setMessages([...messages, { text: message, isSent: true }])
    setMessage('')
  }
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <div style={{ 
        height: '400px', 
        border: '1px solid #ccc', 
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Messages area */}
        <div style={{ 
          flex: 1, 
          padding: '10px',
          overflowY: 'auto'
        }}>
          {messages.map((msg, index) => (
            <div key={index} style={{
              textAlign: msg.isSent ? 'right' : 'left',
              marginBottom: '10px'
            }}>
              <span style={{
                background: msg.isSent ? '#0084ff' : '#e5e5ea',
                color: msg.isSent ? 'white' : 'black',
                padding: '8px 12px',
                borderRadius: '20px',
                display: 'inline-block',
                maxWidth: '70%'
              }}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          padding: '10px',
          borderTop: '1px solid #ccc'
        }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '20px',
              marginRight: '8px'
            }}
          />
          <button 
            type="submit"
            style={{
              background: '#0084ff',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 16px',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleMessagingApp