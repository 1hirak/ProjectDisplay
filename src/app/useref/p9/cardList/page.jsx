'use client'
import React from "react";
import ImprovedBlogCard from "../design3/ImprovedBlogCard";
import { data } from "@/data/blogpost";
import { useState,useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



const cardList = () => {

  const [first, setfirst] = useState([]);

  useEffect(() => {
    setfirst(data.slice(0,24))
  
    return () => {
      
    }
  }, [])
  
  return (
    <div
    className="flex flex-wrap gap-4 justify-center">





      {/* <img src="/media/images/10.jpg" alt=""className="w-20 h-20" /> //to test the location*/}
      {first.map((x) => (
        <ImprovedBlogCard key={x.id} post={x} />
      ))}
  <div
  className="mt-6 mb-6">
  <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
    </div>
  );
};

export default cardList;
