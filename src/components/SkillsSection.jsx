import React, { useState } from 'react';
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";


function SkillsSection() {
    const [techStack] = useState([
        { Icon: SiC, color: "#004482", name: "C" },
        { Icon: SiCplusplus, color: "#004482", name: "C++" },
        { Icon: SiJavascript, color: "#F0DB4F", name: "JavaScript" },
        { Icon: FaJava, color: "#EA2D2E", name: "Java" },
        { Icon: SiMongodb, color: "#3FA037", name: "MongoDB" },
        { Icon: SiExpress, color: "#888888", name: "Express.js" },
        { Icon: SiReact, color: "#00D8FF", name: "React" },
        { Icon: SiNodedotjs, color: "#68A063", name: "Node.js" },
        { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
        { Icon: SiMysql, color: "#00758F", name: "MySQL" },
        { Icon: SiGit, color: "#F1502F", name: "Git" },
        { Icon: SiGithub, color: "#333333", name: "GitHub" },
        { Icon: SiPostman, color: "#FF5722", name: "Postman" },
        { Icon: FaLinux, color: "#FFCC00", name: "Linux" },
    ]);
      
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map(({ Icon, color, name }, index) => (
          <div
            key={index}
            className="group relative w-16 h-16 flex items-center justify-center rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm bg-white/10 border"
            style={{
              boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
            }}
          >
            <Icon 
              size={32} 
              style={{ color }} 
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800/90 text-white px-2 py-1 rounded text-sm whitespace-nowrap backdrop-blur-sm">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
