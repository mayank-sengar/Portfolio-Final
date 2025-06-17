import React, { useState ,useEffect} from 'react'
import { Sun, Moon } from 'lucide-react'
import {cn} from '@/lib/utils.js'
function ThemeToggle() {
    const[isDarkMode,setIsDarkMode] = useState(false)

//saving in the local storage to remember the theme 
    useEffect(()=>{
      const theme = localStorage.getItem('theme')
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      }
      if(theme === 'light'){
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    },[])
    const themeToggler=()=>{
      //dark-> light
      if(isDarkMode){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light')
        setIsDarkMode(false)
      }
      //light-> dark
      else{
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
        setIsDarkMode(true)
      }
    }
  return (
    <button className={cn("fixed  max-sm:hidden top-5 right-5 z-50 p-2 rounded-full bg-white dark:bg-gray-800")} onClick={()=> themeToggler()}>
      {isDarkMode ? <Sun className='w-6 h-6 text-yellow-300' /> : 
      <Moon className='w-6 h-6 text-blue-400'  />}
    </button>
  )
}

export default ThemeToggle