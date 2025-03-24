import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ title, description, technologies, link, githubLink, imagePath }) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:border-primary/20">
      <CardHeader className="p-4">
        {/* Project image */}
        <div className="w-full h-full bg-gray-200 rounded-md mb-4 overflow-hidden">
          <img 
            src={imagePath} 
            alt={`${title} thumbnail`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <CardDescription className="text-sm mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs transition-colors duration-300 hover:bg-primary/10"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-start">
        <Button 
          variant="outline" 
          size="sm" 
          className="transition-all duration-300 hover:bg-primary/10 hover:border-primary"
          asChild
        >
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Project <ExternalLink size={16} />
          </a>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-2 transition-all duration-300 hover:bg-primary/10 hover:border-primary flex items-center"
          asChild
        >
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 	line-height: 1">
              Browse Code<img className='w-4 h-4' src="media/github-mark.svg" alt="" />
            </a> 
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with Medusa headless commerce solution, featuring product management, cart functionality, and checkout.",
      technologies: ["React", "Medusa", "Redux"],
      link: "/projects/ecommerce",
      githubLink: "https://github.com/username/ecommerce-platform",
      imagePath: "media/shots/ecommerce.webp"
    },
    {
      title: "Kanban Todo List",
      description: "Interactive task management app with drag-and-drop capability for organizing tasks across different status columns.",
      technologies: ["Redux", "dndkit", "Supabase"],
      link: "/projects/todolist",
      githubLink: "https://github.com/username/kanban-todolist",
      imagePath: "media/shots/todolist.webp"
    },
    {
      title: "Form Builder",
      description: "Customizable form creation tool with authentication and database integration for collecting and storing user submissions.",
      technologies: ["Supabase", "Clerk Auth"],
      link: "/projects/form-builder",
      githubLink: "https://github.com/username/ ",
      imagePath: "media/shots/form-builder.webp"
    },
    {
      title: "Blog Application",
      description: "Content management system for creating and publishing blog posts with a headless CMS backend and state management.",
      technologies: ["Redux", "Strapi"],
      link: "/projects/blog",
      githubLink: "https://github.com/username/blog-app",
      imagePath: "media/shots/blog.webp"
    },
    {
      title: "Paint App",
      description: "Digital drawing application with various tools and features for creating artwork directly in the browser.",
      technologies: ["React Hooks"],
      link: "/projects/paint",
      githubLink: "https://github.com/username/paint-app",
      imagePath: "media/shots/paint.webp"
    },
    {
      title: "Custom Video Player",
      description: "Fully customized video player with playlist management and drag-and-drop functionality built without external video libraries.",
      technologies: ["dndkit", "React Hooks"],
      link: "/projects/video-player",
      githubLink: "https://github.com/username/custom-video-player",
      imagePath: "media/shots/video-player.webp"
    },
    {
      title: "Real-time Chat App",
      description: "Interactive messaging platform with secure authentication using Clerk and real-time communication via WebSockets.",
      technologies: ["WebSocket", "Clerk Auth", "React"],
      link: "/projects/chat-app",
      githubLink: "https://github.com/username/realtime-chat-app",
      imagePath: "media/shots/chat-app.webp"
    },
    {
      title: "AI Chat Assistant",
      description: "Conversational interface that connects to LLM APIs with streaming responses delivered through WebSockets for a natural, real-time experience.",
      technologies: ["WebSocket", "OpenAI API", "React"],
      link: "/projects/ai-chat",
      githubLink: "https://github.com/username/ai-chat-assistant",
      imagePath: "media/shots/ai-chat.webp"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-8 ">All My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            githubLink={project.githubLink}
            imagePath={project.imagePath || "https://placehold.co/800x600"}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-12 py-10 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">  
            <h3 className="text-xl font-bold mb-4">Hirak Das</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Front-end developer passionate about creating intuitive and engaging user experiences 
              with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/hirakdas" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/hirakdas" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/in/hirakdas" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hirak@email.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                India
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                hirak@email.com
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Hirak Das. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default ProjectShowcase;