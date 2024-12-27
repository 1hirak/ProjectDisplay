'use client'

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 2 },
  { id: 3, name: "Orange", price: 3 },
];

export default function ShoppingCart() {
  // Add useReducer here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            {/* Render cart items here */}9
          </ul>

          <div className="mt-4">
            {/* Product Buttons */}
            {products.map((product) => (
              <Button 
                key={product.id} 
                onClick={() => { /* Dispatch add to cart */ }}
                className="block w-full mb-2"
              >
                Add {product.name} - ${product.price}
              </Button>
            ))}
          </div>

          <Button 
            onClick={() => { /* Dispatch clear cart */ }} 
            variant="destructive" 
            className="mt-4 w-full"
          >
            Clear Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
