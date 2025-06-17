import React from "react";
import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer. Learner. Problem Solver.
            </h3>

            <p className="text-muted-foreground">
              I'm Mayank Sengar, a Computer Science undergrad at BIT Mesra with a passion
              for building meaningful web applications that solve real-world problems.
              Whether it’s a productivity tool or an AI-based news platform, I love turning
              ideas into elegant digital solutions.
            </p>

            <p className="text-muted-foreground">
              I primarily work with the <strong>MERN stack</strong> and focus on clean UI, real-time features,
              and scalable architecture. I’ve also been part of hackathons, tech communities,
              and development teams that aim to make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center align-middlesm:justify-start ">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/10U5bCIIQV9Dob7LYiT3t_REBI2EfIapb/view?usp=sharing" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">MERN Development</h4>
                  <p className="text-muted-foreground">
                    Crafting full-stack web apps with MongoDB, Express, React, and Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solver</h4>
                  <p className="text-muted-foreground">
                  Solved 400+ DSA problems, including 200+ on LeetCode and other platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Hackathons & Projects</h4>
                  <p className="text-muted-foreground">
                    Finalist at Fluxus IIT Indore & Byte Buildathon winner — I thrive on solving
                    problems creatively and collaboratively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
