"use client";
import React from "react";
import ImprovedBlogCard from "../design3/ImprovedBlogCard";
import { data } from "@/data/blogpost";
import { useState, useEffect, useReducer, useRef } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const initialState = { startIndex: 0, endIndex: 8, paginationValue: 1 };

const cardList = () => {
  const refVal = useRef(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "NEXT": {
        refVal.current = (x) => !x;
        let anchorVal = state.startIndex;
        let pageVal = state.paginationValue;
        return {
          startIndex: anchorVal + 8,
          endIndex: anchorVal + 16,
          paginationValue: pageVal + 1,
        };
      }

      case "PREVIOUS": {
        refVal.current = (x) => !x;
        let startVal = state.startIndex;
        let endVal = state.endIndex;
        let pageVal = state.paginationValue;
        return pageVal === 1
          ? state
          : {
              startIndex: startVal - 8,
              endIndex: endVal - 8,
              paginationValue: pageVal - 1,
            };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialList = data.slice(0, 8);
  const modifiedList = data.slice(state.startIndex, state.endIndex);

  const [list, setlist] = useState(initialList);

  useEffect(() => {
    setlist(modifiedList);

    return () => {};
  }, [refVal.current]);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* <img src="/media/images/10.jpg" alt=""className="w-20 h-20" /> //to test the location*/}
      {list.map((x) => (
        <div
          key={x.id}
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]"
        >
          <ImprovedBlogCard post={x} />
        </div>
      ))}
      <div className="mt-6 mb-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => dispatch({ type: "PREVIOUS" })}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => console.log("clicked")} isActive={state.paginationValue===1}>
                {state.paginationValue===1?1:Number(state.paginationValue) - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive={state.paginationValue>=2}>{state.paginationValue===1?2:state.paginationValue}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink >
                {state.paginationValue<3?3:Number(state.paginationValue) + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => dispatch({ type: "NEXT" })} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default cardList;
