"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Define navigation items as a constant array to avoid repetition
const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

// Extract NavLink component for reusability
const NavLink = ({ item }) => (
  <li>
    <a
      href={`#${item.toLowerCase()}`}
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      {item}
    </a>
  </li>
);

// Extract MobileNavLink component for reusability
const MobileNavLink = ({ item }) => (
  <li>
    <a
      href={`#${item.toLowerCase()}`}
      className="text-lg font-medium hover:text-primary transition-colors"
    >
      {item}
    </a>
  </li>
);

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur mb-2">
    <div className="container px-4 mx-auto max-w-6xl flex h-16 items-center justify-between">
      <div className="font-bold text-xl">
        <a href="/" className="hover:text-primary transition-colors">
          Hirak
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item} item={item} />
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav>
            <ul className="flex flex-col space-y-4 mt-8">
              {NAV_ITEMS.map((item) => (
                <MobileNavLink key={item} item={item} />
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
);

export default Navbar;