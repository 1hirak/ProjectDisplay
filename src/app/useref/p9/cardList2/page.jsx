"use client";
import React from "react";
import ImprovedBlogCard from "../design3/ImprovedBlogCard";
import { data } from "@/data/blogpost";
import { useState, useEffect, useReducer, useRef } from "react";

const initialState = data.slice(0, 8);

const cardList = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "MORE": {
        let x = state.length;
        let slicedArr = data.slice(x,x+8)
        console.log(slicedArr)
        return [...state, ...slicedArr]
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* <img src="/media/images/10.jpg" alt=""className="w-20 h-20" /> //to test the location*/}
      {state.map((x) => (
        <div
          key={x.id}
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]"
        >
          <ImprovedBlogCard post={x} />
        </div>
      ))}
      <div className="mt-6 mb-6">
        <button
          onClick={() => dispatch({ type: "MORE" })}
          className="border-solid border-2 p-4 rounded-xl text-gray-700"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default cardList;
