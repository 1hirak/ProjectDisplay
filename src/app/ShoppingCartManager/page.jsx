"use client";

import { useReducer } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 2 },
  { id: 3, name: "Orange", price: 3 },
];

const initialState = { total: "", price: "" };

const reducer = (state, action) => {
  if (action.type === "clear") {
    return (state = { total: "", price: "" });
  }

  if (action.type === "atc") {
    let tot = state.total ? state.total + 1 : 1;
    let price = state.price
      ? state.price + action.payload[1]
      : action.payload[1];

    return (state = {
      total: tot,
      price: price,
    });
  }
};

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 flex justify-center ">
            {!state.total ? (
              ""
            ) : (
              <>
                <span>{`Total Items:  ${state.total}`}</span>
                <span className="ml-6">{`Total Price:  ${state.price}`}</span>
              </>
            )}
          </ul>

          <div className="mt-4">
            {/* Product Buttons */}
            {products.map((product) => (
              <Button
                key={product.id}
                onClick={() =>
                  dispatch({
                    type: "atc",
                    payload: [product.id, product.price],
                  })
                }
                className="block w-full mb-2"
              >
                Add {product.name} - ${product.price}
              </Button>
            ))}
          </div>

          <Button
            onClick={() => {
              dispatch({ type: "clear" });
            }}
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
