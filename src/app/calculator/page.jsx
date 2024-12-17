// import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  return (<>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-80 shadow-xl rounded-xl overflow-hidden">
        <CardContent className="p-0">
          {/* Display Screen */}
          <div className="bg-gray-800 text-white p-4 text-right">
            <div className="text-sm text-gray-400">Previous Calculation</div>
            <div className="text-3xl font-bold">0</div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-2 p-4">
            {/* Utility Buttons */}
            <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 text-black col-span-2">
              Clear
            </Button>
            <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 text-black">
              ⌫
            </Button>
            <Button variant="outline" className="bg-orange-500 hover:bg-orange-600 text-white">
              ÷
            </Button>

            {/* Number Buttons with modifications */}
            {[7, 8, 9, '-', 4, 5, 6, '×', 1, 2, 3].map((num) => (
              <Button 
                key={num} 
                variant="outline" 
                className={(num=="-"||num=="×"?"bg-orange-500 hover:bg-orange-600 text-white":"bg-white hover:bg-gray-100 text-black")}
              >
                {num}
              </Button>
            ))}

            {/* Decimal, 0, and Operator Buttons */}
            <Button variant="outline" className="bg-orange-500 hover:bg-orange-600 text-white">
              +
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-100 text-black">
              0
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-100 text-black">
              .
            </Button>
            <Button variant="outline" className="bg-green-500 hover:bg-green-600 text-white col-span-2">
              =
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}