"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// Define social links as a constant array to improve maintainability
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/1hirak",
    icon: Github,
    action: null,
  },
  {
    name: "LinkedIn",
    href: null,
    icon: Linkedin,
    action: () => alert("Unavilahle"),
  },
  {
    name: "Twitter",
    href: null,
    icon: Twitter,
    action: () => alert("Unavilahle"),
  },
];

// Extract SocialButton component for reusability
const SocialButton = ({ name, href, icon: Icon, action }) => (
  <Button
    onClick={action || (() => window.open(href, "_blank"))}
    variant="ghost"
    size="icon"
    className="rounded-full"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{name}</span>
  </Button>
);

const Footer = () => (
  <footer
    id="contact"
    className="bg-primary text-primary-foreground py-8 md:py-10"
  >
    <div className="container px-4 mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm">© 2025 Hirak Das. All rights reserved.</p>
        </div>

        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.name} {...social} />
          ))}
        </div>

        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          <a href="mailto:your@email.com" className="text-sm hover:underline">
            jhirak83@gmail.com
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;