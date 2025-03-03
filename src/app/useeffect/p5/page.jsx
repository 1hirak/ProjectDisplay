'use client'
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { useState } from 'react';


function CleanupOnUnmount() {

    const [msg, setmsg] = useState([])
    
  useEffect(() => {

    const socket= new WebSocket("wss://ws.postman-echo.com/raw")

     socket.addEventListener("open", ()=>{
      console.log("connection created");
      socket.send("hello world")
      
    })

   

    socket.addEventListener("message",(x)=>{
      const data = x.data;
      

      setmsg(x=> [...x, data])
      
      
      
        // const data = JSON.parse(x)
        // console.log(data);
    })
    

    socket.addEventListener('close', ()=>{
      console.log("connection closed");
      
    })
    // TODO: Add your setup logic here (e.g., subscribe to a service, start a timer, etc.)

    return () => {
        socket.close()
      // TODO: Add your cleanup logic here (e.g., unsubscribe, clear timers, etc.)
    };
  }, []); // Runs once on mount, cleanup runs on unmount

  return (
    <div>
      {console.log(msg)
      }
      <h1>This component cleans up on unmount.</h1>
        <Button onClick={()=>setfirst(x=>!x)} >rerender</Button>
    </div>
  );
}

export default CleanupOnUnmount;
