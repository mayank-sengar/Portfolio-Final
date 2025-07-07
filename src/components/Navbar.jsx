import React from 'react'
import {useState,useEffect} from 'react'
import { Menu, X } from "lucide-react";
function Navbar() {
    const navItems=[
        {name:"Home",href:"#"},
        {name:"About",href:"#about"},
        {name:"Skills",href:"#skills"},
        {name:"Projects",href:"#projects"},
        {name:"Resume",href:"https://drive.google.com/file/d/1xUpngrFt454rEsinowCDWLSKLoyI4Ad_/view?usp=sharing",target:"_blank"},
        {name:"Contact",href:"#contact"},
    ];
    const [isScrolled,setIsScrolled] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    useEffect(()=>{  
    const handleScroll=()=>{
        //10 is the threshold height of navbar
    setIsScrolled(window.screenY>10)
     }
     window.addEventListener("scroll",handleScroll)

     return window.removeEventListener("scroll",handleScroll)
     }
     ,[]);

  return (
    <> 
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"} `} >
    <div className='container flex items-center justify-between'>
    <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
            <span className='text-glow text-3xl font-bold text-primary animate-pulse' >Portfolio</span>
        </a>

   {/* desktop */}
   <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

   {/* mobile */}

        
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 "
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={
            `fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden
            ${isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none" }`
          }
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      
      </div>
    
    </nav>

    </>
  )
}

export default Navbar