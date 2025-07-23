"use client"

import {FaDownload} from "react-icons/fa";
import {motion} from "framer-motion"; 
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
const ProfileOverview = () => {

  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="my-24 scroll-mt-20 mb-20 " id="home">
        <motion.div 
        initial = {{opacity:0, y:-100}}
        animate = {{opacity:1,  y:0}}
        transition={{duration:1}}
        className="flex flex-col items-center justify-center gap-4 sm:mt-40">

          <div className="flex flex-col sm:flex-row-reverse items-center 
            gap-10 md:gap-20">
            
            <div className="w-full flex flex-col items-center gap-2">
              <h1 className="text-3xl font-bold">{'Umair Sadiq'}</h1>

              <p className="tracking-tighter">{'London,England'}</p>

              <a href="../global.css" target="_blank" rel="noopener noreferrer" download
              className="w-40 flex items-center gap-x-2 rounded-full bg-gray-300
              px-3 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:text-teal-800">
                  Download my CV
                  <FaDownload />
              </a>
            </div>

          </div>

          <p className="my-10 text-center text-5xl font-semibold tracking-tighter md:text-[4rem] lg:text-[5rem]">
            {"Welcome to my Portfolio".split('').map((char,index) => (
              <motion.span key={index} initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.9, delay: index * 0.15}}>
                {char} 
              </motion.span>
            ))}
          </p>

          <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-400 lg:text-3xl">
            I am passionate {" "}
            <span className="border-b-2 font-medium text-slate-200">
              Full Stack Development
            </span>{" "}
            with a knack for creating seamless, user-friendly web applications.
            Specialising in both {" "}
            <span className="font-medium text-slate-200">front-end </span>
            and{" "}
            <span className="font-medium text-slate-200">back-end</span>{" "}
            development, enusring a cohesive and efficent user experience from start to finish
          </p>

        </motion.div>
        
    <div id="item-carasel" className="w-[350] sm:min-w-[350px] md:max-w-[800px] mx-auto">
      <div
        id=""
        className="logos relative overflow-hidden py-[60px] flex justify-center"
      >
        <div
          className={`logos-slide h-[40px] whitespace-nowrap inline-flex
          ${isPaused ? '' : 'animate-slide'
          }`}
        >
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://github.com/umair440?tab=repositories">
              <FaGithub fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://github.com/umair440?tab=repositories"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Github</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/">
              <FaLinkedin fontSize={35} className="inline-block mr-2 " />
            </a>
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Linkedin</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://medium.com/@sadiq.umair" className="cursor-pointer">
              <FaMedium fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://medium.com/@sadiq.umair"
            className="cursor-pointer hover:scale-110"><span className="font-bold text-[20px]">Medium</span>
            </a>
          </div>
        </div>

        <div
          className={`logos-slide h-[40px] whitespace-nowrap inline-flex
          ${isPaused ? '' : 'animate-slide'
          }`}
        >
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://github.com/umair440?tab=repositories">
              <FaGithub fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://github.com/umair440?tab=repositories"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Github</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/">
              <FaLinkedin fontSize={35} className="inline-block mr-2 " />
            </a>
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Linkedin</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://medium.com/@sadiq.umair" className="cursor-pointer">
              <FaMedium fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://medium.com/@sadiq.umair"
            className="cursor-pointer hover:scale-110"><span className="font-bold text-[20px]">Medium</span>
            </a>
          </div>
        </div>

        <div
          className={`logos-slide h-[40px] whitespace-nowrap inline-flex
          ${isPaused ? '' : 'animate-slide'
          }`}
        >
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://github.com/umair440?tab=repositories">
              <FaGithub fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://github.com/umair440?tab=repositories"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Github</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/">
              <FaLinkedin fontSize={35} className="inline-block mr-2 " />
            </a>
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Linkedin</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://medium.com/@sadiq.umair" className="cursor-pointer">
              <FaMedium fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://medium.com/@sadiq.umair"
            className="cursor-pointer hover:scale-110"><span className="font-bold text-[20px]">Medium</span>
            </a>
          </div>
        </div>

        <div
          className={`logos-slide h-[40px] whitespace-nowrap inline-flex
          ${isPaused ? '' : 'animate-slide'
          }`}
        >
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://github.com/umair440?tab=repositories">
              <FaGithub fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://github.com/umair440?tab=repositories"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Github</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/">
              <FaLinkedin fontSize={35} className="inline-block mr-2 " />
            </a>
            <a href="https://www.linkedin.com/in/umair-sadiq-04803b281/"
            className="cursor-pointer hover:scale-120"><span className="font-bold text-[20px]">Linkedin</span>
            </a>
          </div>
          <div className="h-[40px] mx-[40px] transition-all duration-200 ease hover:scale-120">
            <a href="https://medium.com/@sadiq.umair" className="cursor-pointer">
              <FaMedium fontSize={35} className="inline-block mr-2" />
            </a>
            <a href="https://medium.com/@sadiq.umair"
            className="cursor-pointer hover:scale-110"><span className="font-bold text-[20px]">Medium</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  
  </div>
  )
}

export default ProfileOverview
