"use client";

import React from "react";
import { useState, useEffect } from "react";

const Useff = () => {
  const [first, setfirst] = useState(1);
  const [data, setdata] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
      setloading(true);
      fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((err) => console.log(err));
      setloading(false);

      return ()=>{console.log("unmounted");
      }
  }, [first]);

  return (
    <>
      <div>
        <button onClick={() => setfirst(0)}>fatch data</button>
      </div>

      {loading && <div>loading...</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </>
  );
};

export default Useff;
