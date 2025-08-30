import React from 'react'
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
function ProjectsSection() {
    
    const [projects, setProjects] = useState([
      {
        id: 1,
        title: "PrepAI",
        description: "AI Powered Interview Preparation Platform",
        image: project1,
        tags: ["React", "NodeJS", "MongoDB","Express", "Gemini", "TailwindCSS", "MERN"],
        demoUrl: "https://prepai-interview.onrender.com/",
        githubUrl: "https://github.com/mayank-sengar/PrepAI.git",
      },
      {
        id: 2,
        title: "Collavi",
        description: "Collavi is a modern, full-stack communication platform that connects people based on shared skills and professional domains.",
        image: project2,
        tags: ["React", "NodeJS", "MongoDB", "Express", "TailwindCSS","SocketIO","GetStream SDK", "MERN"],
        demoUrl: "https://collavi.onrender.com/",
        githubUrl: "https://github.com/mayank-sengar/Collavi",
      }
    ])
  return (
    <>
    <section id="projects">
    <h1 className='text-4xl font-bold text-center mb-10 text-foreground '>
    <span>My </span>
    <span className='text-primary '>Projects</span>
    </h1>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto bold">
          Here are some of my recent projects. 
        </p>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-md"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-left transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                  <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mayank-sengar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>


        </section>
    </>
  )
}

export default ProjectsSection