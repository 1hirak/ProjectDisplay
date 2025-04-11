"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Code,
  PenTool,
  Users,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function PortfolioHomepage() {
  // Project data from your ProjectDisplay component
  const cardProjects = [
    {
      name: "Dynamic Form Builder",
      url: "/DynamicFormBuilder",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/DynamicFormBuilder/page.jsx",
      description:
        "Dynamic Form Builder using React, leveraging useReducer for state management to dynamically add and handle form fields. It features a clean UI with ShadCN components, allowing users to select from various input types, customize labels, and set placeholders. The form preview updates in real-time, and form data is processed on submission with a formatted alert. It’s intuitive, scalable, and designed for seamless user interaction, showcasing my focus on functionality and user experience.",
    },
    {
      name: "Todo List with Mark as Completed",
      url: "/TodoListwithMark",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/TodoListwithMark/page.jsx",
      description:
        "The TodoApp component is a fully functional todo list application that allows users to: 1. Add new tasks.  2. Edit existing tasks. 3. Delete individual tasks or all tasks at once. 4. Mark tasks as completed or incomplete using checkboxes. 5. Interact with a responsive and styled UI.  It uses React hooks (useReducer and useState) for state management, and third-party libraries like uuidv4 for unique task IDs and ShadCN for UI components.",
    },
    {
      name: "Form Validation using useReducer Hook",
      url: "/FormValidation",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/FormValidation/page.jsx",
      description:
        "This is a React-based Form Validation component I developed using useReducer for state management. It’s designed to validate email and password inputs with custom logic—checking for email format, disposable domains, and password strength (6+ characters, letters, and numbers). Errors are displayed conditionally via a reducer-driven state, and the form submits only when valid. Built with ShadCN UI, it’s a concise, reusable solution I created for secure and user-friendly form handling",
    },
    {
      name: "Blog Cards with Pagination",
      url: "/useref/p9/cardList",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/useref/p9/cardList/page.jsx",
      description:
        "This is a paginated blog card list I engineered with React, leveraging useReducer and useRef for state control. It’s built to display blog posts from a dataset, sliced into groups of eight, with dynamic pagination handled via a reducer. The component features responsive card layouts and a custom pagination UI using ShadCN components. I designed it to efficiently update the list on navigation, ensuring a seamless browsing experience for users.",
    },
    {
      name: "Expandable Blog Cards",
      url: "/useref/p9/cardList2",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/useref/p9/cardList2/page.jsx",
      description:
        "This is an infinite-load blog card list I constructed using React and useReducer for state management. It’s designed to initially display eight blog posts from a dataset, with a Load More button triggering the reducer to append the next eight entries. The responsive grid layout adapts across screen sizes, showcasing each post with an ImprovedBlogCard component. I built it to provide a smooth, incremental content-loading experience for users.",
    },
    {
      name: "Canvas Drawing Board",
      url: "/useref/p7",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/useref/p7/page.jsx",
      description:
        "This is a drawing board I built with React, leveraging useRef and useState for real-time functionality. It uses an HTML5 canvas (800x600) where the getCoordinates logic calculates mouse positions relative to the canvas. The startDrawing function initiates strokes on onMouseDown, draw tracks movement with onMouseMove, and onMouseUp/onMouseLeave stop it. The useEffect hook updates the 2D context’s strokeStyle with a color picker, enabling dynamic brush color changes for freehand sketching.",
    },
    {
      name: "Video Player with Progress Tracking",
      url: "/useref/p8",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/useref/p8/page.jsx",
      description:
        "This is a video player I built using React with useRef and useState for dynamic control. It’s designed with a custom timeline, where progress updates every 200ms via setInterval, and users can click to seek. The play/pause toggle and reset functionality are handled with button events, adjusting the video’s state. Styled minimally with a progress bar, it’s a lightweight, interactive component I created for seamless video playback control.",
    },
    {
      name: "WebSocket Pingback",
      url: "/useeffect/p7",
      githubUrl:
        "https://github.com/1hirak/ProjectDisplay/blob/main/src/app/useeffect/p7/page.jsx",
      description:
        "This is a WebSocket-based chat component I crafted with React, using useRef and useState for state handling. It connects to the Postman Echo WebSocket API (wss://ws.postman-echo.com/raw), which echoes messages back in real time. The logic listens for incoming messages via socket.addEventListener, appending them to a list, while the handleSubmit function sends user input to the server. Styled with ShadCN UI, it’s a simple, live chat interface I built for instant communication.",
    },
  ];

  const tableProjects = [
    { name: "UseEffect Examples", url: "/useeffect" },
    { name: "Fetch Data on Mount", url: "/useeffect/p1" },
    { name: "Set Interval", url: "/useeffect/p2" },
    { name: "Update Document Title on State Change", url: "/useeffect/p3" },
    { name: "Window Resize Listener", url: "/useeffect/p4" },
    { name: "WebSocket Basics", url: "/useeffect/p5" },
    { name: "ChatApp using WebSocket", url: "/useeffect/p6" },
    { name: "UseRef Examples", url: "/useref" },
    { name: "Basic UseRef", url: "/useref/p1" },
    { name: "Timeout Function", url: "/useref/p2" },
    { name: "AutoFocus", url: "/useref/p3" },
    { name: "Render Count", url: "/useref/p4" },
    { name: "Dynamic Height Textarea", url: "/useref/p5" },
    { name: "Click Outside to Close", url: "/useref/p6" },
    { name: "Calculator App", url: "/calculator" },
    { name: "Counter App", url: "/counter" },
    { name: "Basic Todo App", url: "/todo1" },
    { name: "Theme Toggle", url: "/themeToggle" },
    { name: "Light and Dark Bulb App", url: "/LightnDarkBulb" },
    { name: "Number Doubler App", url: "/NumberDoublerApp" },
    { name: "Show/Hide Text App", url: "/ShowHideTextApp" },
    {
      name: "Step Increment/Decrement Counter",
      url: "/CounterwithStepIncrementDecrement",
    },
    { name: "Shopping Cart Manager", url: "/ShoppingCartManager" },
    { name: "Simple Tab Switcher", url: "/SimpleTabSwitcher" },
    { name: "Accordion Component", url: "/AccordionComponent" },
    {
      name: "Multi-Input Form State Manager",
      url: "/MultiInputFormStateManager",
    },
    { name: "Light & Dark Mode Toggle", url: "/LightandDarkModeToggle" },
    { name: "Counter with Undo and Redo", url: "/CounterwithUndoandRedo" },
    { name: "Toggle Favorite Items", url: "/FavoriteItemsToggle" },
  ];

  // Skills data
  const technicalSkills = [
    { name: "Tailwind/CSS/HTML", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "JavaScript", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "Node.js", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "React.js", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "Next.js", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "Advanced State Management", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "Shadcn/UI", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "GIT", icon: <Code className="mr-2 h-5 w-5" /> },
    
    { name: "AWS", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "CD", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "Web Analytics", icon: <Code className="mr-2 h-5 w-5" /> },
    { name: "Digital Marketing", icon: <Code className="mr-2 h-5 w-5" /> },
  ];

  const designSkills = [
    { name: "UI/UX Design", icon: <PenTool className="mr-2 h-5 w-5" /> },
    { name: "Figma", icon: <PenTool className="mr-2 h-5 w-5" /> },
    { name: "Canva", icon: <PenTool className="mr-2 h-5 w-5" /> },
    { name: "Responsive Design", icon: <PenTool className="mr-2 h-5 w-5" /> },
  ];

  const softSkills = [
    { name: "Communication", icon: <Users className="mr-2 h-5 w-5" /> },
    { name: "Teamwork", icon: <Users className="mr-2 h-5 w-5" /> },
    { name: "Problem Solving", icon: <Users className="mr-2 h-5 w-5" /> },
    { name: "Leadership", icon: <Users className="mr-2 h-5 w-5" /> },
  ];

  return (<>

    <div className="flex flex-col min-h-screen">
      {/* Header */}
      

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about" className="py-16 md:py-20 text-center">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="/media/shots/face.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 md:mb-4">
                Hi, I'm Hirak
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-4 md:mb-6">
                React Developer | Problem Solver
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto px-4">
                I'm a passionate web developer with a keen eye for design and a
                knack for solving complex problems. With years of
                experience creating responsive, user-friendly websites, I bring
                creativity and technical expertise to every project.
              </p>

              <div className="flex gap-3">
                <Link
                href="tel:+919706885259">
                <Button
                  size="lg"
                  className="rounded-full px-6 md:px-8"
                  
                >
                  Contact Me
                </Button></Link>
                 <Link
                 href={"https://github.com/1hirak"}>
                <Button size="lg" className="rounded-full px-6 md:px-8">
                  GitHub
                </Button></Link> 
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-20 bg-muted/50">
          <div className="container px-4 mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 md:mb-8 text-center">
              Skills
            </h2>

            <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="technical" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technicalSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-4 bg-background rounded-lg shadow-sm"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {designSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-4 bg-background rounded-lg shadow-sm"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="soft" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-4 bg-background rounded-lg shadow-sm"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section with ProjectDisplay integrated */}
        <section id="projects" className="py-16 md:py-20">
          <div className="container px-4 mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 md:mb-8 text-center">
              Projects
            </h2>

            {/* Card Projects from your ProjectDisplay */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cardProjects.map((project, index) => (
                <Card
                  className="p-6 border rounded-lg shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg"
                  key={index}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-700 mb-5">{project.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                    <Link href={project.url} passHref legacyBehavior>
                      <Button variant="outline" className="flex-1">
                        View Project
                      </Button>
                    </Link>
                    <Button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      variant="outline"
                      className="flex-1"
                    >
                      View Source Code
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Table Projects from your ProjectDisplay */}
            <Card className="p-4 border rounded-lg shadow-md">
              <Table>
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Project Name
                    </th>
                  </tr>
                </thead>
                <TableBody className="bg-white divide-y divide-gray-200">
                  {tableProjects.map((project, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-gray-50 cursor-pointer"
                    >
                      <TableCell className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">
                            {project.name}
                          </span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
    
    </>
  );
}
