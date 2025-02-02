import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Calculator, Home, Settings } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <Calculator className="h-6 w-6" />
          <span className="font-bold text-lg">Next JS App</span>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-4">
          {/* Home Button */}
          <Button variant="ghost" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            <Link href="/">Home</Link>
          </Button>

          {/* Calculators Dropdown */}
          <div className="relative group">
            <Button
              variant="ghost"
              className="flex items-center cursor-pointer"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Projects
            </Button>
            {/* Dropdown Menu */}
            <div
              className="absolute right-0 hidden group-hover:block group-hover:pointer-events-auto mt-0 w-72 rounded-lg 
              bg-white shadow-lg dark:bg-black transition delay-200 duration-300 "
            >
              <Card className="space-y-1 p-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/calculator">Calculator</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link href="/counter">Counter</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/todo1">todo1</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/themeToggle">themeToggle</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/LightnDarkBulb">Light and Dark Bulb App</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/NumberDoublerApp">Number Doubler App</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/ShowHideTextApp">Show/Hide Text App</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/CounterwithStepIncrementDecrement">
                    Counter /w Step In/De
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/ShoppingCartManager">Shopping Cart Manager</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/SimpleTabSwitcher">Simple Tab Switcher</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/AccordionComponent">Accordion Component</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/MultiInputFormStateManager">
                    Multi-Input Form State Manager
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/LightandDarkModeToggle">
                    Light n Dark Mode Toggle
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/TodoListwithMark">
                    Todo List with Mark as Completed{" "}
                    <span className="text-red-700"> **</span>
                  </Link>
                </Button>
              </Card>
            </div>
          </div>

          {/* Settings Button */}
          <div className="relative group">
            <Button
              variant="ghost"
              className="flex items-center cursor-pointer"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Projects 2
            </Button>
            {/* Dropdown Menu */}
            <div
              className="absolute right-0 hidden group-hover:block group-hover:pointer-events-auto mt-0 w-72 rounded-lg 
              bg-white shadow-lg dark:bg-black transition delay-200 duration-300 "
            >
              <Card className="space-y-1 p-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {" "}
                  <Link href="/calculator">Calculator</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link href="/counter">Counter</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link href="/CounterwithUndoandRedo">
                    Counter with Undo and Redo
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Placeholder */}
          <Button variant="outline" size="sm">
            Toggle Button
          </Button>

          {/* Login Button */}
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
