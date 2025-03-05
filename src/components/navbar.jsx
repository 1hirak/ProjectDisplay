'use client';import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Calculator, Home, Settings } from "lucide-react";

export function Navbar() {
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isProjects2DropdownOpen, setIsProjects2DropdownOpen] = useState(false);

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
          <Link href="/" passHref legacyBehavior>
            <Button variant="ghost" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>

          {/* Calculators Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
          >
            <Button
              variant="ghost"
              className="flex items-center cursor-pointer"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Projects
            </Button>
            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 ${
                isProjectsDropdownOpen ? "block" : "hidden"
              } group-hover:block mt-0 w-72 rounded-lg bg-white shadow-lg dark:bg-black transition delay-200 duration-300`}
            >
              <Card className="space-y-1 p-2">
                {/* Dropdown Items */}
                <Link href="/useeffect" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    UseEffect
                  </Button>
                </Link>
                <Link href="/useref" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    UseRef
                  </Button>
                </Link>
                <Link href="/calculator" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Calculator
                  </Button>
                </Link>
                <Link href="/counter" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Counter
                  </Button>
                </Link>
                <Link href="/todo1" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Todo 1
                  </Button>
                </Link>
                <Link href="/themeToggle" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Theme Toggle
                  </Button>
                </Link>
                <Link href="/LightnDarkBulb" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Light and Dark Bulb App
                  </Button>
                </Link>
                <Link href="/NumberDoublerApp" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Number Doubler App
                  </Button>
                </Link>
                <Link href="/ShowHideTextApp" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Show/Hide Text App
                  </Button>
                </Link>
                <Link href="/CounterwithStepIncrementDecrement" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Counter with Step Increment/Decrement
                  </Button>
                </Link>
                <Link href="/ShoppingCartManager" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Shopping Cart Manager
                  </Button>
                </Link>
                <Link href="/SimpleTabSwitcher" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Simple Tab Switcher
                  </Button>
                </Link>
                <Link href="/AccordionComponent" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Accordion Component
                  </Button>
                </Link>
                <Link href="/MultiInputFormStateManager" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Multi-Input Form State Manager
                  </Button>
                </Link>
                <Link href="/LightandDarkModeToggle" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Light & Dark Mode Toggle
                  </Button>
                </Link>
                <Link href="/TodoListwithMark" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Todo List with Mark as Completed{" "}
                    <span className="text-red-700"> **</span>
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Projects 2 Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsProjects2DropdownOpen(true)}
            onMouseLeave={() => setIsProjects2DropdownOpen(false)}
          >
            <Button
              variant="ghost"
              className="flex items-center cursor-pointer"
            >
              <Settings className="mr-2 h-4 w-4" />
              Projects 2
            </Button>
            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 ${
                isProjects2DropdownOpen ? "block" : "hidden"
              } group-hover:block mt-0 w-72 rounded-lg bg-white shadow-lg dark:bg-black transition delay-200 duration-300`}
            >
              <Card className="space-y-1 p-2">
                {/* Dropdown Items */}
                <Link href="/calculator" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Calculator
                  </Button>
                </Link>
                <Link href="/counter" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Counter
                  </Button>
                </Link>
                <Link href="/CounterwithUndoandRedo" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Counter with Undo and Redo
                  </Button>
                </Link>
                <Link href="/FormValidation" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Form Validation
                  </Button>
                </Link>
                <Link href="/FavoriteItemsToggle" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Toggle Favorite Items
                  </Button>
                </Link>
                <Link href="/DynamicFormBuilder" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                    Dynamic Form Builder
                  </Button>
                </Link>
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